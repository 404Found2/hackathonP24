<?php
error_reporting(-1);

    $username = $_POST['username']; //'sample1'; //$_POST['username'];
    $pass = $_POST['password']; //'Test1234';//$_POST['password'];

    $conn = new mysqli("localhost", "root", "", "userinfo");
    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    } else {
        $sqlQuery = "SELECT * 
            FROM `login`     
            WHERE `Username`='$username'  AND `Pass`='$pass'";
        //$sqlQuery->bind_param("ss", $username, $pass);
        $result = mysqli_query($conn, $sqlQuery);

        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        $count = mysqli_num_rows($result);

        if ($count == 1) {
            $id = $row["Id"];
            $u = $row["Username"];
            $p = $row["Pass"];
            $e = $row["Email"];

            $sqlQueryTwo = "SELECT * 
            FROM `goals`     
            WHERE `Id`='$id'";
            //$sqlQuery->bind_param("ss", $username, $pass);
            $resultTwo = mysqli_query($conn, $sqlQueryTwo);
            $rowTwo = mysqli_fetch_array($resultTwo, MYSQLI_ASSOC);

            $start = $rowTwo["startYear"];
            $end = $rowTwo["endYear"];
            $goalA = $rowTwo["goalAmount"];

            $sqlQueryThree = "SELECT * 
            FROM `investments`     
            WHERE `Id`='$id'";
            //$sqlQuery->bind_param("ss", $username, $pass);
            $resultThree = mysqli_query($conn, $sqlQueryThree);
            $rowThree = mysqli_fetch_array($resultThree, MYSQLI_ASSOC);

            $stock = $rowThree["Stocks"];
            $bond = $rowThree["Bonds"];
            $land = $rowThree["RealEstate"];
            $store = $rowThree["Royalties"];
            $book = $rowThree["Business"];
            $other = $rowThree["Other"];

            include '../accountHTMLFiles/account-info.html';
            $signedIn == true;

            echo "<script> 
            window.localStorage.setItem('userKey', " .
                $id .
                ");

            var password = '" .
                $p .
                "';
            var email = '" .
                $e .
                "';
            var username = '" .
                $u .
                "';

            var start = '" .
                $start .
                "';
            var end = '" .
                $end .
                "';
            var goal = '" .
                $goalA .
                "';

            var stocksNum = '" .
                $stock .
                "';
            var bondsNum = '" .
                $bond .
                "';
            var realEstateNum ='" .
                $land .
                "';
            var businessNum = '" .
                $store .
                "';
            var royaltiesNum = '" .
                $book .
                "';
            var otherNum ='" .
                $other .
                "';

                stocksNum = Number(stocksNum);
                bondsNum = Number(bondsNum);
                realEstateNum = Number(realEstateNum);

                businessNum = Number(businessNum);
                royaltiesNum = Number(royaltiesNum);
                otherNum = Number(otherNum);

                start = Number(start);
                end = Number(end);
                goal = Number(goal);
      </script>";
        } else {
            echo "<script> window.alert(\"Your Username or Password is incorrect\")</script>";
            include '../accountHTMLFiles/account.html';
        }
    }
    $conn->close();

?>
