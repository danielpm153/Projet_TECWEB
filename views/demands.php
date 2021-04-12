<?php

if (basename($_SERVER["PHP_SELF"]) != "index.php") {
    header("Location:../index.php?view=demands");
    die("");
}

?>



<div class="contenu">
    <h1>Demands</h1>
    <h3>Bienvenue dans notre site de cours prive !</h3>
    <div class="table-wrapper">
        <div class="table-scroll">

            <table id="tableDemands" style="width:100%">
                <tr>
                    <th>Titre</th>
                    <th>Professour</th>
                    <th>Date</th>
                    <th>Horaire</th>
                    <th>Cout</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>11/04/2021</td>
                    <td>14:00</td>
                    <td>50</td>
                    <td>En attend</td>
                    <td>
                        <input type="button" value="X" onclick="" />
                    </td>
                </tr>


            </table>
            <?php
            // echo '<script type="text/javascript">getListTableDemands("' . $_SESSION["hash"] . '");</script>';
            ?>
        </div>
    </div>


</div>