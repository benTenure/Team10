<?php
    class Connector {
        /**
         * @var PDO
         */
        private $conn;
        private $dsn = 'mysql:host=localhost;dbname=db';
        private $username = 'root';
        private $password = 'hello123';

        public function connect() {
            $this->conn = null;

            try{
                $this->conn = new PDO($this->dsn, $this->username, $this->password);
                echo "Connected!";
            } catch (PDOException $error) {
                echo 'Error.';
            }
        }
    }