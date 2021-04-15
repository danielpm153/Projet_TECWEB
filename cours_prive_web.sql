-- Host: https://deploywebgroup9.herokuapp.com/

-- Base de données: `cours_prive_web`
-- Base de données externe: heroku_f5585a0a335f715

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
    `id_user` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(100) NOT NULL,
    `passe` varchar(25) NOT NULL,
    `hash` varchar(100) DEFAULT 'hash',
    `nom` varchar(50) NOT NULL,
    `prenom` varchar(50) NOT NULL,
    `data_naissance` date NOT NULL,
    `telefone` varchar(15) DEFAULT NULL,
    PRIMARY KEY (`id_user`),
    CONSTRAINT `email` UNIQUE (`email`),
    CONSTRAINT `telefone` UNIQUE (`telefone`)
    ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `status`;
CREATE TABLE IF NOT EXISTS `status` (
    `id_status` int(11) NOT NULL AUTO_INCREMENT,
    `nom` varchar(50) NOT NULL,
    PRIMARY KEY (`id_status`)
    ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;



DROP TABLE IF EXISTS `langues`;
CREATE TABLE IF NOT EXISTS `langues` (
    `id_langue` int(11) NOT NULL AUTO_INCREMENT,
    `nom` varchar(50) NOT NULL,
    PRIMARY KEY (`id_langue`)
    ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;



DROP TABLE IF EXISTS `domaines`;
CREATE TABLE IF NOT EXISTS `domaines` (
    `id_domaine` int(11) NOT NULL AUTO_INCREMENT,
    `nom` varchar(50) NOT NULL,
    PRIMARY KEY (`id_domaine`)
    ) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;



DROP TABLE IF EXISTS `cours`;
CREATE TABLE IF NOT EXISTS `cours` (
    `id_cour` int(11) NOT NULL AUTO_INCREMENT,
    `id_userProf` int(11) NOT NULL,
    `titre` varchar(100) NOT NULL,
    `id_domaine` int(11) NOT NULL,
    `descriptions` varchar(250) DEFAULT NULL,
    `cout` int(11) NOT NULL,
    `id_langue` int(11) NOT NULL,
    `id_status` int default 5 null,
    PRIMARY KEY (`id_cour`),
    KEY `fk_cours_1_idx` (`id_userProf`),
    KEY `fk_cours_2_idx` (`id_domaine`),
    KEY `fk_cours_3_idx` (`id_langue`),
    KEY `fk_cours_4_idx` (`id_status`),
    CONSTRAINT `fk_cours_1` FOREIGN KEY (`id_userProf`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_cours_2` FOREIGN KEY (`id_domaine`) REFERENCES `domaines` (`id_domaine`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_cours_3` FOREIGN KEY (`id_langue`) REFERENCES `langues` (`id_langue`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_cours_4` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `disponibilites`;
CREATE TABLE IF NOT EXISTS `disponibilites` (
    `id_disponibilite` int(11) NOT NULL AUTO_INCREMENT,
    `id_cour` int(11) NOT NULL,
    `horaire` time NOT NULL,
    `semaine` tinyint(4) NOT NULL,
    PRIMARY KEY (`id_disponibilite`),
    KEY `fk_disponibilites_1_idx` (`id_cour`),
    CONSTRAINT `fk_disponibilites_1_idx` FOREIGN KEY (`id_cour`) REFERENCES `cours` (`id_cour`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `reservations`;
CREATE TABLE IF NOT EXISTS `reservations` (
    `id_reservation` int(11) NOT NULL AUTO_INCREMENT,
    `id_userEleve` int(11) NOT NULL,
    `id_disponibilite` int(11) NOT NULL,
    `date` date NOT NULL,
    `id_status` int(11) NOT NULL DEFAULT '1',
    PRIMARY KEY (`id_reservation`),
    KEY `fk_reservations_1_idx` (`id_userEleve`),
    KEY `fk_reservations_2_idx` (`id_disponibilite`),
    KEY `fk_reservations_3_idx` (`id_status`),
    CONSTRAINT `fk_reservations_1_idx` FOREIGN KEY (`id_userEleve`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_reservations_2_idx` FOREIGN KEY (`id_disponibilite`) REFERENCES `disponibilites` (`id_disponibilite`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_reservations_3_idx` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


INSERT INTO `users` (`id_user`, `email`, `passe`, `hash`, `nom`, `prenom`, `data_naissance`, `telefone`) VALUES
(1, 'math@gmail.com', '123456', '7935d6505bfd78510329f5add0527631', 'guimaraes de moura', 'matheus', '1997-06-01', NULL),
(2, 'joao@gmail.com', '123456', '88ca365626db93d7660d8c7b3003a992', 'santos penha de oliveira', 'joao lucas', '2000-01-01', NULL);
COMMIT;

INSERT INTO `status` (`id_status`, `nom`) VALUES
(1, 'En attente'),
(2, ' Approuvé'),
(3, ' Annulé'),
(4, ' Terminé'),
(5, 'Activé'),
(6, ' Désactivé');

INSERT INTO `langues` (`id_langue`, `nom`) VALUES
(1, 'Portugais'),
(2, 'Français'),
(3, 'Espagnol'),
(4, 'Anglais'),
(5, 'Chinois');

INSERT INTO `domaines` (`id_domaine`, `nom`) VALUES
(1, 'Mathématique'),
(2, 'Informatique');

INSERT INTO `cours` (`id_cour`, `id_userProf`, `titre`, `id_domaine`, `descriptions`, `cout`, `id_langue`, `id_status`) VALUES
(1, 1, 'Cours de AAP', 2, 'Cours de programmation avec langage C', 40, 2, 6),
(2, 1, 'Cours de WEB 2.0', 2, 'Cours de PHP, HTML, CSS e JS', 30, 4, 5),
(3, 2, 'Cours d\'Analyse', 1, 'Cours de Tribu', 50, 1, 5);

INSERT INTO `disponibilites` (`id_disponibilite`, `id_cour`, `horaire`, `semaine`) VALUES
(1, 1, '10:00:00', 6),
(2, 1, '11:00:00', 6),
(3, 1, '13:00:00', 6),
(4, 1, '14:00:00', 6),
(5, 1, '15:00:00', 6),
(6, 1, '16:00:00', 6),
(7, 1, '17:00:00', 6),
(8, 1, '18:00:00', 6),
(9, 1, '19:00:00', 0),
(10, 1, '19:00:00', 1),
(11, 1, '19:00:00', 2),
(12, 1, '19:00:00', 3),
(13, 1, '19:00:00', 4),
(14, 1, '19:00:00', 5),
(15, 1, '19:00:00', 6),
(16, 1, '20:00:00', 0),
(17, 1, '20:00:00', 1),
(18, 1, '20:00:00', 2),
(19, 1, '20:00:00', 3),
(20, 1, '20:00:00', 4),
(21, 1, '20:00:00', 5),
(22, 1, '20:00:00', 6),
(23, 1, '21:00:00', 0),
(24, 1, '21:00:00', 1),
(25, 1, '21:00:00', 2),
(26, 1, '21:00:00', 3),
(27, 1, '21:00:00', 4),
(28, 1, '21:00:00', 5),
(29, 1, '21:00:00', 6),
(30, 2, '14:00:00', 0),
(31, 2, '14:00:00', 1),
(32, 2, '14:00:00', 2),
(33, 2, '14:00:00', 3),
(34, 2, '14:00:00', 4),
(35, 2, '14:00:00', 5),
(36, 2, '14:00:00', 6),
(37, 2, '15:00:00', 0),
(38, 2, '15:00:00', 1),
(39, 2, '15:00:00', 2),
(40, 2, '15:00:00', 3),
(41, 2, '15:00:00', 4),
(42, 2, '15:00:00', 5),
(43, 2, '15:00:00', 6),
(44, 3, '12:00:00', 3),
(45, 3, '13:00:00', 3),
(46, 3, '14:00:00', 3),
(47, 3, '15:00:00', 0),
(48, 3, '15:00:00', 1),
(49, 3, '15:00:00', 2),
(50, 3, '15:00:00', 3),
(51, 3, '15:00:00', 4),
(52, 3, '15:00:00', 5),
(53, 3, '15:00:00', 6),
(54, 3, '16:00:00', 0),
(55, 3, '16:00:00', 1),
(56, 3, '16:00:00', 2),
(57, 3, '16:00:00', 3),
(58, 3, '16:00:00', 4),
(59, 3, '16:00:00', 5),
(60, 3, '16:00:00', 6),
(61, 3, '19:00:00', 6),
(62, 3, '20:00:00', 6),
(63, 3, '21:00:00', 6);

INSERT INTO `reservations` (`id_reservation`, `id_userEleve`, `id_disponibilite`, `date`, `id_status`) VALUES
(1, 2, 7, '2021-04-17', 2),
(2, 1, 53, '2021-04-17', 1),
(3, 1, 60, '2021-04-17', 3);