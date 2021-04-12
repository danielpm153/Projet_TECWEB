<?php

		// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
		if (basename($_SERVER["PHP_SELF"]) != "index.php")
		{
			header("Location:../index.php");
			die("");
		}

		?>
<head>
    <link rel="stylesheet" type="text/css" href='css/footer.css'>
</head>
        <footer class="main-footer">
            <div class="container_footer">
                <div class="row_footer pt-5_footer">
                    <div class="col-12_footer col-lg-4_footer text-center_footer text-lg-right_footer">
                        <ul class="list-unstyled_footer">
                            <li><a href="" class="text-muted_footer">Enseigne avec nous</a></li>
                            <li><a href="controleur.php?action=whoweare" class="text-muted_footer">À propos de nous</a></li>
                            <li><a href="" class="text-muted_footer">Conditions d'utilisation</a></li>
                            <li><a href="" class="text-muted_footer">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="container_footer">
                <div class="row_footer py-3_footer">
                    <div class="col-12_footer text-center_footer col-md-6_footer text-lg-left_footer">
                        <small class="text-muted_footer">&copy; 2021 Tous les droits sont réservés</small>
                    </div>
                    <div class="col-12_footer text-center_footer col-md-6_footer text-lg-right_footer">
                        <a href="">
                            <small class="text-muted_footer">Politique de confidentialité</small>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

	</body>
</html>
