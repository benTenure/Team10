<?php

/*

Pass in "action" to determine the type of query to perform

Parameters are:
timeBefore
timeAfter
dateBefore
dateAfter
action - (BetweenTimes, BetweenDates, BetweenBoth)

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
