<?php
if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: assets\pages\contacto.html" );
}

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$asunto = $_POST['telefono'];
$mensaje = $_POST['consulta'];
$imagen = $_FILES['imagen']; //array assoc - $imagen['tmp_name']; $imagen['size'] - $imagen['name']

if( empty(trim($nombre)) ) $nombre = 'anonimo';
if( empty(trim($apellido)) ) $apellido = '';

$body = <<<HTML
    <h1>Contacto desde la web Tienda cartas</h1>
    <p>De: $nombre $apellido / $email</p>
    <h2>Mensaje</h2>
    $mensaje
HTML;

$mailer = new PHPMailer();
$mailer->setFrom( $email, "$nombre $apellido" );
$mailer->addAddress('seralemon1@gmail.com','Sitio web');
$mailer->Subject = "Mensaje web: $asunto";
$mailer->msgHTML($body);
$mailer->AltBody = strip_tags($body);
$mailer->CharSet = 'UTF-8';

if( $foto['size'] > 0 ){
    $mailer->addAttachment( $imagen['tmp_name'], $imagen['name'] );
}

$rta = $mailer->send( );

//var_dump($rta);
header("Location: index.html" );