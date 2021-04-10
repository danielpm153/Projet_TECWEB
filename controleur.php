<?php
ob_start();
session_start();

include_once "libs/maLibUtils.php";
include_once "libs/maLibSecurisation.php";

$qs = "";

if ($action = valider("action")) {

	switch ($action) {
		case 'Connexion':
			if ($hash = valider("hash")) {
				$qs = "?view=accueil";
				$_SESSION["hash"] = $hash;
			} else if ($msg = valider("message")) {
				$qs = "?view=login&message=" . $msg;
			}
			break;
		case 'Logout':
			session_destroy();
			$qs = "?view=login";
			break;

		case 'Enseigner':
			$qs = "?view=enseigner";
			break;

		case 'SignUp':

			if ($msg = valider("message")) {
				$qs = "?view=signUp&message=" . $msg;
			} else {
				$qs = "?view=signUp";
			}
			break;
	}
}

$urlBase = dirname($_SERVER["PHP_SELF"]) . "/index.php";
header("Location:" . $urlBase . $qs);
ob_end_flush();
exit();
