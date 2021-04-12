<?php

if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=apprendre");
	die("");
}

?>

<?php
	include("views/apprendreModal.php");
	?>

<div class="contenu">
	<h1>Apprendre</h1>
	<h3>Bienvenue dans notre site de cours prive !</h3>
	<div class="table-wrapper">
		<div class="table-scroll">
			<table id="tableApprendre" style="width:100%">
				<tr>
					<th>Titre</th>
					<th>Professeur</th>
					<th>Cout</th>
				</tr>
				<tr>
					<td>Jill</td>
					<td>Smith</td>
					<td>50</td>
				</tr>
				<tr>
					<td>Eve</td>
					<td>Jackson</td>
					<td>94</td>
				</tr>
				<tr>
					<td>Jill</td>
					<td>Smith</td>
					<td>50</td>
				</tr>
				<tr>
					<td>Eve</td>
					<td>Jackson</td>
					<td>94</td>
				</tr>

			</table>
			<?php
			//echo "<h1>".$_SESSION["hash"]."</h1>"
			echo '<script type="text/javascript">getListTableApprendre("' . $_SESSION["hash"] . '");</script>';
			?>
		</div>
	</div>



</div>