<?php

print_r($_POST);

$message = 'You have received a contact form submission:
    
First Name: '.$_POST['first'].'
Last Name: '.$_POST['last'].'
Email: '.$_POST['email'].'
Message: '.$_POST['message'];

$to = 'thomasadam83@hotmail.com';
$subject = 'Contact Form Submission';
$headers = 'From: webmaster@infinityfreeapp.com' . "\r\n" .
    'Reply-To: webmaster@infinityfreeapp.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

//mail($to, $subject, $message, $headers);

$connect = mysqli_connect('sql306.infinityfree.com',
'if0_37424825',
'LFA0lwhdkgJS',
'if0_37424825_portfolio');

$query = 'INSET INTO contact (first, last, email, message) 
VALUES ("'.$_POST['first'].'",
"'.$_POST['last'].'",
"'.$_POST['email'].'",
"'.$_POST['message'].'")';

mysqli_connect($connect, $query);