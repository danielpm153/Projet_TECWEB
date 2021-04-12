<!-- <div class="gridModalApprendre" onclick="toggleGridModalApprendre(event)">
    <div>
        <p>Hours</p>
        <p>Dimanche</p>
        <p>Lundi</p>
        <p>Mardi</p>
        <p>Mercredi</p>
        <p>Jeudi</p>
        <p>Vendredi</p>
        <p>Samedi</p>
    </div>
    <div><div><p>8:00 - 9:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>9:00 - 10:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>10:00 - 11:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>11:00 - 12:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>12:00 - 13:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>13:00 - 14:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>14:00 - 15:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>15:00 - 16:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>16:00 - 17:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>17:00 - 18:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>18:00 - 19:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>19:00 - 20:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>20:00 - 21:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>21:00 - 22:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div><div><p>22:00 - 23:00</p></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div> -->

<table class="tableModalApprendre" style="width:100%" onclick="toggleGridModalApprendre(event);">
    <tr>
        <th></th>
        <th>D</th>
        <th>L</th>
        <th>M</th>
        <th>M</th>
        <th>J</th>
        <th>V</th>
        <th>S</th>
    </tr>

    <?php
    $array = array("8h-9h","9h-10h","10h-11h","11h-12h","12h-13h","13h-14h","14h-15h","15h-16h","16h-17h","17h-18h","18h-19h","19h-20h","20h-21h","21h-22h");
    foreach ($array as $val) {
        $str =  "<tr><td>".$val."</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
        echo $str;
    }
    ?>


</table>