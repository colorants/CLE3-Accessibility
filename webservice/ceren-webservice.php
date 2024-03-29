<?php
//Require functions for actions
require_once "includes/ceren-actions.php";

//Based on the existence of the GET parameter, 1 of the 2 functions will be called
if (!isset($_GET['id'])) {
    $data = getOptions();
} else {
    $data = getOptionDetails($_GET['id']);
}
//Set the header & output JSON so the client will know what to expect.

header("Access-Control-Allow-Headers: X-Requested-With");
echo json_encode($data);
exit;
