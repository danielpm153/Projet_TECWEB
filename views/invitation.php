<?php
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
    header("Location:../index.php?view=invitation");
    die("");
}
include("views/defaults/userModal.php");
include("views/defaults/confirmationModal.php");
?>

<div id="contenuInvitation">
    <div class="headerPage">
		<h2>Invitation</h2>
		<p>Sur cet écran, vous pouvez voir toutes les demandes de cours, ainsi qu'annuler certains cours.</p>
	</div>
    <div class="formBackGround" id="tableBackInvitations">
        <div class="background-box-shadown"></div>
        <div class="table-scroll">

            <table id="tableInvitations" style="width:100%">
                <tr>
                    <th>Titre</th>
                    <th>Eleve</th>
                    <th>Date</th>
                    <th>Horaire</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </table>

        </div>
    </div>
</div>

<div class="formBackGround" id="tableBackCours">
    <div class="background-box-shadown"></div>
    <div class="table-scroll">

        <table id="tableCours" style="width:100%">
            <tr>
                <th>Titre</th>
                <th>Actions</th>
            </tr>
        </table>

    </div>
</div>
</div>
</div>

<script>
    $(document).ready(initInvitation);
</script>