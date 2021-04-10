<?php

// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=login");
	die("");
}

?>

<div id="loginDiv">

	<div class="formBackGround">

		<div class="background-box-shadown"></div>
		<div id="form">
			<p id="titleForm">Sign In</p>
			<p id="closeForm"><b>X</b></p>
			
			<p>E-mail*</p>
			<input type="text" name="email" maxlength="100"/>

			</br> </br>
			
			<p>Passe*</p>
			<input type="password" name="passe" maxlength="100"/>

			</br> </br>

			<input type="button" value="Connexion" onclick="login()"/>
		</div>
	</div>

	<h1>Connexion</h1>

	<div id="formLogin">
		<div class="champEntree">
			<label>E-mail :</label>
			<input type="text" name="login" id="ta_email" value="alo" />
		</div>
		<div class="champEntree">
			<label>Passe : </label>
			<input type="password" name="passe" id="ta_passe" value="1234" />
		</div>
		<div class="divButtons">
			<input type="submit" value="Connexion" onclick="login()" />
			<input type="submit" value="Sign Up" onclick="signUp()" />
		</div>
		<?php
		if ($message = valider("message")) {
			$message = "Email ou mot de passe invalide!";
			echo "<h6 style='color:red;margin-top:2px;margin-bottom:0;'>" . $message . "</h6>";
		}
		?>


	</div>


</div>