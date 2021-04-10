<?php
session_start();

include_once "libs/maLibUtils.php";

include("views/header.php");

$view = valider("view");

$hash = valider("hash", "SESSION");
if ($view == false) {
	$view = "accueil";
}

switch ($view) {
	
	case "accueil":
		include("views/accueil.php");
		break;

	case "signUp":
		include("views/signup.php");
		break;

	case "enseigner":
		include("views/enseigner.php");
		break;

	default:
		if (file_exists("views/$view.php"))
			include("views/$view.php");
}

include("views/footer.php");
