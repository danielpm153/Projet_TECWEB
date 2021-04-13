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
	<div class="headerPage">
		<h2>Apprendre</h2>
		<p>Sur cet écran, vous pouvez voir toutes les leçons fournies</p>
	</div>
	<div class="formBackGround" id="tableBackApprendre">
        <div class="background-box-shadown"></div>
		<div class="table-scroll">
			<table id="tableApprendre" style="width:100%">
				<tr>
					<th>Titre</th>
					<th>Professeur</th>
					<th>Cout</th>
				</tr>
				<!-- <tr>
					<td>Jill</td>
					<td>Smith</td>
					<td>50</td>
				</tr> -->
			</table>
			<?php
			echo '<script type="text/javascript">getListTableApprendre();</script>';
			?>
		</div>
	</div>
</div>