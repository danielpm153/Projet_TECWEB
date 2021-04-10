
<?php
    if(!isset($_SESSION['connected'])){
        $_SESSION['connected'] = false;
    }
    $_SESSION['connected'] = false;
?>

<div class="navbar" >
    <p id="pProjectName">Project Name</p>
    <?php
        echo "<a class=\"aSign\"";
        if(!$_SESSION['connected']) {
            echo " id=\"signin\"> Sign In ";
        }
        else {
            echo " id=\"signout\"> Sign Out";
        }
    ?>
    </a>
    <?php if($_SESSION['connected']){?>
    <a >Nom</a>
    <?php } ?>
</div>

<?php
if($_SESSION['connected']){
?>
<div class="navConteiner">
    <div>Enseigner</div>
    <div>Apprender</div>
    <div>Invitation au cours</div>
    <div>Demande de cours</div>
    <div>Terminé</div>
</div>
<?php } ?>