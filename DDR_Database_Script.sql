CREATE DATABASE  IF NOT EXISTS `ddrdatabase`;
USE `ddrdatabase`;

DROP TABLE IF EXISTS `scores`;
CREATE TABLE `scores` (
  `ScoresID` int(11) NOT NULL AUTO_INCREMENT,
  `PlayerName` varchar(90) NOT NULL,
  `PlayerScore` int(11) NOT NULL,
  `Letter` varchar(90) NOT NULL,
  PRIMARY KEY (`ScoresID`),
  UNIQUE KEY `ScoresID_UNIQUE` (`ScoresID`)
  ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
  
LOCK TABLES `scores` WRITE;
INSERT INTO `scores` VALUES (1,'Player', '0', 'E');
UNLOCK TABLES;

SELECT * FROM scores