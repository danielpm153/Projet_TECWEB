<?php

// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=signup");
	die("");
}

?>

<div id="signUpDiv">

	<div class="formBackGround">

		<div class="background-box-shadown"></div>
		<div id="form">
			<p id="titleForm">Sign Up</p>
			<p id="closeForm"><b>X</b></p>
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

	<h1>Sign Up</h1>

	<div id="formSignUp">
		<div class="champEntree">
			<label>Nom:</label>
			<input type="text" id="ta_nom" value="alo" />
		</div>
		<div class="champEntree">
			<label>Prénom :</label>
			<input type="text" id="ta_prenom" value="alo"/>
		</div>
		<div class="champEntree">
			<label>Date de Naissance :</label>
			<input type="date" id="ta_dateNaissance" value="1997-06-01"/>
		</div>
		<div class="champEntree">
			<label>Téléphone :</label>
			<input type="number" id="ta_telephone" value="2233"/>
		</div>
		<div class="champEntree">
			<label>E-mail :</label>
			<input type="text" id="ta_email" />
		</div>
		<div class="champEntree">
			<label>Passe : </label>
			<input type="password" id="ta_passe" value="1234"/>
		</div>
		<div class="divButtons">
			<input type="submit" value="Submit" onclick="inscrireUser()" />
		</div>
		<!-- <h6 style='display:none;color:red;margin-top:2px;margin-bottom:0;'></h6> -->


	</div>


</div>