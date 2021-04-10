<?php

// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php");
	die("");
}

// On envoie l'entête Content-type correcte avec le bon charset
header('Content-Type: text/html;charset=utf-8');

// Pose qq soucis avec certains serveurs...
echo "<?xml version=\"1.0\" encoding=\"utf-8\" ?>";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<!-- **** H E A D **** -->

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-15" />
	<title>TinyMVC</title>
	<link rel="stylesheet" href="css/alerts.css">
	<link rel="stylesheet" href="css/forms.css">
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="css/header.css">

	<link rel="stylesheet" href="jquery-ui-1.12.1/jquery-ui.min.css">

</head>
<!-- **** F I N **** H E A D **** -->

<!-- **** B O D Y **** -->

<body>
	<script src="js/jquery-3.4.1.min.js"></script>

	<script src="jquery-ui-1.12.1/external/jquery/jquery.js"></script>
	<script src="jquery-ui-1.12.1/jquery-ui.min.js"></script>
	
	<script src="js/model.js"></script>
	<script src="js/animation.js"></script>

	<script>
		var stateNavBar = false;
		$(document).scroll(function(position) {
			if ($(window).scrollTop() > 100) {
				if (!stateNavBar) {
					stateNavBar = true;
					$("#navbar").animate({
						backgroundColor: "rgba(255, 255, 255, 1)"
						}, 500 );
				}
			}
			else {
				if (stateNavBar) {
					stateNavBar = false;
					$("#navbar").animate({
						backgroundColor: "rgba(255, 255, 255, 0)"
						}, 500 );
				}
			}
		})
	</script>

	<div id="navbar">

		<a href="batata"><b>Titulo Header</b></a>
		
		<a href="batata"><b>Opção 1</b></a>
		<a href="batata"><b>Opção 2</b></a>
		<a href="batata"><b>Opção 3</b></a>
		<a href="batata"><b>Opção 4</b></a>

		<?php
		/*
			$view = valider("view");

			$hash = valider("hash", "SESSION");
			if ($hash != false) {
				if ($view != "login") {
					echo "<a href=\"controleur.php?action=Logout\">Sign Off</a>";
					echo "<a href=\"controleur.php?action=Enseigner\">Enseigner</a>";
				}
			} else {
				if ($view == "signUp") {
					echo "<a href=\"controleur.php?action=login\">Log In</a>";
				}
			}
		*/

		?>

	</div>