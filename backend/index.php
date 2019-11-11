<?php

/*

Parameters are:
timeBefore
timeAfter
dateBefore
dateAfter

Later we might do an 'action' parameter for filter type

*/


header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once 'Connector.php';
include_once 'dataPoint.php';

$connector = new Connector();
$connect = $connector->connect();

$data = new dataPoint($connect);

/* This segment may be added later for filters, or I might do a more general query

 * if($_GET["action"] = 'BetweenTimes'){
    $result = $data->betweenTimes($_GET["timeBefore"], $_GET["timeAfter"]);
} else if($_GET["action"] = 'BetweenDates'){
    $result = $data->betweenDates($_GET["dateBefore"], $_GET["dateAfter"]);
} else if($_GET["action"] = 'BetweenBoth'){
    $result = $data->betweenBoth($_GET["timeBefore"], $_GET["timeAfter"], $_GET["dateBefore"], $_GET["dateAfter"]);
}
*/

//Right now we are only going to use between both
$result = $data->betweenBoth($_GET["startTime"], $_GET["endTime"], $_GET["startDate"], $_GET["endDate"]);

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
