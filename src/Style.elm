module Style exposing (..)

import Html.Attributes


(=>) =
    (,)


base =
    [ "font-size" => "25px"
    , "color" => "#111"
    , "font-family" => "Open Sans"
    ]


container =
    Html.Attributes.style <|
        [ "display" => "flex"
        , "flex" => "row"
        , "flex-direction" => "column"
        , "position" => "relative"
        , "margin" => "90px auto"
        , "justify-content" => "center"
        , "background-color" => "white"
        , "width" => "800px"
        ]
            ++ base


cornell =
    Html.Attributes.style <|
        [ "text-align" => "center"
        ]


frame =
    Html.Attributes.style <|
        [ "display" => "flex"
        , "flex-direction" => "column"
        , "position" => "relative"
        , "margin" => "90px 0"
        , "justify-content" => "center"
        , "background-color" => "white"
        , "width" => "800px"
        ]
            ++ base


gears =
    Html.Attributes.style <|
        --[ "fill" => "#c19849"
        [ "fill" => "#c19849"
          --, "stroke" => "#888"
        , "stroke" => "white"
        , "stroke-width" => "2px"
        ]


gearsSvg =
    Html.Attributes.style <|
        [ "flex-direction" => "row"
        ]


body =
    Html.Attributes.style <|
        [ "background-color" => "#DDD"
        ]


code =
    Html.Attributes.style <|
        [ "white-space" => "pre"
        ]
