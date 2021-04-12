<?php
session_start();

include_once "libs/maLibUtils.php";

include("views/header.php");

$view = valider("view");

$hash = valider("hash", "SESSION");
if ($view == false) {
    header("Location: index.php?view=accueil");
    die();
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

	case "apprendre":
		include("views/apprendre.php");
		break;

	case "apprendreModal":
		include("views/apprendreModal.php");
		break;

	case "invitation":
		include("views/invitation.php");
		break;

	case "demands":
		include("views/demands.php");
		break;

	case "records":
		include("views/records.php");
		break;

	default:
		if (file_exists("views/$view.php"))
			include("views/$view.php");
}

include("views/footer.php");
