<?php

// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=signup");
	die("");
}

?>

<div id="viewSignUp" class="backGroundGrayCenterContent">

	<div class="form">
		<p class="titleForm">Sign Up</p>
		<p class="closeForm"><b>X</b></p>
		<p>Nom*</p>
		<input type="text" name="nomSignup" maxlength="100"/>

		</br> </br>
		
		<p>Prénom*</p>
		<input type="text" name="prenomSignup" maxlength="100"/>

		</br> </br>
		
		<p>Date de Naissance*</p>
		<input type="date" name="dateSignup" maxlength="100"/>

		</br> </br>
		
		<p>Téléphone*</p>
		<input type="text" name="telSignup" maxlength="100"/>

		</br> </br>
		
		<p>E-mail*</p>
		<input type="text" name="emailSignup" maxlength="100"/>

		</br> </br>
		
		<p>Passe*</p>
		<input type="password" name="passeSignup" maxlength="100"/>

		</br> </br>

		<input type="button" value="Envoyer" onclick="inscrireUser()"/>
	</div>


</div>