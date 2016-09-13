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


(=>) =
    (,)


type Msg
    = Animate Animation.Msg


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
    }


type Slide
    = Stepped
        { title : String
        , steps : Maybe (List Step)
        , hiddenNote : String
        }
    | Custom
        { html : Model -> Html Msg
        , hiddenNote : String
        , style : Animation.State
        }


makeContent txt =
    { style = initialStyle
    , content = txt
    , focus = False
    }


initialStyle =
    Animation.style [ Animation.opacity 1 ]


type Step
    = Code StepContent
    | BulletPoints (List StepContent)


type alias StepContent =
    { style : Animation.State
    , content : String
    , focus : Bool
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case message of
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
            in
                ( { model
                    | track = track
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
            html model

        Stepped { title, steps, hiddenNote } ->
            div [ class "slide", Style.frame ]
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
        Code { style, content, focus } ->
            code (Animation.render style ++ [ Style.code ])
                [ text content ]

        BulletPoints points ->
            let
                renderPoints { style, content, focus } =
                    li (Animation.render style) [ text content ]
            in
                ul []
                    (List.map renderPoints points)


slides : List Slide
slides =
    [ Custom
        { html = cornell
        , style = initialStyle
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
        , steps =
            Just
                [ BulletPoints
                    [ makeContent "fade in"
                    , makeContent "then tell me it's done"
                    , makeContent "then begin rotating until further notice"
                    ]
                ]
        }
    , Stepped
        { title = "A list as our interface"
        , hiddenNote = "OK, so I got this thing.  I need it to make it:"
        , steps =
            Just
                [ Code <|
                    makeContent """
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
        , steps =
            Just
                [ BulletPoints
                    [ makeContent "Smoothly interrupt it"
                    , makeContent "Queue up after it"
                    ]
                , Code <|
                    makeContent """
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
        , steps =
            Just
                [ BulletPoints
                    [ makeContent "Duration/Easing"
                    , makeContent "Springs <- default in elm-style-animation"
                    , makeContent "Use springs"
                    , makeContent "You might want to use springs"
                    , makeContent "Springs are probably what you want"
                    ]
                ]
        }
    , Stepped
        { title = "Intuition for Springs"
        , hiddenNote = "You’re may be avoiding springs because no one gave you a good intuition about them.  And they’re hard to do in CSS Transitions.  You have two properties to specify to create a spring.  First, the stiffness, which says 'how fast does this move'?  Second, the damping which says 'how fast does this settle?'"
        , steps =
            Just
                [ BulletPoints
                    [ makeContent "Stiffness - How fast does it move?"
                    , makeContent "Damping - How fast does it settle?"
                    , makeContent "Duration is a secondary property of the spring.  You don't specify it."
                    ]
                ]
        }
    , Stepped
        { title = "Animating Cool Stuff!"
        , hiddenNote = ""
        , steps =
            Just
                [ Code <|
                    makeContent """
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
        , steps =
            Just
                [ Code <|
                    makeContent """
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
        , steps =
            Just
                [ Code <|
                    makeContent """
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
        , steps =
            Just
                [ Code <|
                    makeContent """
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
              }
            , Cmd.none
            )
        , view = view
        , update = update
        , subscriptions =
            (\model ->
                Sub.batch
                    [ Animation.subscription model.gears.annulus Animate
                    , Animation.subscription model.gears.sun Animate
                    , Animation.subscription model.gears.smallPlanet Animate
                    , Animation.subscription model.gears.largePlanet Animate
                    , Animation.subscription model.gears.mediumPlanet Animate
                      --, if model.moving then
                      --    Mouse.moves Move
                      --  else
                      --    Sub.none
                      --, if model.moving then
                      --    Mouse.ups (\_ -> StopDragging)
                      --  else
                      --    Sub.none
                    ]
            )
        }
