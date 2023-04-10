<?php
/**
 * @return array
 */
function getInfo()
{
    return [
        [
            "id" => 1,
            "name" => "Hoe ziet een slechtziend persoon in een winkelstraat,bruh",
            "description" => "Wat valt op? (10% zicht)",
        ],
        [
            "id" => 2,
            "name" => "Hoe ziet een persoon met Glaucoom en verkeers situatie",
            "description" => "Bij glaucoom wordt de oogzenuw beschadigd. Hierdoor ontstaat geleidelijk verlies van het gezichtsveld",
        ],
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
            "name" => "Glaucoom",
            "detailedDescription" => "Meestal is de oogboldruk bij glaucoom te hoog, maar de oogboldruk kan ook normaal zijn. Dat heet ‘normale druk glaucoom’. De behandeling bestaat uit het verlagen van de oogdruk. Ook bij normale druk glaucoom is dat vaak nodig."
        ],
    ];

    return $tags[$id];
}
