<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require '../../vendor/autoload.php';

header("Access-Control-Allow-Origin: https://iydl.co.uk");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{
		try {

			http_response_code(200);
			$subject = 'Website enquiry from ' . $_POST['name'] . ' about ' . $_POST['subject'];
			$to = "website@iydl.co.uk";
			$from = "website@iydl.co.uk";
			$replyto = $_POST['email'];

			$mail = new PHPMailer(true);
			$mail->isSMTP();
			$mail->Host = 'smtp.office365.com';
			$mail->Port       = 587;
			$mail->SMTPSecure = 'tls';
			$mail->SMTPAuth   = true;
			$mail->Username = 'website@iydl.co.uk';
			$mail->Password = 'Hat46535-19!';
			$mail->AddReplyTo($replyto, 'Website user: ' . $_POST['name']);
			$mail->SetFrom($from, 'FromEmail');
			$mail->addAddress($to, 'ToEmail');
			
			$mail->IsHTML(true);

			$mail->Subject = $subject;
			$mail->Body    = $_POST['message'];
			$mail->AltBody = $_POST['message'];

			$mail->send();
		}
		catch (Exception $e) {
			echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
		}
		echo json_encode(array(
			"sent" => true
		));
	}
else
	{

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong, no POST found"]);
	}

?>