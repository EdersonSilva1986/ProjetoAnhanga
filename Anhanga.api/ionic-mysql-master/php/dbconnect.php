<?php
  define('HOST','mnihouze.com.br');
  define('USER','mnihouze_usr_app');
  define('PASS','$cv6oip4');
  define('DB','mnihouze_db_VEGAN');
  $con = mysqli_connect(HOST,USER,PASS,DB);
   if (!$con){
                 die("Error in connection" . mysqli_connect_error()) ;
  }
?>