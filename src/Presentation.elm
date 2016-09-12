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


type Msg
    = Animate Animation.Msg



--| StartDragging
--| StopDragging
--| Move Mouse.Position


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


type alias Slide =
    { title : String
    , steps : Maybe (List Step)
    , hiddenNote : String
    }


slides : List Slide
slides =
    [ { title = "How do we talk about animation?"
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
    ]


makeContent txt =
    { style = Animation.style [ Animation.opacity 0 ]
    , content = txt
    , focus = False
    }


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
        --Move { x, y } ->
        --    ( { model
        --        | track =
        --            Animation.interrupt
        --                [ Animation.to
        --                    [ Animation.left (px <| toFloat x)
        --                    , Animation.top (px <| toFloat y)
        --                    ]
        --                ]
        --                model.track
        --      }
        --    , Cmd.none
        --    )
        --StartDragging ->
        --    ( { model | moving = True }
        --    , Cmd.none
        --    )
        --StopDragging ->
        --    ( { model | moving = False }
        --    , Cmd.none
        --    )
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


viewIntro model =
    div [ Style.frame ]
        [ div [] [ text "Animation in Elm" ]
        , Gears.viewPlanetary model.gears
        , div []
            [ text "Using the "
            , i [] [ text "elm-style-animation" ]
            , text " library"
            ]
        ]



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
        , viewIntro model
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
