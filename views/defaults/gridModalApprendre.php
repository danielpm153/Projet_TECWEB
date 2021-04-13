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
    $array = array("8h-9h", "9h-10h", "10h-11h", "11h-12h", "12h-13h", "13h-14h", "14h-15h", "15h-16h", "16h-17h", "17h-18h", "18h-19h", "19h-20h", "20h-21h", "21h-22h");
    foreach ($array as $val) {
        $str =  "<tr><td>" . $val . "</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
        echo $str;
    }
    ?>
</table>