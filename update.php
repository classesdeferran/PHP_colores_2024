<?php
include_once 'connection.php';

if ($_GET['submit'] == "reset") {
    header('location: index.php');
}

$queryUpdate = "UPDATE colores SET usuario = ?, color = ? WHERE id_colores = ?";

$sqlUpdate = $conn -> prepare($queryUpdate);
$sqlUpdate -> execute([$_GET['usuario'],$_GET['color'],$_GET['id'] ]);

$sqlUpdate = null;
$conn = null;
header('location: index.php');