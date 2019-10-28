<?php

class dataPoint
{

    private $connection;
    private $building;
    private $room_number;
    private $capacity;

    public function __construct($db)
    {
        $this->connection = $db;
    }

    public function read()
    {
        $query = 'SELECT
				building, room_number, capacity
			FROM
				classroom';

        $prepare = $this->connection->prepare($query);
        $prepare->execute();
        return $prepare;
    }
}