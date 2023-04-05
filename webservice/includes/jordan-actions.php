<?php

/**
 * @return array
 */
function getInfo()
{
    return [
        [
            "id" => 1,
            "name" => "Zara",
        ],
        [
            "id" => 2,
            "name" => "h&m",
        ],
        [
            "id" => 3,
            "name" => "c&a",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getInfoDetails($id)
{
    $tags = [
        1 => [
            "location" => "Binnenwegplein 31, 3012 KA Rotterdam",
        ],
        2 => [
            "location" => "Binnenwegplein 31, 3012 KA Rotterdam",
        ],
        3 => [
            "location" => "Binnenwegplein 31, 3012 KA Rotterdam",
        ]

    ];

    return $tags[$id];
}
