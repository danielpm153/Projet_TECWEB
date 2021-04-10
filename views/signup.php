<?php

// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=signup");
	die("");
}

?>

<div id="viewSignUp" class="backGroundGrayCenterContent">

	<div id="form">
		<p id="titleForm">Sign Up</p>
		<p class="closeForm"><b>X</b></p>
		<p>Nom*</p>
		<input type="text" name="nom" maxlength="100"/>

		</br> </br>
		
		<p>Prénom*</p>
		<input type="text" name="prenom" maxlength="100"/>

		</br> </br>
		
		<p>Date de Naissance*</p>
		<input type="date" name="date" maxlength="100"/>

		</br> </br>
		
		<p>Téléphone*</p>
		<input type="text" name="tel" maxlength="100"/>

		</br> </br>
		
		<p>E-mail*</p>
		<input type="text" name="email" maxlength="100"/>

		</br> </br>
		
		<p>Passe*</p>
		<input type="password" name="passe" maxlength="100"/>

		</br> </br>

		<input type="button" value="Envoyer" onclick="inscrireUser()"/>
	</div>


</div>