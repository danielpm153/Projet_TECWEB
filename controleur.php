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
                $qs = "?view=apprendre";
                $_SESSION["hash"] = $hash;
            } else if ($msg = valider("message")) {
                $qs = "?view=login&message=" . $msg;
            }
            break;

        case 'Accueil':
            $qs = "?view=accueil";
            break;

        case 'Logout':
            session_destroy();
            $qs = "?view=accueil";
            break;

        case 'Enseigner':
            $qs = "?view=enseigner";
            break;

        case 'Apprendre':
            $qs = "?view=apprendre";
            break;

        case 'Invitation':
            $qs = "?view=invitation";
            break;

        case 'Demands':
            $qs = "?view=demands";
            break;

        case 'Records':
            $qs = "?view=records";
            break;

        case 'whoweare':
            $qs = "?view=whoweare";
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

//$urlBase = "https://deploywebgroup9.herokuapp.com/"."index.php";
$urlBase = dirname($_SERVER["PHP_SELF"]) . "/index.php";
header("Location:" . $urlBase . $qs);
ob_end_flush();
exit();
