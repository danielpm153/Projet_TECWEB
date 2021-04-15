<?php
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
    header("Location:../index.php?view=records");
    die("");
}
?>

<div class="contenu">
    <div class="headerPage">
        <h2>Records</h2>
        <p>Sur cet écran, vous pouvez voir toutes les records de cours.</p>
    </div>
    <div class="formBackGround" id="tableBackRecords">
        <div class="background-box-shadown"></div>
        <div class="table-scroll">

            <table id="tableRecords" style="width:100%">
                <tr>
                    <th>Titre</th>
                    <th>Eleve</th>
                    <th>Professour</th>
                    <th>Date</th>
                    <th>Horaire</th>
                    <th>Langue</th>
                    <th>Cout</th>
                    <th>Status</th>
                </tr>
                <!-- <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>Smith</td>
                    <td>11/04/2021</td>
                    <td>14:00</td>
                    <td>Français</td>
                    <td>50</td>
                    <td>Terminé</td>
                </tr> -->
            </table>
            <?php
            echo '<script type="text/javascript">getListTableRecords();</script>';
            ?>
        </div>
    </div>
</div>