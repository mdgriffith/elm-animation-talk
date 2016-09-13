module Main exposing (..)

import Time exposing (second, Time)
import Html.App
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Animation exposing (turn, px)
import Gears
import Style
import Svg
import Svg.Attributes
import Mouse
import Keyboard


(=>) =
    (,)


type Msg
    = Animate Animation.Msg
    | Forward
    | Back
    | Key Int


type alias Model =
    { moving : Bool
    , track : Animation.State
    , gears :
        { annulus : Animation.State
        , sun : Animation.State
        , smallPlanet : Animation.State
        , mediumPlanet : Animation.State
        , largePlanet : Animation.State
        , global : Animation.State
        }
    , slides : List Slide
    , slideIndex : Int
    }


type Slide
    = Stepped
        { title : String
        , steps : Maybe (List Step)
        , hiddenNote : String
        , style : Animation.State
        }
    | Custom
        { html : Model -> Html Msg
        , hiddenNote : String
        , style : Animation.State
        }


initialSubStyle =
    Animation.style
        [ Animation.opacity 1
        , Animation.display Animation.block
        ]


initialStyle =
    Animation.style
        [ Animation.opacity 0
        , Animation.display Animation.none
        ]


type Step
    = Code Animation.State String
    | BulletPoints Animation.State (List String)



--isFocused : Slide -> Bool
--isFocused slide =
--    case slide of
--        Custom frame ->
--            frame.focus
--        Stepped frame ->
--            frame.focus
--isFinished : Slide -> Bool
--isFinished slide =
--    Debug.log "is-finished" <|
--        case slide of
--            Custom frame ->
--                frame.focus == True
--            Stepped frame ->
--                case frame.steps of
--                    Nothing ->
--                        frame.focus == True
--                    Just steps ->
--                        List.reverse steps
--                            |> List.head
--                            |> Maybe.map stepIsFinished
--                            |> Maybe.withDefault False
--markAsFinished : Slide -> Slide
--markAsFinished slide =
--    case slide of
--        Custom frame ->
--            Custom { frame | focus = True }
--        Stepped frame ->
--            Stepped
--                { frame
--                    | focus = True
--                    , steps = Maybe.map (List.map markAsFinishedStep) frame.steps
--                }
--markAsFinishedStep : Step -> Step
--markAsFinishedStep step =
--    case step of
--        Code content ->
--            Code { content | focus = True }
--        BulletPoints bullets ->
--            BulletPoints <|
--                List.map (\bull -> { bull | focus = True }) bullets
--stepHasFocus : Step -> Bool
--stepHasFocus step =
--    case step of
--        Code content ->
--            content.focus
--        BulletPoints bullets ->
--            List.any .focus bullets
--stepIsFinished : Step -> Bool
--stepIsFinished step =
--    case step of
--        Code content ->
--            content.focus
--        BulletPoints bullets ->
--            List.reverse bullets
--                |> List.head
--                |> Maybe.map .focus
--                |> Maybe.withDefault False
--advanceStep step =
--    case step of
--        Code content ->
--            Code { content | focus = not content.focus }
--        BulletPoints bullets ->
--            if List.any .focus <| List.drop (List.length bullets - 1) bullets then
--                markAsFinishedStep step
--            else if List.any .focus bullets then
--                BulletPoints <|
--                    fst <|
--                        List.foldl
--                            (\bull ( allBullets, previousFlagged ) ->
--                                if previousFlagged then
--                                    ( allBullets ++ [ { bull | focus = True } ], False )
--                                else
--                                    ( allBullets ++ [ bull ], bull.focus )
--                            )
--                            ( [], False )
--                            bullets
--            else
--                case bullets of
--                    [] ->
--                        BulletPoints bullets
--                    b :: bs ->
--                        BulletPoints <| { b | focus = True } :: bs
--advance : Slide -> Slide
--advance slide =
--    case slide of
--        Custom frame ->
--            Custom { frame | focus = True }
--        Stepped frame ->
--            case frame.steps of
--                Nothing ->
--                    Stepped { frame | focus = True }
--                Just steps ->
--                    if List.any stepHasFocus steps then
--                        let
--                            advancedSteps =
--                                fst <|
--                                    List.foldl
--                                        (\step ( newSteps, focusPointPassed ) ->
--                                            if focusPointPassed then
--                                                ( newSteps ++ [ advanceStep step ], False )
--                                            else if stepHasFocus step then
--                                                if stepIsFinished step then
--                                                    ( newSteps ++ [ markAsFinishedStep step ], True )
--                                                else
--                                                    ( newSteps ++ [ advanceStep step ], False )
--                                            else
--                                                ( newSteps ++ [ step ], False )
--                                        )
--                                        ( [], False )
--                                        steps
--                        in
--                            Stepped
--                                { frame
--                                    | focus = True
--                                    , steps = Just advancedSteps
--                                }
--                    else
--                        case steps of
--                            [] ->
--                                Stepped
--                                    { frame
--                                        | focus = True
--                                    }
--                            s :: alls ->
--                                Stepped
--                                    { frame
--                                        | focus = True
--                                        , steps = Just (advanceStep s :: alls)
--                                    }
--animateSlide : Slide ->


animateSlide slide animate =
    case slide of
        Custom content ->
            Custom
                { content | style = animate content.style }

        Stepped content ->
            Stepped
                { content | style = animate content.style }


update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case message of
        Key code ->
            if code == 39 then
                --right arrow
                update Forward model
            else if code == 40 then
                --left arrow
                update Back model
            else
                ( model, Cmd.none )

        Forward ->
            let
                newIndex =
                    Debug.log "new Index" <|
                        if model.slideIndex < List.length model.slides - 1 then
                            model.slideIndex + 1
                        else
                            0

                newSlides =
                    List.indexedMap
                        (\i slide ->
                            if i == newIndex then
                                animateSlide slide <|
                                    Animation.interrupt
                                        [ Animation.set
                                            [ Animation.display Animation.block
                                            ]
                                        , Animation.to
                                            [ Animation.opacity 1
                                            ]
                                        ]
                            else if i == newIndex - 1 then
                                animateSlide slide <|
                                    Animation.interrupt
                                        [ Animation.set
                                            [ Animation.opacity 0
                                            , Animation.display Animation.none
                                            ]
                                        ]
                            else
                                slide
                        )
                        model.slides
            in
                ( { model
                    | slideIndex = newIndex
                    , slides = newSlides
                  }
                , Cmd.none
                )

        --let
        --    newSlides =
        --        List.reverse <|
        --            fst <|
        --                List.foldl
        --                    (\slide ( allSlides, previousFrameFinished ) ->
        --                        let
        --                            ( newSlide, fin ) =
        --                                if previousFrameFinished then
        --                                    ( advance slide, False )
        --                                else if isFocused slide then
        --                                    if isFinished slide then
        --                                        ( markAsFinished slide, True )
        --                                    else
        --                                        ( advance slide, False )
        --                                else
        --                                    ( slide, previousFrameFinished )
        --                        in
        --                            ( newSlide :: allSlides, fin )
        --                    )
        --                    ( [], False )
        --                    model.slides
        --    _ =
        --        Debug.log "focus" <| toString <| List.map isFocused newSlides
        --in
        --    ( { model | slides = newSlides }
        --    , Cmd.none
        --    )
        Back ->
            ( model, Cmd.none )

        Animate animMsg ->
            let
                annulus =
                    Animation.update animMsg model.gears.annulus

                sun =
                    Animation.update animMsg model.gears.sun

                smallPlanet =
                    Animation.update animMsg model.gears.smallPlanet

                mediumPlanet =
                    Animation.update animMsg model.gears.mediumPlanet

                largePlanet =
                    Animation.update animMsg model.gears.largePlanet

                global =
                    Animation.update animMsg model.gears.global

                track =
                    Animation.update animMsg model.track

                slides =
                    List.map
                        (\slide ->
                            case slide of
                                Custom content ->
                                    Custom
                                        { content
                                            | style = Animation.update animMsg content.style
                                        }

                                Stepped content ->
                                    Stepped
                                        { content
                                            | style = Animation.update animMsg content.style
                                        }
                        )
                        model.slides
            in
                ( { model
                    | track = track
                    , slides = slides
                    , gears =
                        { annulus = annulus
                        , sun = sun
                        , smallPlanet = smallPlanet
                        , mediumPlanet = mediumPlanet
                        , largePlanet = largePlanet
                        , global = global
                        }
                  }
                , Cmd.none
                )



--div
--            (Animation.render model.track
--                ++ [ style
--                        [ ( "position", "fixed" )
--                        , ( "width", "20px" )
--                        , ( "height", "20px" )
--                        , ( "border-radius", "10px" )
--                        , ( "background-color", "#CCC" )
--                        , ( "z-index", "500" )
--                        , ( "margin-left", "-10px" )
--                        , ( "margin-top", "-10px" )
--                        ]
--                   , onMouseDown StartDragging
--                   ]
--            )
--            []


view : Model -> Html Msg
view model =
    div []
        [ node "link" [ href "https://fonts.googleapis.com/css?family=Open+Sans", rel "stylesheet" ] []
        , div [ Style.container ] (List.map (viewSlide model) model.slides)
        ]


viewSlide : Model -> Slide -> Html Msg
viewSlide model slide =
    case slide of
        Custom { html, style, hiddenNote } ->
            div (Animation.render style)
                [ html model
                ]

        Stepped { title, steps, hiddenNote, style } ->
            div
                (Style.frame :: Animation.render style)
                [ h1 [] [ text title ]
                , case steps of
                    Nothing ->
                        text ""

                    Just realSteps ->
                        div [ class "steps" ]
                            (List.map viewStep realSteps)
                ]


viewStep : Step -> Html Msg
viewStep step =
    case step of
        Code style content ->
            code (Animation.render style ++ [ Style.code ])
                [ text content
                ]

        BulletPoints style points ->
            let
                renderPoints content =
                    li (Animation.render style)
                        [ text content
                        ]
            in
                ul (Animation.render style)
                    (List.map renderPoints points)


someCode str =
    someCode str


bulletPoints points =
    BulletPoints initialSubStyle points


slides : List Slide
slides =
    [ Custom
        { html = cornell
        , style = Animation.style [ Animation.opacity 1, Animation.display Animation.block ]
        , hiddenNote = ""
        }
    , Custom
        { html = talkIntro
        , style = initialStyle
        , hiddenNote = ""
        }
    , Stepped
        { title = "How do we talk about animation?"
        , hiddenNote = "OK, so I got this thing.  I need it to make it:"
        , style = initialStyle
        , steps =
            Just
                [ bulletPoints
                    [ "fade in"
                    , "then tell me it's done"
                    , "then begin rotating until further notice"
                    ]
                ]
        }
    , Stepped
        { title = "A list as our interface"
        , hiddenNote = "OK, so I got this thing.  I need it to make it:"
        , style = initialStyle
        , steps =
            Just
                [ someCode """
    [ Animation.to [ opacity 1 ]
    , Animation.send DoneFadingIn
    , Animation.loop
          [ Animation.to [ rotate (degrees 360) ]
          , Animateion.set [ rotate (degrees 0) ]
          ]
    ]
"""
                ]
        }
    , Stepped
        { title = "What if the animation is already doing something?"
        , hiddenNote = "OK, so I got this thing.  I need it to make it:"
        , style = initialStyle
        , steps =
            Just
                [ bulletPoints
                    [ "Smoothly interrupt it"
                    , "Queue up after it"
                    ]
                , someCode """
Animation.interrupt -- or Animation.queue
    [ Animation.to [ opacity 1 ]
    , Animation.send DoneFadingIn
    , Animation.loop
          [ Animation.to [ rotate (degrees 360) ]
          , Animateion.set [ rotate (degrees 0) ]
          ]
    ]
"""
                ]
        }
    , Stepped
        { title = "How do we get from A to B?"
        , hiddenNote = "OK, so I got this thing.  I need it to make it:"
        , style = initialStyle
        , steps =
            Just
                [ bulletPoints
                    [ "Duration/Easing"
                    , "Springs <- default in elm-style-animation"
                    , "Use springs"
                    , "You might want to use springs"
                    , "Springs are probably what you want"
                    ]
                ]
        }
    , Stepped
        { title = "Intuition for Springs"
        , hiddenNote = "You’re may be avoiding springs because no one gave you a good intuition about them.  And they’re hard to do in CSS Transitions.  You have two properties to specify to create a spring.  First, the stiffness, which says 'how fast does this move'?  Second, the damping which says 'how fast does this settle?'"
        , style = initialStyle
        , steps =
            Just
                [ bulletPoints
                    [ "Stiffness - How fast does it move?"
                    , "Damping - How fast does it settle?"
                    , "Duration is a secondary property of the spring.  You don't specify it."
                    ]
                ]
        }
    , Stepped
        { title = "Animating Cool Stuff!"
        , hiddenNote = ""
        , style = initialStyle
        , steps =
            Just
                [ someCode """
Animation.to
  [ Animation.blur (px 5)
  , Animation.greyscale (100)
  ]

                    """
                ]
        }
    , Stepped
        { title = "Like CSS Filters!"
        , hiddenNote = ""
        , style = initialStyle
        , steps =
            Just
                [ someCode """
Animation.to
  [ Animation.blur (px 5)
  , Animation.greyscale (100)
  ]

                    """
                ]
        }
    , Stepped
        { title = "Polygon Morphing!"
        , hiddenNote = ""
        , style = initialStyle
        , steps =
            Just
                [ someCode """
Animation.interrupt
    [ Animation.to [ opacity 1 ]
    , Animation.to [ opacity 1 ]
    , Animation.to [ opacity 1 ]
    ]


                    """
                ]
        }
    , Stepped
        { title = "And Shadows!"
        , hiddenNote = ""
        , style = initialStyle
        , steps =
            Just
                [ someCode """
Animation.to
       [ Animation.shadow
                 { offsetX = 0
                 , offsetY = 1
                 , size = 0
                 , blur = 2
                 , color = black
                 }
      ]
                    """
                ]
        }
    , Custom
        { html = thanks
        , style = initialStyle
        , hiddenNote = ""
        }
    ]


cornell model =
    div [ Style.frame, Style.cornell ]
        [ div []
            [ text "Matthew Griffith"
            ]
        , div
            [ style
                [ "display" => "flex"
                , "justify-content" => "center"
                ]
            ]
            [ div []
                [ img
                    [ src "http://blog.cornelltech.io/content/images/2016/06/Mark-Solid-Foundry-F-Gradient.png"
                    , style
                        [ "width" => "auto"
                        , "height" => "60px"
                        , "padding" => "20px"
                        ]
                    ]
                    []
                , br [] []
                , text "The Foundry"
                ]
            , div []
                [ img
                    [ src "https://mdgriffith.github.io/cornelltech/CornellTechLogo.png"
                    , style
                        [ "width" => "auto"
                        , "height" => "100px"
                        , "padding" => "0 45px"
                        ]
                    ]
                    []
                , br [] []
                , text "@ Cornell Tech"
                ]
            ]
        , div [] [ text "We're hiring!" ]
        ]


thanks model =
    div [ Style.frame ]
        [ h1 [] [ text "Thanks!" ]
        , div []
            [ text "Animation Library "
            , br [] []
            , i [] [ text "mdgriffith/elm-style-animation" ]
            ]
        ]


talkIntro model =
    div [ Style.frame, Style.gearsSvg ]
        [ Gears.viewPlanetary model.gears
        , div []
            [ h1 [] [ text "animation in elm" ]
            , text "using the "
            , i [] [ text "elm-style-animation" ]
            , text " library"
            ]
        ]


main =
    Html.App.program
        { init =
            ( { moving = False
              , track =
                    Animation.style
                        [ Animation.left (px 0)
                        , Animation.top (px 0)
                        ]
              , gears =
                    Gears.beginInitialRotate
                        { annulus =
                            Animation.style
                                [ Animation.rotate (turn 0) ]
                        , sun =
                            Animation.style
                                [ Animation.rotate (turn 0) ]
                        , smallPlanet =
                            Animation.style
                                [ Animation.rotate (turn 0) ]
                        , mediumPlanet =
                            Animation.style
                                [ Animation.rotate (turn 0) ]
                        , largePlanet =
                            Animation.style
                                [ Animation.rotate (turn 0) ]
                        , global =
                            Animation.style
                                [ Animation.rotate (turn 0) ]
                        }
              , slides = slides
              , slideIndex = 0
              }
            , Cmd.none
            )
        , view = view
        , update = update
        , subscriptions =
            (\model ->
                Sub.batch
                    [ Animation.subscription Animate
                        [ model.gears.annulus
                        , model.gears.sun
                        , model.gears.smallPlanet
                        , model.gears.largePlanet
                        , model.gears.mediumPlanet
                        ]
                      --, if model.moving then
                      --    Mouse.moves Move
                      --  else
                      --    Sub.none
                      --, if model.moving then
                      --    Mouse.ups (\_ -> StopDragging)
                      --  else
                      --    Sub.none
                    , Keyboard.downs Key
                    ]
            )
        }
