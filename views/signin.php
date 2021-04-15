<?php
// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=signup");
	die("");
}
?>

<div id="viewSignIn" class="backGroundGrayCenterContent">
	<div class="form">
		<div>
			<p class="titleForm">Sign In</p>

			<p>E-mail*</p>
			<input type="text" name="email" maxlength="100"/>

			<p>Passe*</p>
			<input type="password" name="passe" maxlength="100"/>
		</div>
		<input type="button" value="Connexion" onclick="login()" />
	</div>
</div>