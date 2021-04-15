<?php
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=accueil");
	die("");
}
?>

<div id="banner">
	<img src="resources/banner.jpg" />
</div>