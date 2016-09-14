module Polygons exposing (polygons, view)

import Time exposing (second)
import Html.App
import Html exposing (h1, div, Html)
import Html.Attributes as Attr
import Html.Events exposing (..)
import Svg exposing (..)
import Svg.Attributes exposing (..)
import Animation
import Color exposing (purple, green, rgb)


palette =
    { orange = rgb 240 173 0
    , green = rgb 127 209 59
    , lavender = rgb 90 99 120
    , blue = rgb 96 181 204
    }


polygons =
    [ [ Animation.points
            [ ( 161.649, 152.782 )
            , ( 231.514, 82.916 )
            , ( 91.783, 82.916 )
            ]
      , Animation.fill palette.orange
      ]
    , [ Animation.points
            [ ( 8.867, 0 )
            , ( 79.241, 70.375 )
            , ( 232.213, 70.375 )
            , ( 161.838, 0 )
            ]
      , Animation.fill palette.green
      ]
    , [ Animation.points
            [ ( 323.298, 143.724 )
            , ( 323.298, 0 )
            , ( 179.573, 0 )
            ]
      , Animation.fill palette.blue
      ]
    , [ Animation.points
            [ ( 152.781, 161.649 )
            , ( 0, 8.868 )
            , ( 0, 314.432 )
            ]
      , Animation.fill palette.lavender
      ]
    , [ Animation.points
            [ ( 255.522, 246.655 )
            , ( 323.298, 314.432 )
            , ( 323.298, 178.879 )
            ]
      , Animation.fill palette.orange
      ]
    , [ Animation.points
            [ ( 161.649, 170.517 )
            , ( 8.869, 323.298 )
            , ( 314.43, 323.298 )
            ]
      , Animation.fill palette.blue
      ]
    ]


greyedOut =
    List.map Animation.style
        [ [ Animation.points
                [ ( 161.649, 152.782 )
                , ( 231.514, 82.916 )
                , ( 91.783, 82.916 )
                ]
          , Animation.fill <| Color.rgb 230 230 230
          ]
        , [ Animation.points
                [ ( 8.867, 0 )
                , ( 79.241, 70.375 )
                , ( 232.213, 70.375 )
                , ( 161.838, 0 )
                ]
          , Animation.fill <| Color.rgb 230 230 230
          ]
        , [ Animation.points
                [ ( 323.298, 143.724 )
                , ( 323.298, 0 )
                , ( 179.573, 0 )
                ]
          , Animation.fill <| Color.rgb 230 230 230
          ]
        , [ Animation.points
                [ ( 152.781, 161.649 )
                , ( 0, 8.868 )
                , ( 0, 314.432 )
                ]
          , Animation.fill <| Color.rgb 230 230 230
          ]
        , [ Animation.points
                [ ( 255.522, 246.655 )
                , ( 323.298, 314.432 )
                , ( 323.298, 178.879 )
                ]
          , Animation.fill <| Color.rgb 230 230 230
          ]
        , [ Animation.points
                [ ( 161.649, 170.517 )
                , ( 8.869, 323.298 )
                , ( 314.43, 323.298 )
                ]
          , Animation.fill <| Color.rgb 230 230 230
          ]
        ]


view : Animation.State -> (Int -> msg) -> Html msg
view anim sendMsg =
    div
        [ Attr.style [ ( "width", "300px" ), ( "height", "300px" ), ( "cursor", "pointer" ), ( "margin-right", "50px" ) ]
        ]
        [ svg
            [ version "1.1"
            , x "0"
            , y "0"
            , viewBox "0 0 323.141 322.95"
            , transform "scale(0.7)"
            ]
          <|
            [ rect
                [ fill "rgb(230,230,230)"
                  --"#7FD13B"
                , x "192.99"
                , y "107.392"
                , width "107.676"
                , height "108.167"
                , transform "matrix(0.7071 0.7071 -0.7071 0.7071 186.4727 -127.2386)"
                ]
                []
            , Svg.g []
                (List.indexedMap
                    (\i poly -> polygon (Animation.render poly ++ [ onClick <| sendMsg i ]) [])
                    greyedOut
                )
            , polygon (Animation.render anim) []
            ]
        ]



--subscriptions : Model -> Sub Action
--subscriptions model =
--    Animation.subscription Animate [ model.shape ]
