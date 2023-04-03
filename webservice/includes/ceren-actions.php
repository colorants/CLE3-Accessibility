<?php
/**
 * @return array
 */
function getOptions()
{
    return [
        [
            "id" => 1,
            "name" => "links",
            "kitchen" => "Italian",
        ],
        [
            "id" => 2,
            "name" => "grootte",
            "kitchen" => "Dutch",
        ],
        [
            "id" => 3,
            "name" => "contrast",
            "kitchen" => "Italian",
        ],
        [
            "id" => 4,
            "name" => "lettertype",
            "kitchen" => "Turkish",
        ],
        [
            "id" => 5,
            "name" => "zwartwit",
            "kitchen" => "Spanish",
        ],
        [
        "id" => 6,
        "name" => "spraak",
        "kitchen" => "Turkish",
    ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getOptionDetails($id)
{
    $tags = [
        1 => [
            "uitleg" => "Put it in the oven and go!",
            "tags" => ['link']
        ],
        2 => [
            "uitleg" => "You can make this delicious Dutch meal by ...",
            "tags" => ['grootte']
        ],
        3 => [
            "uitleg" => "Very nice when your grandma prepares this meal",
            "tags" => ['contrast']
        ],
        4 => [
            "uitleg" => "Everytime in the city after midnight",
            "tags" => ['lettertype']
        ],
        5 => [
            "uitleg" => "Specialty when on holiday in Spain",
            "tags" => ['zwartwit']
        ],
        4 => [
            "uitleg" => "Everytime in the city after midnight",
            "tags" => ['spraak']
        ],
    ];

    return $tags[$id];
}
