<?php

$recepient = "tina250594@gmail.com";
$siteName = "Туры в Китай";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$massageUser = trim($_POST["textarea"]);
$message = "Имя: $name \nЕлектронный адресс: $email \nСообщение: $massageUser";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>