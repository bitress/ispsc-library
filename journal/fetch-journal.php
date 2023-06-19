<?php

include_once  __DIR__ . '/../config/connect.php';

    try {
        $sql = 'SELECT * FROM `journal`';
        $stmt  = mysqli_query($conn, $sql);

        if(mysqli_num_rows($stmt)) {
            echo  mysqli_fetch_array($stmt);
        } else {
            echo "No results";
        }
    } catch (Exception $e) {
        echo 'Error: '.$e->getMessage();
    }


