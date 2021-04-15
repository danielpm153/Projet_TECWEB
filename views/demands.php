<?php
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
    header("Location:../index.php?view=demands");
    die("");
}
include("views/defaults/userModal.php");
include("views/defaults/confirmationModal.php");
?>


<div class="contenu">
    <div class="headerPage">
        <h2>Demands</h2>
        <p>Sur cet écran, vous pouvez voir toutes </p>
    </div>
    <div class="formBackGround" id="tableBackDemands">
        <div class="background-box-shadown"></div>
        <div class="table-scroll">

            <table id="tableDemands" style="width:100%">
                <tr>
                    <th>Titre</th>
                    <th>Professour</th>
                    <th>Date</th>
                    <th>Horaire</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                <!-- <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>11/04/2021</td>
                    <td>14:00</td>
                    <td>En attend</td>
                    <td>
                        <input type="button" value="X" onclick="" />
                    </td>
                </tr> -->


            </table>
            <?php
            echo '<script type="text/javascript">getListTableDemands();</script>';
            ?>
        </div>
    </div>


</div>