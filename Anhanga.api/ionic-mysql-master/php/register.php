<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {

        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");

        header('Access-Control-Allow-Credentials: true');

        header('Access-Control-Max-Age: 86400');    // cache for 1 day

    }

    // Access-Control headers are received during OPTIONS requests

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))

            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");        

       if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))

            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);

    }

  require "dbconnect.php";

    $data = file_get_contents("php://input");

    if (isset($data)) {

        $request = json_decode($data);

        $emailadd = $request->email;

          $password = $request->password;

           $username = $request->username;

          $mobile = $request->mobile;

                                }

$username = stripslashes($username);
$password = stripslashes($password);

$sql = "INSERT INTO vw_tbl_usuario_adm (id_adm, login, senha)

VALUES (5, '$username', '$password')";

if ($con->query($sql) === TRUE) {

                $response= "Registration successfull";

} else {

   $response= "Error: " . $sql . "<br>" . $db->error;

}

 echo json_encode( $response);

?>