<?php
$name = $_POST["fname"];
$email = $_POST["Email"];
$psw = $_POST["password"];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project";

$conn = mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
    die("Server Not connected! ".mysqli_connect_error());
}
$sql = "INSERT INTO Users(Name, Email, Password) VALUES('$name','$email','$psw')";
$result = mysqli_query($conn,$sql);
if(!$result){
    die("Error Occur!!!".mysqli_error($conn));
}
else{
    echo("Data successfully inserted!");
}
mysqli_close($conn);
?>