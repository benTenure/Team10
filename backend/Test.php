<?php
/*
 * Test file for REST API.
 * Author: Robert Brosh
 * Note that if one wants to run these tests, they will probably have to restart the MySQL server first with this
 * command: sudo systemctl restart mysqld
 */

class Test extends \PHPUnit\Framework\TestCase
{
    /**
     * Query all crimes between times 00:00:00 and 10:00:00 and between days 0000/00/00 and 2019/10/21.
     * Author: Robert Brosh
     * Works as expected. Produces the appropriate json string.
     * @test
     */
    public function BothTest(){
        $expected = "{\"data\":[{\"crimeid\":\"231487\",\"crimedate\":\"2019-10-21\",\"crimetime\":\"08:40:00\",\"crimecode\":\"4E\",\"location\":\"MADISON ST & EDISON HY\",\"description\":\"COMMON ASSAULT\",\"inside_outside\":\"\",\"weapon\":\"NA\",\"post\":\"333\",\"district\":\"EASTERN\",\"neighborhood\":\"\",\"longitude\":\"-76.5728685\",\"latitude\":\"39.300282\",\"premise\":\"\",\"vri_name1\":\"\",\"total_incidents\":\"1\"},{\"crimeid\":\"231489\",\"crimedate\":\"2019-10-20\",\"crimetime\":\"10:00:00\",\"crimecode\":\"4E\",\"location\":\"200 S HIGHLAND AVE\",\"description\":\"COMMON ASSAULT\",\"inside_outside\":\"I\",\"weapon\":\"NA\",\"post\":\"225\",\"district\":\"SOUTHEAST\",\"neighborhood\":\"HUDSON-HIGHLANDTOWN\",\"longitude\":\"-76.569205\",\"latitude\":\"39.288866\",\"premise\":\"ROW\/TOWNHOUSE-OCC\",\"vri_name1\":\"\",\"total_incidents\":\"1\"},{\"crimeid\":\"231491\",\"crimedate\":\"2019-10-20\",\"crimetime\":\"08:25:00\",\"crimecode\":\"4A\",\"location\":\"600 N GLOVER ST\",\"description\":\"AGG. ASSAULT\",\"inside_outside\":\"O\",\"weapon\":\"FIREARM\",\"post\":\"221\",\"district\":\"SOUTHEAST\",\"neighborhood\":\"MCELDERRY PARK\",\"longitude\":\"-76.580116\",\"latitude\":\"39.298568\",\"premise\":\"STREET\",\"vri_name1\":\"\",\"total_incidents\":\"1\"},{\"crimeid\":\"231499\",\"crimedate\":\"2019-10-17\",\"crimetime\":\"09:00:00\",\"crimecode\":\"7A\",\"location\":\"3400 CLIFTON AVE\",\"description\":\"AUTO THEFT\",\"inside_outside\":\"O\",\"weapon\":\"NA\",\"post\":\"812\",\"district\":\"SOUTHWEST\",\"neighborhood\":\"MOUNT HOLLY\",\"longitude\":\"-76.674275\",\"latitude\":\"39.311\",\"premise\":\"STREET\",\"vri_name1\":\"\",\"total_incidents\":\"1\"}]}";
        $input = "http://54.166.56.44/backend/index.php?action=BetweenBoth&timeBefore=000000&timeAfter=100000&dateBefore=00000000&dateAfter=20191021";
        $payload = file_get_contents($input);
        $this->assertEquals($expected, $payload);
    }

    /**
     * Query all crimes between times between 11:50:35 and 12:05:00.
     * Author: Robert Brosh
     * Works as expected. Produces the appropriate json string.
     * @test
     */
    public function TimesTest(){
        $expected = "{\"data\":[{\"crimeid\":\"231495\",\"crimedate\":\"2019-10-18\",\"crimetime\":\"12:00:00\",\"crimecode\":\"6G\",\"location\":\"4300 RASPE AVE\",\"description\":\"LARCENY\",\"inside_outside\":\"I\",\"weapon\":\"NA\",\"post\":\"445\",\"district\":\"NORTHEAST\",\"neighborhood\":\"CEDMONT\",\"longitude\":\"-76.534931\",\"latitude\":\"39.349138\",\"premise\":\"SCHOOL\",\"vri_name1\":\"\",\"total_incidents\":\"1\"}]}";
        $input = "http://54.166.56.44/backend/index.php?action=BetweenTimes&timeBefore=115035&timeAfter=120500";
        $payload = file_get_contents($input);
        $this->assertEquals($expected, $payload);
    }

    /**
     * Query all crimes between 2019/10/23 and 2019/10/24.
     * Author: Robert Brosh
     * Works as expected. Produces the appropriate json string.
     * @test
     */
    public function DatesTest(){
        $expected = "{\"data\":[{\"crimeid\":\"231477\",\"crimedate\":\"2019-10-24\",\"crimetime\":\"16:45:00\",\"crimecode\":\"6D\",\"location\":\"RD & PARKSIDE DR\",\"description\":\"LARCENY FROM AUTO\",\"inside_outside\":\"O\",\"weapon\":\"NA\",\"post\":\"422\",\"district\":\"NORTHEAST\",\"neighborhood\":\"\",\"longitude\":\"-76.5659655\",\"latitude\":\"39.327732\",\"premise\":\"STREET\",\"vri_name1\":\"Northeastern\",\"total_incidents\":\"1\"},{\"crimeid\":\"231478\",\"crimedate\":\"2019-10-24\",\"crimetime\":\"12:40:00\",\"crimecode\":\"6D\",\"location\":\"0 N SMALLWOOD ST\",\"description\":\"LARCENY FROM AUTO\",\"inside_outside\":\"O\",\"weapon\":\"NA\",\"post\":\"714\",\"district\":\"WESTERN\",\"neighborhood\":\"BRIDGEVIEW\/GREENLAWN\",\"longitude\":\"-76.65147568\",\"latitude\":\"39.28815278\",\"premise\":\"STREET\",\"vri_name1\":\"\",\"total_incidents\":\"1\"},{\"crimeid\":\"231479\",\"crimedate\":\"2019-10-24\",\"crimetime\":\"16:52:00\",\"crimecode\":\"6D\",\"location\":\"2500 HARLEM AVE\",\"description\":\"LARCENY FROM AUTO\",\"inside_outside\":\"\",\"weapon\":\"NA\",\"post\":\"721\",\"district\":\"WESTERN\",\"neighborhood\":\"EVERGREEN LAWN\",\"longitude\":\"-76.65731336\",\"latitude\":\"39.29611084\",\"premise\":\"\",\"vri_name1\":\"\",\"total_incidents\":\"1\"},{\"crimeid\":\"231480\",\"crimedate\":\"2019-10-23\",\"crimetime\":\"13:30:00\",\"crimecode\":\"6C\",\"location\":\"5600 THE ALAMEDA\",\"description\":\"LARCENY\",\"inside_outside\":\"\",\"weapon\":\"NA\",\"post\":\"522\",\"district\":\"NORTHERN\",\"neighborhood\":\"GLEN OAKS\",\"longitude\":\"-76.594942\",\"latitude\":\"39.358349\",\"premise\":\"\",\"vri_name1\":\"\",\"total_incidents\":\"1\"},{\"crimeid\":\"231481\",\"crimedate\":\"2019-10-23\",\"crimetime\":\"09:00:00\",\"crimecode\":\"5A\",\"location\":\"800 S BELNORD AVE\",\"description\":\"BURGLARY\",\"inside_outside\":\"I\",\"weapon\":\"NA\",\"post\":\"214\",\"district\":\"SOUTHEAST\",\"neighborhood\":\"CANTON\",\"longitude\":\"-76.57764707\",\"latitude\":\"39.28259272\",\"premise\":\"ROW\/TOWNHOUSE-OCC\",\"vri_name1\":\"\",\"total_incidents\":\"1\"},{\"crimeid\":\"231482\",\"crimedate\":\"2019-10-23\",\"crimetime\":\"18:35:00\",\"crimecode\":\"3AF\",\"location\":\"AV & CORNWALL ST\",\"description\":\"ROBBERY - STREET\",\"inside_outside\":\"O\",\"weapon\":\"FIREARM\",\"post\":\"232\",\"district\":\"SOUTHEAST\",\"neighborhood\":\"\",\"longitude\":\"-76.5446985\",\"latitude\":\"39.28752\",\"premise\":\"STREET\",\"vri_name1\":\"\",\"total_incidents\":\"1\"}]}";
        $input = "http://54.166.56.44/backend/index.php?action=BetweenDates&dateBefore=20191023&dateAfter=20191024";
        $payload = file_get_contents($input);
        $this->assertEquals($expected, $payload);
    }
}
