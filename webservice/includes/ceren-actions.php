<?php
/**
 * @return array
 */
function getOptions()
{
    return [
        [
            "id" => 1,
            "name" => "Links",
        ],
        [
            "id" => 2,
            "name" => "Grootte",
        ],
        [
            "id" => 3,
            "name" => "Contrast",
        ],
        [
            "id" => 4,
            "name" => "Lettertype",
        ],
        [
            "id" => 5,
            "name" => "Zwart-wit",
        ],
        [
            "id" => 6,
            "name" => "Spraak",
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
            "uitleg" => "Als het gaat om waarschuwingen, tekstuele links, knoppen en andere website-elementen 
            die mogelijk een actie vereisen van de gebruiker, vertrouw dan niet alleen op kleur om de 
            boodschap over te brengen.
            Bijna iedere websitegebruiker begrijpt dat tekst in een andere kleur dan de rest van de paragraaf 
            een hyperlink is. Maar wat als je slechtziend of kleurenblind bent en deze hyperlink niet opvalt 
            omdat hij voor jou dezelfde kleur lijkt te hebben als alle andere tekst? Dan mis jij de kans om op 
            die link te klikken.
            Om deze reden is het belangrijk dat hyperlinks onderstreept zijn. Onderstreepte tekst valt voor een 
            slechtziende of kleurenblinde sneller op dan gekleurde tekst.
            Plaats ook nooit onderstreepte of gekleurde tekst in je website die geen hyperlink blijkt te zijn. 
            Dit verwart zowel visueel beperkte als niet-beperkte websitegebruikers.",
            "tags" => ['link']
        ],
        2 => [

            "uitleg" => "Vergrotingssoftware en de mogelijkheid om de tekstgrootte in browserinstellingen 
            aan te passen. Veel mensen met een slecht gezichtsvermogen (vooral oudere mensen die mogelijk 
            aan leeftijdsgebonden verlies van het gezichtsvermogen lijden), gebruiken echter geen 
            vergrotingssoftware en zijn mogelijk niet bekend met de opties voor het aanpassen van de 
            tekstgrootte van hun browser.
            Bied gebruikers een duidelijke optie om de lettergrootte te wijzigen, ongeacht of het een 
            schuifregelaar, een vervolgkeuzelijst of een knop is. Zo worden merken en bedrijven 
            (vooral die met websites met veel content) gebruiksvriendelijker voor mensen met een visuele beperking.",
            "tags" => ['grootte']
        ],
        3 => [
            "uitleg" => "Test kleuren om er zeker van te zijn dat ze een dusdanige contrastverhouding hebben 
            dat ze de leesbaarheid verbeteren. Voor het testen van kleurcontrasten bestaan er tools, zoals 
            de Stark-plug-in voor ontwerpprogramma Sketch en de Check Contrast Ratio-add-on voor Photoshop. 
            Voor Adobe Illustrator is er helaas geen kleurenchecker, maar je kan je design wel bekijken met 
            de ingebouwde previewfunctie voor kleurenblinden.",
            "tags" => ['contrast']
        ],
        4 => [
            "uitleg" => "Kies duidelijke, simpele lettertypes voor je site. Verschillende fonts kunnen onduidelijk
            zijn, door bijvoorbeeld sierlijke letters of te weinig ruimte tussen letters.",
            "tags" => ['lettertype']
        ],
        5 => [
            "uitleg" => "Hoe meer kleuren in je website-ontwerp steekt, hoe moeilijker het waarschijnlijk zal 
            zijn om snel primaire acties en hyperlinks te identificeren — zelfs voor een niet-slechtziende gebruiker. 
            Voor een persoon met kleurenblindheid wordt dit alleen maar moeilijker naarmate er meer kleuren worden 
            geïntroduceerd.",
            "tags" => ['zwartwit']
        ],
        6 => [
            "uitleg" => "De meest gebruikelijke manier voor blinden om op het web te surfen, 
            is met een browser en schermlezer (ook bekend als tekst-naar-spraaksoftware). 
            Enkele van de meest gebruikte schermlezers zijn Microsoft Narrator voor Windows-gebruikers 
            en VoiceOver voor Mac-gebruikers. Begrijpen hoe tekst-naar-spraak-software blinden 
            en slechtzienden helpt om websites te ‘lezen’, is essentieel voor iedereen die voor
             ergelijke gebruikers websites ontwerpt. Vermijd voor mensen met schermlezers het 
             gebruik van vage linkteksten zoals ‘klik hier’. Mensen die schermlezers gebruiken, 
             gebruiken vaak een sneltoets om alle links op een pagina weer te geven. Zo kunnen 
             ze efficiënter navigeren over de website die ze niet zien. Aangezien deze lijst met 
             links geen omringende tekst heeft, creëert het een contextloze toestand. Als zodanig 
             is het absoluut noodzakelijk om beschrijvende en expliciete linkteksten te maken die 
             zelfs zonder context te begrijpen zijn.",
            "tags" => ['spraak']
        ],
    ];

    return $tags[$id];
}
