<?php

if (basename($_SERVER["PHP_SELF"]) != "index.php") {
    header("Location:../index.php?view=invitation");
    die("");
}

?>



<div class="contenu">
    <h1>Invitation</h1>
    <h3>Bienvenue dans notre site de cours prive !</h3>
    <div class="table-wrapper">
        <div class="table-scroll">

            <table id="tableInvitations" style="width:100%">
                <tr>
                    <th>Titre</th>
                    <th>Eleve</th>
                    <th>Date</th>
                    <th>Horaire</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                <!-- <tr id="oi">
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                    <td>Smith</td>
                    <td>50</td>
                    <td>
                        <input type="button" value="C" onclick="acceptInvitation('oi')" />
                        <input type="button" value="X" onclick="" />
                    </td>
                </tr> -->


            </table>
            <?php
            echo '<script type="text/javascript">getListTableInvitation("' . $_SESSION["hash"] . '");</script>';
            ?>
        </div>
    </div>


</div>