<?php
session_start();

// On envoie l'entête Content-type correcte avec le bon charset
header('Content-Type: text/html;charset=utf-8');

// Pose qq soucis avec certains serveurs...
echo "<?xml version=\"1.0\" encoding=\"utf-8\" ?>";

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<!-- **** H E A D **** -->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-15"/>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<!-- **** F I N **** H E A D **** -->

<!-- **** B O D Y **** -->
<body>

<?php
	include_once "libs/maLibUtils.php";

	// Dans tous les cas, on affiche l'entete,
	// qui contient les balises de structure de la page, le logo, etc.
	// Le formulaire de recherche ainsi que le lien de connexion
	// si l'utilisateur n'est pas connecté
	include("views/header.php");

    include("views/home.php");
	include("views/footer.php");
?>

</body>
</html>
