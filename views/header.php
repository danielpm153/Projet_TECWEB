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
	<link rel="stylesheet" href="css/styles.css">

	<link rel="stylesheet" href="css/alerts.css">
	<link rel="stylesheet" href="css/forms.css">
	<link rel="stylesheet" href="css/tables.css">

	<link rel="stylesheet" href="css/header.css">
	<link rel="stylesheet" href="css/apprendre.css">
	<link rel="stylesheet" href="css/invitation.css">
	<link rel="stylesheet" href="css/demands.css">
	<link rel="stylesheet" href="css/records.css">
	<link rel="stylesheet" href="css/enseigner.css">


	<link rel="stylesheet" href="jquery-ui-1.12.1/jquery-ui.min.css">

</head>
<!-- **** F I N **** H E A D **** -->

<!-- **** B O D Y **** -->

<body>
	<script src="js/jquery-3.4.1.min.js"></script>

	<script src="jquery-ui-1.12.1/external/jquery/jquery.js"></script>
	<script src="jquery-ui-1.12.1/jquery-ui.min.js"></script>

	<script src="js/util.js"></script>
	<script src="js/animation.js"></script>

	<script src="js/enseigner.js"></script>
	<script src="js/apprendre.js"></script>
	<script src="js/invitation.js"></script>
	<script src="js/demands.js"></script>
	<script src="js/records.js"></script>

	<?php
	include("views/signin.php");
	include("views/signup.php");
	?>

	<div id="navbar">

		<a href="controleur.php?action=Accueil"><b>Cursos Brabos Demais</b></a>

		<?php
		$view = valider("view");

		$hash = valider("hash", "SESSION");

		if ($hash != false) {
			echo "<a href=\"controleur.php?action=Enseigner\" value=\"enseigner\">Enseigner</a>";
			echo "<a href=\"controleur.php?action=Apprendre\" value=\"apprendre\">Apprendre</a>";
			echo "<a href=\"controleur.php?action=Invitation\" value=\"invitation\">Invitation</a>";
			echo "<a href=\"controleur.php?action=Demands\" value=\"demands\">Demands</a>";
			echo "<a href=\"controleur.php?action=Records\" value=\"records\">Records</a>";
			echo "<a onclick='alertDefault(\"signout\")'><b>Sign Off</b></a>";
		} else {
			echo "<a onclick='alertDefault(\"signin\")'><b>Sign In</b></a>";
			echo "<a onclick='alertDefault(\"signup\")'><b>Sign Up</b></a>";
		}

		?>
	</div>
	<div id="contenuVoidBar">
		<div id="shadowNavbar" class="formBackGround" style="width: 100%; max-width: none;">
			<div class="background-box-shadown">
			</div>
		</div>
	</div>

	<script>
		$(document).ready(function() {
			$("a[value='" + getUrlParameter("view") + "']").css("background-color", "teal").css("color", "white");

			if (getUrlParameter("view") != "accueil") {
				stateNavBar = 4;
				$("#navbar").css("background-color", "white");
			} else {
				$("#contenuVoidBar").remove();
			}

			$(".closeForm").click(function() {
				$(".backGroundGrayCenterContent").fadeOut();
			});

			$("#contenuVoidBar").css("height", ($("#navbar").outerHeight() + 20) + "px");
		});

		$(window).on('resize', function() {
			$("#contenuVoidBar").css("height", ($("#navbar").outerHeight() + 20) + "px");
		});

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if ($(event.target).is(".backGroundGrayCenterContent")) {
				$(event.target).fadeOut();
			}
		}
	</script>