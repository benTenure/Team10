<?php

/*
 * index.php
 * Author: Team 10
 * The endpoint for the REST API. Receives user parameters and asks for appropriate query, then decodes the result.
 *
 * HOW TO USE:
 * http://54.166.56.44/backend/index.php is the endpoint to call for a query.
 *
 * Pass in "action" to determine the type of query to perform
 * Parameters are:
 * timeBefore - XXXXXX means XX:XX:XX
 * timeAfter - XXXXXX means XX:XX:XX
 * dateBefore - XXXXXXXX means XXXX/XX/XX
 * dateAfter - XXXXXXXX means XXXX/XX/XX
 * action - (BetweenTimes, BetweenDates, BetweenBoth)
 *
 * Example call: http://54.166.56.44/backend/index.php?action=BetweenBoth&timeBefore=000000&timeAfter=100000&dateBefore=00000000&dateAfter=20191021
 * This will query all crimes between times 00:00:00 and 10:00:00 and between days 0000/00/00 and 2019/10/21.
 */


header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once 'Connector.php';
include_once 'dataPoint.php';

$connector = new Connector();
$connect = $connector->connect();

$data = new dataPoint($connect);

/*We might need this:
$_GET = json_decode(file_get_contents("php://input"), TRUE);
*/

// Might go back to just using one endpoint
// $result = $data->betweenBoth($_GET["startTime"], $_GET["endTime"], $_GET["startDate"], $_GET["endDate"]);

//"action" parameter determines what type of query to perform
switch ($_GET["action"]) {
    case 'BetweenTimes':
        $result = $data->betweenTimes($_GET["timeBefore"], $_GET["timeAfter"]);;
        break;
    case 'BetweenDates':
        $result = $data->betweenDates($_GET["dateBefore"], $_GET["dateAfter"]);
        break;
    case 'BetweenBoth':
        $result = $data->betweenBoth($_GET["timeBefore"], $_GET["timeAfter"], $_GET["dateBefore"], $_GET["dateAfter"]);;
        break;
    default:
        echo "No action selected.";
        break;
}

$num = $result->rowCount();
$itemList['data'] = array();

while($row = $result->fetch(PDO::FETCH_ASSOC)){
    extract($row);
    $item = array(
        'crimeid' => $crimeid,
        'crimedate' => $crimedate,
        'crimetime' => $crimetime,
        'crimecode' => $crimecode,
        'location' => $location,
        'description' => $description,
        'inside_outside' => $inside_outside,
        'weapon' => $weapon,
        'post' => $post,
        'district' => $district,
        'neighborhood' => $neighborhood,
        'longitude' => $longitude,
        'latitude' => $latitude,
        'premise' => $premise,
        'vri_name1' => $vri_name1,
        'total_incidents' => $total_incidents
    );

    array_push($itemList['data'], $item);
}

echo json_encode($itemList);
