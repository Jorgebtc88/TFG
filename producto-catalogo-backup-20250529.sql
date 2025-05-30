-- MySQL dump 10.13  Distrib 8.0.42, for Linux (x86_64)
--
-- Host: localhost    Database: producto-catalogo
-- ------------------------------------------------------
-- Server version	8.0.42-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `genero_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbj02xdsqvphc1lh4yxxstw4us` (`genero_id`),
  CONSTRAINT `FKbj02xdsqvphc1lh4yxxstw4us` FOREIGN KEY (`genero_id`) REFERENCES `genero` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Vestidos',1),(2,'Camisetas',1),(3,'Pantalones',1),(4,'Zapatos',1),(5,'Camisetas',2),(6,'Pantalones',2),(7,'Chaquetas',2),(8,'Zapatos',2);
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genero`
--

DROP TABLE IF EXISTS `genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genero` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero`
--

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;
INSERT INTO `genero` VALUES (1,'Mujeres'),(2,'Hombres');
/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `imagen_url` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `categoria_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKodqr7965ok9rwquj1utiamt0m` (`categoria_id`),
  CONSTRAINT `FKodqr7965ok9rwquj1utiamt0m` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Camiseta de algodón 100% con corte regular','https://images.unsplash.com/photo-1521572163474-6864f9cf17ab','Camiseta Básica',19.99,2),(2,'Camiseta oversize con estampado moderno','https://images.unsplash.com/photo-1576566588028-4147f3842f27','Camiseta Oversize',24.99,2),(3,'Camiseta de manga larga con estampado','https://images.unsplash.com/photo-1576566588028-4147f3842f27','Camiseta de Manga Larga',29.99,2),(4,'Camiseta de manga corta con estampado','https://images.unsplash.com/photo-1576566588028-4147f3842f27','Camiseta de Manga Corta',24.99,2),(5,'Camiseta de manga larga con estampado','https://images.unsplash.com/photo-1576566588028-4147f3842f27','Camiseta de Manga Larga',29.99,2),(6,'Vaquero clásico de talle alto','https://images.unsplash.com/photo-1541099649105-f69ad21f3246','Pantalón Vaquero',49.99,3),(7,'Pantalón chino de corte recto','https://images.unsplash.com/photo-1624378439575-d8705ad7ae80','Pantalón Chino',39.99,3),(8,'Pantalón de chino de corte recto','https://images.unsplash.com/photo-1624378439575-d8705ad7ae80','Pantalón de Chino',39.99,3),(9,'Pantalón de chino de corte recto','https://images.unsplash.com/photo-1624378439575-d8705ad7ae80','Pantalón de Chino',39.99,3),(10,'Pantalón de chino de corte recto','https://images.unsplash.com/photo-1624378439575-d8705ad7ae80','Pantalón de Chino',39.99,3),(11,'Vestido floral perfecto para el verano','/images/vestido-floral.jpg','Vestido Floral',49.99,1),(12,'Vestido negro de fiesta','https://images.unsplash.com/photo-1595777457583-95e059d581b8','Vestido Negro',79.99,1),(13,'Vestido floral perfecto para el verano','/images/vestido-floral.jpg','Vestido Floral',49.99,1),(14,'Vestido floral perfecto para el verano','/images/vestido-floral.jpg','Vestido Floral',49.99,1),(15,'Vestido floral perfecto para el verano','/images/vestido-floral.jpg','Vestido Floral',49.99,1),(16,'Zapato de mujer de color negro','/images/zapato-mujer.jpg','Zapato de Mujer',49.99,4),(17,'Zapato de mujer de color negro','/images/zapato-mujer.jpg','Zapato de Mujer',49.99,4),(18,'Zapato de mujer de color negro','/images/zapato-mujer.jpg','Zapato de Mujer',49.99,4),(19,'Zapato de mujer de color negro','/images/zapato-mujer.jpg','Zapato de Mujer',49.99,4),(20,'Zapato de mujer de color negro','/images/zapato-mujer.jpg','Zapato de Mujer',49.99,4),(21,'Camiseta básica de algodón','/images/camiseta-hombre.jpg','Camiseta Básica Hombre',19.99,5),(22,'Camiseta básica de algodón','/images/camiseta-hombre.jpg','Camiseta Básica Hombre',19.99,5),(23,'Camiseta básica de algodón','/images/camiseta-hombre.jpg','Camiseta Básica Hombre',19.99,5),(24,'Camiseta básica de algodón','/images/camiseta-hombre.jpg','Camiseta Básica Hombre',19.99,5),(25,'Camiseta básica de algodón','/images/camiseta-hombre.jpg','Camiseta Básica Hombre',19.99,5),(26,'Pantalón vaquero clásico','/images/pantalon-hombre.jpg','Pantalón Vaquero Hombre',39.99,6),(27,'Pantalón vaquero clásico','/images/pantalon-hombre.jpg','Pantalón Vaquero Hombre',39.99,6),(28,'Pantalón vaquero clásico','/images/pantalon-hombre.jpg','Pantalón Vaquero Hombre',39.99,6),(29,'Pantalón vaquero clásico','/images/pantalon-hombre.jpg','Pantalón Vaquero Hombre',39.99,6),(30,'Pantalón vaquero clásico','/images/pantalon-hombre.jpg','Pantalón Vaquero Hombre',39.99,6),(31,'Chaqueta de mujer de color negro','/images/chaqueta-hombre.jpg','Chaqueta de Mujer',49.99,7),(32,'Chaqueta de mujer de color negro','/images/chaqueta-hombre.jpg','Chaqueta de Mujer',49.99,7),(33,'Chaqueta de mujer de color negro','/images/chaqueta-hombre.jpg','Chaqueta de Mujer',49.99,7),(34,'Chaqueta de mujer de color negro','/images/chaqueta-hombre.jpg','Chaqueta de Mujer',49.99,7),(35,'Chaqueta de mujer de color negro','/images/chaqueta-hombre.jpg','Chaqueta de Mujer',49.99,7),(36,'Zapato de hombre de color negro','/images/zapato-hombre.jpg','Zapato de Hombre',49.99,8),(37,'Zapato de hombre de color negro','/images/zapato-hombre.jpg','Zapato de Hombre',49.99,8),(38,'Zapato de hombre de color negro','/images/zapato-hombre.jpg','Zapato de Hombre',49.99,8),(39,'Zapato de hombre de color negro','/images/zapato-hombre.jpg','Zapato de Hombre',49.99,8),(40,'Zapato de hombre de color negro','/images/zapato-hombre.jpg','Zapato de Hombre',49.99,8);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-29 23:20:27
