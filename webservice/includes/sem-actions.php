<?php
/**
 * @return array
 */
function getCategories()
{
    return [
        [
            "id" => 1,
            "title" => "Herkenning",
            "subtitle" => "Informatie en tools voor herkenning",
        ],
        [
            "id" => 2,
            "title" => "Low vision",
            "subtitle" => "Informatie en tools voor low vision",
        ],
        [
            "id" => 3,
            "title" => "Service",
            "subtitle" => "Informatie en tools voor service",
        ],
        [
            "id" => 4,
            "title" => "Contrast",
            "subtitle" => "Informatie en tools voor contrast",
        ],
        [
            "id" => 5,
            "title" => "test1",
            "subtitle" => "Informatie en tools voor contrast",
        ],
        [
            "id" => 6,
            "title" => "test2",
            "subtitle" => "Informatie en tools voor contrast",
        ],
        [
            "id" => 7,
            "title" => "test3",
            "subtitle" => "Informatie en tools voor contrast",
        ],
        [
            "id" => 8,
            "title" => "test4",
            "subtitle" => "Informatie en tools voor contrast",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getCategoryDetails($id)
{
    $tags = [
        1 => [
            "title" => "Herkenning",
            "subtitle" => "Informatie en tools voor herkenning",
            "description" => "Put it in the oven and go!"
        ],
        2 => [
            "title" => "Low vision",
            "subtitle" => "Informatie en tools voor low vision",
            "description" => "You can make this delicious Dutch meal by ..."
        ],
        3 => [
            "title" => "Service",
            "subtitle" => "Informatie en tools voor service",
            "description" => "Very nice when your grandma prepares this meal"
        ],
        4 => [
            "title" => "Contrast",
            "subtitle" => "Informatie en tools voor contrast",
            "description" => "Everytime in the city after midnight"
        ],
        5 => [
            "title" => "test1",
            "subtitle" => "Informatie en tools voor contrast",
            "description" => "Everytime in the city after midnight"
        ],
        6 => [
            "title" => "test2",
            "subtitle" => "Informatie en tools voor contrast",
            "description" => "Everytime in the city after midnight"
        ],
        7 => [
            "title" => "test3",
            "subtitle" => "Informatie en tools voor contrast",
            "description" => "Everytime in the city after midnight"
        ],
        8 => [
            "title" => "test4",
            "subtitle" => "Informatie en tools voor contrast",
            "description" => "Everytime in the city after midnight"
        ]

    ];

    return $tags[$id];
}
