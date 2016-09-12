module Style exposing (..)

import Html.Attributes


(=>) =
    (,)


base =
    [ "font-size" => "25px"
    , "color" => "#111"
    , "font-family" => "Open Sans"
    ]


frame =
    Html.Attributes.style <|
        [ "display" => "flex"
        , "flex" => "row"
        , "flex-direction" => "column"
        , "position" => "relative"
        , "margin" => "90px"
        , "justify-content" => "center"
        ]
            ++ base


gears =
    Html.Attributes.style <|
        --[ "fill" => "#c19849"
        [ "fill" => "#DDD"
        , "stroke" => "#888"
        , "stroke-width" => "2px"
        ]
