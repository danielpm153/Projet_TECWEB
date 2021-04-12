<?php

// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=signup");
	die("");
}

?>

<div id="viewSignUp" class="backGroundGrayCenterContent">

	<div class="form"  style="width: 37vw; padding-right: 0px;">
		<p class="titleForm" style="width: 100%;">Sign Up</p>
		<p class="closeForm" style="right: 20px;"><b>X</b></p>

		<div>
			<p>Nom*</p>
			<input type="text" name="nomSignup" maxlength="100"/>
			
			<p>Date de Naissance*</p>
			<input type="date" name="dateSignup" maxlength="100"/>
			
			<p>E-mail*</p>
			<input type="text" name="emailSignup" maxlength="100"/>

		</div>
		<div>
			<p>Prénom*</p>
			<input type="text" name="prenomSignup" maxlength="100"/>
			
			<p>Téléphone*</p>
			<input type="text" name="telSignup" maxlength="100"/>
			
			<p>Passe*</p>
			<input type="password" name="passeSignup" maxlength="100"/>
		</div>
		<input type="button" value="Envoyer" onclick="inscrireUser()"/>
	</div>


</div>