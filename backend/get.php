<?php

/*Run with

php get.php BetweenTimes param1 param2

OR

php get.php BetweenDates param1 param2

OR

php get.php BetweenBoth param1 param2 param3 param4
where params 1 and 2 are times and params 3 and 4 are dates.

*/


header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once 'Connector.php';
include_once 'dataPoint.php';

$connector = new Connector();
$connect = $connector->connect();

$data = new dataPoint($connect);

if($argv[1] = 'BetweenTimes'){
    $result = $data->betweenTimes($argv[2], $argv[3]);
} else if($argv[1] = 'BetweenDates'){
    $result = $data->betweenDates($argv[2], $argv[3]);
} else if($argv[1] = 'BetweenBoth'){
    $result = $data->betweenBoth($argv[2], $argv[3], $argv[4], $argv[5]);
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
