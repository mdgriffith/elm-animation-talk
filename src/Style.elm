module Style exposing (..)

import Html.Attributes


(=>) =
    (,)


base =
    [ "font-size" => "25px"
    , "color" => "white"
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
          --, "background-color" => "white"
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
          --, "background-color" => "white"
        , "width" => "800px"
        ]
            ++ base


horizontal =
    Html.Attributes.style <|
        [ "display" => "flex"
        , "flex-direction" => "row"
        , "justify-content" => "center"
        ]


gears =
    Html.Attributes.style <|
        --[ "fill" => "#c19849"
        [ "fill" => "#c19849"
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
        , "font-family" => "Inconsolata"
        ]


hiring =
    Html.Attributes.style <|
        [ "background-color" => "rgba(0,0,0,0.1)"
        , "border-radius" => "3px"
        , "padding" => "5px 20px"
        , "width" => "300px"
        , "margin" => "0 auto"
        , "margin-top" => "30px"
        ]


name =
    Html.Attributes.style <|
        [ "font-size" => "37px"
        , "margin-bottom" => "60px"
        ]


animHeader =
    Html.Attributes.style <|
        [ "margin-bottom" => "0"
        ]


shadow =
    Html.Attributes.style <|
        [ "border-radius" => "5px"
        , "width" => "200px"
        , "height" => "200px"
        ]
