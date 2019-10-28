<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once 'Connector.php';
include_once 'dataPoint.php';

$connector = new Connector();
$connect = $connector->connect();

$data = new dataPoint($connect);

$result = $data->read();
$num = $result->rowCount();
$itemList['data'] = array();

while($row = $result->fetch(PDO::FETCH_ASSOC)){
    extract($row);
    $item = array(
        'building' => $building,
        'room_number' => $room_number,
        'capacity' => $capacity
    );

    array_push($itemList['data'], $item);
}

echo json_encode($itemList);
