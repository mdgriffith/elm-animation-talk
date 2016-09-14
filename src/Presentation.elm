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
import Color
import Polygons


(=>) =
    (,)


type Msg
    = Animate Animation.Msg
    | Forward
    | Back
    | Key Int
    | SwitchPolygon Int
    | ActivateFilter
    | MoveShadow


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
    , cssFilter : Animation.State
    , shadow : Animation.State
    , polygon : Animation.State
    , polygonIndex : Int
    , slides : List Slide
    , slideIndex : Int
    , slideSubIndex : Int
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


type Step
    = Code Animation.State String
    | BulletPoints Animation.State (List String)


slideStepCount : Slide -> Int
slideStepCount slide =
    case slide of
        Custom _ ->
            1

        Stepped content ->
            case content.steps of
                Nothing ->
                    1

                Just allSteps ->
                    1 + List.length allSteps


animateSlide slide animate =
    case slide of
        Custom content ->
            Custom
                { content | style = animate content.style }

        Stepped content ->
            Stepped
                { content | style = animate content.style }


animateStep slide index animate =
    case slide of
        Custom content ->
            Custom
                { content | style = animate content.style }

        Stepped content ->
            Stepped <|
                let
                    newSteps =
                        case content.steps of
                            Nothing ->
                                content.steps

                            Just steps ->
                                Just <|
                                    List.indexedMap
                                        (\i step ->
                                            if i == index - 1 then
                                                case step of
                                                    Code style content ->
                                                        Code (animate style) content

                                                    BulletPoints style points ->
                                                        BulletPoints (animate style) points
                                            else
                                                step
                                        )
                                        steps
                in
                    { content | steps = newSteps }


update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case message of
        Key code ->
            if code == 39 then
                --right arrow
                update Forward model
            else if code == 37 then
                --left arrow
                update Back model
            else
                ( model, Cmd.none )

        Forward ->
            let
                stepsInSlide =
                    Maybe.withDefault 0 <|
                        List.head <|
                            List.filterMap identity <|
                                List.indexedMap
                                    (\i slide ->
                                        if i == model.slideIndex then
                                            Just <| slideStepCount slide
                                        else
                                            Nothing
                                    )
                                    model.slides

                ( newSubIndex, switchSlides ) =
                    Debug.log "switch" <|
                        if model.slideSubIndex < stepsInSlide - 1 then
                            ( model.slideSubIndex + 1, False )
                        else
                            ( 0, True )

                newIndex =
                    if switchSlides then
                        if model.slideIndex < List.length model.slides - 1 then
                            model.slideIndex + 1
                        else
                            0
                    else
                        model.slideIndex

                newSlides =
                    List.indexedMap
                        (\i slide ->
                            if i == newIndex then
                                if switchSlides then
                                    animateSlide slide <|
                                        Animation.interrupt
                                            [ Animation.set
                                                [ Animation.display Animation.flex
                                                ]
                                            , Animation.to
                                                [ Animation.opacity 1
                                                ]
                                            ]
                                else
                                    animateStep slide newSubIndex <|
                                        Animation.interrupt
                                            [ Animation.to
                                                [ Animation.opacity 1
                                                ]
                                            ]
                            else if switchSlides && i == model.slideIndex then
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
                    , slideSubIndex = newSubIndex
                    , slides = newSlides
                  }
                , Cmd.none
                )

        Back ->
            let
                newIndex =
                    if model.slideIndex > 0 then
                        model.slideIndex - 1
                    else
                        List.length model.slides - 1

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
                            else if i == model.slideIndex then
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

        ActivateFilter ->
            ( { model
                | cssFilter =
                    Animation.interrupt
                        [ Animation.to
                            [ Animation.greyscale 100
                            ]
                        ]
                        model.cssFilter
              }
            , Cmd.none
            )

        MoveShadow ->
            ( { model
                | shadow =
                    Animation.interrupt
                        [ Animation.to
                            [ Animation.translate (px 100) (px 100)
                            , Animation.scale 1.2
                            , Animation.backgroundColor (Color.rgb 59 111 125)
                            , Animation.shadow
                                { offsetX = 50
                                , offsetY = 55
                                , blur = 15
                                , size = 0
                                , color = Color.rgba 0 0 0 0.1
                                }
                            ]
                        , Animation.to
                            [ Animation.translate (px 0) (px 0)
                            , Animation.scale 1
                            , Animation.backgroundColor (Color.rgb 96 181 204)
                            , Animation.shadow
                                { offsetX = 0
                                , offsetY = 0
                                , size = 0
                                , blur = 2
                                , color = Color.rgba 0 0 0 0.1
                                }
                            ]
                        ]
                        model.shadow
              }
            , Cmd.none
            )

        SwitchPolygon i ->
            let
                newPolygon =
                    List.head <| List.drop i Polygons.polygons
            in
                case newPolygon of
                    Just poly ->
                        ( { model
                            | polygon =
                                Animation.interrupt
                                    [ Animation.to poly ]
                                    model.polygon
                          }
                        , Cmd.none
                        )

                    Nothing ->
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
                                    let
                                        newSteps =
                                            case content.steps of
                                                Nothing ->
                                                    Nothing

                                                Just steps ->
                                                    Just <|
                                                        List.map
                                                            (\step ->
                                                                case step of
                                                                    Code style content ->
                                                                        Code (Animation.update animMsg style) content

                                                                    BulletPoints style content ->
                                                                        BulletPoints (Animation.update animMsg style) content
                                                            )
                                                            steps
                                    in
                                        Stepped
                                            { content
                                                | style = Animation.update animMsg content.style
                                                , steps = newSteps
                                            }
                        )
                        model.slides

                polygon =
                    Animation.update animMsg model.polygon

                cssFilter =
                    Animation.update animMsg model.cssFilter

                shadow =
                    Animation.update animMsg model.shadow
            in
                ( { model
                    | track = track
                    , slides = slides
                    , polygon = polygon
                    , cssFilter = cssFilter
                    , shadow = shadow
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


view : Model -> Html Msg
view model =
    div []
        [ node "link" [ href "https://fonts.googleapis.com/css?family=Open+Sans", rel "stylesheet" ] []
        , cornerStone "corner" Grey
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
            Html.code (Animation.render style ++ [ Style.code, class "elm" ])
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


initialSubStyle =
    Animation.style
        [ Animation.opacity 0
        ]


initialStyle =
    Animation.style
        [ Animation.opacity 0
        , Animation.display Animation.none
        ]


someCode str =
    Code initialSubStyle str


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
                    [ "fade in and change position"
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
[ to [ opacity 1
     , left (px 200)
     ]
, send DoneFadingIn
, loop
      [ to [ rotate (degrees 360) ]
      , set [ rotate (degrees 0) ]
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
Animation.interrupt
    [ ourListofInstructions
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
                    , "Springs (default in elm-style-animation)"
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
                    ]
                , bulletPoints
                    [ "Duration is a secondary property of the spring."
                    ]
                ]
        }
    , Stepped
        { title = "Animating Cool Stuff!"
        , hiddenNote = ""
        , style = initialStyle
        , steps = Nothing
        }
    , Custom
        { hiddenNote = ""
        , style = initialStyle
        , html = cssFilters
        }
    , Custom
        { hiddenNote = ""
        , style = initialStyle
        , html = polygonTransitions
        }
    , Custom
        { hiddenNote = ""
        , style = initialStyle
        , html = shadowMovement
        }
    , Custom
        { html = thanks
        , style = initialStyle
        , hiddenNote = ""
        }
    ]


cornell model =
    div [ Style.frame, Style.cornell ]
        [ div [ Style.name ]
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
                        , "height" => "120px"
                        , "padding" => "35px"
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
                        , "height" => "190px"
                        , "padding" => "0 45px"
                        ]
                    ]
                    []
                , br [] []
                , text "@ Cornell Tech"
                ]
            ]
        , br [] []
        , div [ Style.hiring ] [ text "We're hiring!" ]
        ]


cssFilters model =
    div [ Style.frame ]
        [ h1 [] [ text "Like CSS Filters!" ]
        , div [ Style.horizontal ]
            [ img (Animation.render model.cssFilter ++ [ src "http://placekitten.com/300/300?image=10", onClick ActivateFilter ]) []
            , Html.code [ Style.code ] [ text """
Animation.to
    [ Animation.greyscale (100)
    ]

                    """ ]
            ]
        ]


shadowMovement model =
    div [ Style.frame ]
        [ h1 [] [ text "Or shadows!" ]
        , div [ Style.horizontal ]
            [ div (Animation.render model.shadow ++ [ onMouseOver MoveShadow, Style.shadow ]) []
            , Html.code [ Style.code ] [ text """
Animation.to
   [ Animation.shadow
         { offsetX = 0
         , offsetY = 1
         , size = 0
         , blur = 2
         , color = black
         }
  ]

                    """ ]
            ]
        ]


polygonTransitions model =
    div [ Style.frame ]
        [ h1 [] [ text "Polygon Transitions!" ]
        , div [ Style.horizontal ]
            [ div [] [ Polygons.view model.polygon SwitchPolygon ]
            , Html.code [ Style.code ] [ text """
Animation.to
    [ Animation.points
        [ ( 161.649, 170.517 )
        , ( 8.869, 323.298 )
        , ( 314.43, 323.298 )
        ]
    , Animation.fill (Color.rgb 230 230 230)
    ]

                    """ ]
            ]
        ]


thanks model =
    div [ Style.frame ]
        [ h1 [] [ text "Thanks!" ]
        , div []
            [ ul []
                [ li [] [ text "mdgriffith/elm-style-animation" ]
                , li [] [ text "kitten image from placekitten.com " ]
                ]
            ]
        ]


talkIntro model =
    div [ Style.frame, Style.gearsSvg ]
        [ Gears.viewPlanetary model.gears
        , div []
            [ h1 [ Style.animHeader ] [ text "animation in elm" ]
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
              , polygon =
                    Animation.style
                        [ Animation.points
                            [ ( 8.867, 0 )
                            , ( 79.241, 70.375 )
                            , ( 232.213, 70.375 )
                            , ( 161.838, 0 )
                            ]
                        , Animation.fill <| Color.rgb 127 209 59
                        ]
              , shadow =
                    Animation.style
                        [ Animation.shadow
                            { offsetX = 0
                            , offsetY = 1
                            , size = 0
                            , blur = 2
                            , color = Color.rgba 0 0 0 0.1
                            }
                        , Animation.translate (px 0) (px 0)
                        , Animation.scale 1
                        , Animation.backgroundColor (Color.rgb 96 181 204)
                        ]
              , polygonIndex = 1
              , cssFilter =
                    Animation.style
                        [ Animation.blur (Animation.px 0)
                        , Animation.greyscale 0
                        ]
              , slides = slides
              , slideIndex = 0
              , slideSubIndex = 0
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


type CornerStoneColoring
    = AllColors
    | Green
    | Gold
    | Purple
    | Blue
    | Grey


cornerStone : String -> CornerStoneColoring -> Html Msg
cornerStone cls coloring =
    let
        blue =
            "#60B5CC"

        gold =
            "#F0AD00"

        purple =
            "#5A6378"

        green =
            "#7FD13B"

        grey =
            "rgba(0,0,0,0.1)"

        ( color1, color2, color3, color4 ) =
            case coloring of
                AllColors ->
                    ( blue, gold, purple, green )

                Green ->
                    ( green, green, green, green )

                Gold ->
                    ( gold, gold, gold, gold )

                Purple ->
                    ( purple, purple, purple, purple )

                Blue ->
                    ( blue, blue, blue, blue )

                Grey ->
                    ( grey, grey, grey, grey )
    in
        div [ class cls ]
            [ Svg.svg [ Svg.Attributes.version "1.1", Svg.Attributes.x "0px", Svg.Attributes.y "0px", Svg.Attributes.viewBox "0 0 323.1 323" ]
                [ Svg.rect
                    [ Svg.Attributes.x "65.6"
                    , Svg.Attributes.y "66.5"
                    , Svg.Attributes.transform "matrix(2.256997e-03 -1 1 2.256997e-03 -1.082 158.3655)"
                    , style [ ( "fill", color1 ) ]
                    , Svg.Attributes.width "26.5"
                    , Svg.Attributes.height "26.4"
                    ]
                    []
                , Svg.polygon
                    [ style [ ( "fill", color1 ) ]
                    , Svg.Attributes.points "62.2,62.4 0,0 0,124.5 "
                    ]
                    []
                , Svg.polygon
                    [ style [ ( "fill", color2 ) ]
                    , Svg.Attributes.points "3.2,126.2 20.2,159.6 20.2,109.2 "
                    ]
                    []
                , Svg.polygon
                    [ style [ ( "fill", color1 ) ]
                    , Svg.Attributes.points "161,0 131,30 299.7,0 "
                    ]
                    []
                , Svg.polygon
                    [ style [ ( "fill", color3 ) ]
                    , Svg.Attributes.points "20.2,169.2 0,129.3 0,293 "
                    ]
                    []
                , Svg.polygon
                    [ style [ ( "fill", color4 ) ]
                    , Svg.Attributes.points "53.3,96.4 32.9,96.4 23.6,105.8 23.6,130.7 "
                    ]
                    []
                , Svg.polygon
                    [ style [ ( "fill", color4 ) ]
                    , Svg.Attributes.points "126,30 156,0 69.4,0 39.4,30 "
                    ]
                    []
                , Svg.polygon
                    [ style [ ( "fill", color2 ) ]
                    , Svg.Attributes.points "34.6,30 64.6,0 4.6,0 "
                    ]
                    []
                , Svg.polygon
                    [ style [ ( "fill", color3 ) ]
                    , Svg.Attributes.points "122.6,33.4 38,33.4 64.6,60 "
                    ]
                    []
                , Svg.polygon
                    [ style [ ( "fill", color4 ) ]
                    , Svg.Attributes.points "92.1,63.6 92,51.5 64.8,63.6 "
                    ]
                    []
                , Svg.polygon
                    [ style [ ( "fill", color2 ) ]
                    , Svg.Attributes.points "62.2,93 62.2,67.3 36.3,93 "
                    ]
                    []
                ]
            ]
