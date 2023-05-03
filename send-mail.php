<!-- <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <script>
    alert("Your email has been sent. Thank You!");
    </script>
    <meta HTTP-EQUIV="REFRESH" content="0; url=index.html">
</head> -->

<?php
if(isset($_POST['submit'])){
//Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
if (!preg_match($email_exp, $email)) {
?>
<div class="alert alert-danger alert-dismissible fade show">
    <strong>The Email address you entered is not valid.</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<?php
exit;
}
$to = "leila.97jj@gmail.com";  //recipient email address
$subject = "Contact Form";  //Subject of the email
//Message content to send in an email
$message = "Name: ".$name."<br>Email: ".$email."<br> Message: ".$message;
//Email headers
$headers = "From:".$email."\r\n";
//Send email in HTML format
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
//$headers = "CC: someone@example.com";
$headers .= "Reply-To:".$email."\r\n";
$headers .= "X-Mailer: PHP/".phpversion();
//Send email 
$sendmail = mail($to, $subject, $message, $headers);
// If mail sent
if($sendmail == true){ 
?>
<div class="alert alert-success alert-dismissible fade show">
    <strong>Message has been sent successfully.</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<?php
}else {
?>
<div class="alert alert-danger alert-dismissible fade show">
    <strong>Message could not be sent. Please try again.</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<?php
}
}
?>