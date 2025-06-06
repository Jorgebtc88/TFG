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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (9,'Vestidos',3),(10,'Camisetas',3),(11,'Pantalones',3),(12,'Zapatos',3),(13,'Camisetas',4),(14,'Pantalones',4),(15,'Chaquetas',4),(16,'Zapatos',4);
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_pedido`
--

DROP TABLE IF EXISTS `detalles_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalles_pedido` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cantidad` int NOT NULL,
  `precio_unitario` double NOT NULL,
  `subtotal` double NOT NULL,
  `pedido_id` bigint NOT NULL,
  `producto_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4qmqlxyy78kjl4ec4wjnfmggu` (`pedido_id`),
  KEY `FK9js8p135kx9u1af4swd8q6tnc` (`producto_id`),
  CONSTRAINT `FK4qmqlxyy78kjl4ec4wjnfmggu` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `FK9js8p135kx9u1af4swd8q6tnc` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_pedido`
--

LOCK TABLES `detalles_pedido` WRITE;
/*!40000 ALTER TABLE `detalles_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalles_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritos`
--

DROP TABLE IF EXISTS `favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `usuario_id` bigint NOT NULL,
  `producto_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_favorito` (`usuario_id`,`producto_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `favoritos_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos`
--

LOCK TABLES `favoritos` WRITE;
/*!40000 ALTER TABLE `favoritos` DISABLE KEYS */;
INSERT INTO `favoritos` VALUES (20,4,44);
/*!40000 ALTER TABLE `favoritos` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero`
--

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;
INSERT INTO `genero` VALUES (3,'Mujeres'),(4,'Hombres');
/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `estado` enum('PENDIENTE','CONFIRMADO','ENVIADO','ENTREGADO','CANCELADO') NOT NULL,
  `fecha_pedido` datetime(6) NOT NULL,
  `total` double NOT NULL,
  `usuario_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5g0es69v35nmkmpi8uewbphs2` (`usuario_id`),
  CONSTRAINT `FK5g0es69v35nmkmpi8uewbphs2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (41,'Camiseta mujer – Lasal- ADRE blanco','https://terracotaoriginal.com/wp-content/uploads/2023/11/camiseta-de-mujer-adre-blanco.jpg','Camiseta Básica de Mujer ',19.99,10),(42,'Camisetas cuello V para mujer ','https://americaneagle.vtexassets.com/arquivos/ids/3821000-500-auto?v=638670376092100000&width=500&height=auto&aspect=true','Camiseta de Mujer ',24.99,10),(43,'Camiseta de manga larga ','https://caritabonita.es/757-thickbox_default/camiseta-manga-larga-mujer-frida.jpg','Camiseta de Manga Larga',29.99,10),(44,'Camisetas Happy Runner Things','https://www.happyrunnerthings.com/cdn/shop/files/camiseta-manga-corta-running-mujer-girl-power-luanvi-happy-runner-things.jpg?v=1741254233','Camiseta de Manga Corta',12.95,10),(45,'Camiseta Estampado Metalizado','https://www.sevenseven.com/dw/image/v2/BHFM_PRD/on/demandware.static/-/Sites-storefront_catalog_sevenseven/default/dw2044e297/images/hi-res/Agosto_2024/Agosto_27/Camisetas-Mujer-28095957-9909_1.jpg?sw=800&sh=960','Camiseta de Manga Corta',15,10),(46,'Vaquero clásico de talle alto','https://images.unsplash.com/photo-1541099649105-f69ad21f3246','Pantalón Vaquero',49.99,11),(47,'Pantalón de Mezclilla','https://img.joomcdn.net/2c3d546f3e26cd6bf1320305e3a61e21115e09a8_original.jpeg','Pantalón de Mujer',22.99,11),(48,'Pantalón Estampado','https://loisjeans.es/16116-medium_default/pantalon-estampado-palazzo-fit-tiro-largo-letizia-florence.jpg','Pantalón de Mujer',51.99,11),(49,'Pantalon Bolsillos Con Vivos Straight Fit Tiro Largo camel','https://loisjeans.es/18164-large_default/pantalon-bolsillos-con-vivos-straight-fit-tiro-largo-camel.jpg','Pantalón de Mujer',39.99,11),(50,'Jeans Moda Mujeres Cintura Alta','https://img.ws.mms.shopee.com.co/4dc147c48caf11e037376281ee52f1ee','Pantalón de Mujer',59,11),(51,'Vestido elegante para mujer ','https://ae01.alicdn.com/kf/S4e789bb40f524885a0377fe5ffb269e5S.jpg','Vestido de Fiesta',49.99,9),(52,'Vestido Celeste ','https://www.espejomagicomoda.com/vestido-celeste_pic377074ni0t0.jpg','Vestido de Mujer ',32.99,9),(53,'Vestido de Fiesta de un Hombro ','https://m.media-amazon.com/images/I/512cAYRdPuL._AC_UY1000_.jpg','Vestidos de Fiesta',79.99,9),(54,'Vestido perfecto para el verano','https://image.hm.com/assets/hm/34/75/34757335693be2bb08de1db81c7d49182c31347d.jpg?imwidth=1536','Vestido Floral',14.4,9),(55,'Vestido de Color Tropical Verano','https://image.hm.com/assets/hm/4a/01/4a0113f9779226dbf226a37b750ce1c024dd0e28.jpg?imwidth=1536','Vestido de Verano ',48,9),(56,'Botines de tacón alto de punta ','https://img.ltwebstatic.com/images3_spmp/2024/09/16/37/1726477618d4e788cbe3507c061bcac76df0133ed1_thumbnail_405x.webp','Zapato de Mujer',17.33,12),(57,'Zapatos plataforma e mujer negro ','https://cdn.zapatosvas.com/57798-superlarge_default/zapato-de-mujer-negro-glo-23ss94-84559.jpg','Zapato de Mujer',22.95,12),(58,'Zapatos deportivos causales para mujer','https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8119b346ff5a4f936094539301f54cf2.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp','Zapato de Mujer',39.99,12),(59,'Zapatillas paltaformas gruesa mujer','https://img.kwcdn.com/product/open/2023-02-03/1675399921115-b86b18e65ee94ae6abaff7e2b9543a3a-goods.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp','Zapato de Mujer',49.99,12),(60,'Zapato elegantes de moda','https://i.ytimg.com/vi/hoCsjdgZlsg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDcVREoBWv7rtB1vgaMQK35OPx2qA','Zapato de Mujer',79.99,12),(61,'Camiseta tipo polo de mangas corta ','https://img.ltwebstatic.com/v4/j/pi/2025/05/06/0d/1746525105220aa2709c08727729767e808b854538_thumbnail_405x.webp','Camiseta Hombre',8.99,13),(62,'Camiseta Jack & Jones Hombre Azul Marino','https://ecool.es/101682-large_default/camiseta-jack-jones-12256789-navy.jpg','Camiseta Básica Hombre',13.46,13),(63,'Camiseta Jack & Jones Hombre Blanca','https://ecool.es/103195-large_default/camiseta-jack-jones-12256782-white.jpg','Camiseta Básica Hombre',13.46,13),(64,'Polo Ralph Lauren','https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202405/29/00124928929363____12__967x1200.jpg?impolicy=Resize&width=900','Camiseta Básica Hombre',79.99,13),(65,'Camiseta Under Armour','https://resize.sprintercdn.com/b/512x768/products/0374981/camiseta-under-armour_0374981_00_4_1965353496.jpg?w=512&q=75','Camiseta Básica Hombre',21.99,13),(66,'Pantalón Vaquero Guess Hombre','https://ecool.es/158305-large_default/pantalon-vaquero-guess-m5gan2-d5mz2-r1fw.jpg','Pantalón Vaquero Hombre',109.95,14),(67,'Pantalón Vaquero Tommy Hilfiger Hombre','https://ecool.es/105979-large_default/pantalon-vq-tommy-hilfiger-dm0dm20386-1bk.jpg','Pantalón Vaquero Hombre',98.91,14),(68,'Pantalones vaqueros largos ajustados','https://img.joomcdn.net/88fe93d8a981ecf5aa642eb036db2f7c43da103d_1024_1024.jpeg','Pantalón Vaquero Hombre',31.47,14),(69,'Pantalones Vaqueros Hombre Estiramiento Skinny Slim ','https://img.fruugo.com/product/8/22/1694795228_0340_0340.jpg','Pantalón Vaquero Hombre',31.57,14),(70,'Pantalon vaquero blanco ','https://www.oion.es/wp-content/uploads/2024/03/pantalon-vaquero-blanco-hombre-688crf-1.jpg','Pantalón Vaquero Hombre',30,14),(71,'Chaqueta Hombre Acolchada Zepelin de Tee Jays','https://www.camisetasymoda.es/29111-large_default/chaqueta-hombre-acolchada-zepelin-de-tee-jays.jpg','Chaqueta de Hombre',82.09,15),(72,'Chaqueta Militar Hombre Otoño Casual','https://m.media-amazon.com/images/I/61vo5kMf5TL._AC_SX522_.jpg','Chaqueta de Hombre',36.62,15),(73,'Chaqueta efecto piel de corte regular','https://jackjonesmadrid.com/cdn/shop/products/4b480620-3525-44f5-be1c-a99800812738_12147218_2984044_008_preview.jpg?v=1720511728','Chaqueta de Hombre',69.99,15),(74,'Chaqueta de hombre de color negro','https://www.nuevaguia.es/wp-content/uploads/2022/07/chaqueta-negra-hombre-182fdw-1.jpg','Chaqueta de Hombre',35,15),(75,'Chaqueta para hombre Sangro','https://assets.thenorthface.eu/images/t_img/f_auto,h_462,w_462,e_sharpen:60/dpr_2.0/v1730107622/NF00A3X54H0-HERO/Mens-Sangro-Jacket.jpg','Chaqueta de Hombre',160,15),(76,'Zapatos De Vestir De Hombre','https://i.ebayimg.com/images/g/2dEAAOSwqRRjJ1Jg/s-l1200.jpg','Zapato de Hombre',30.09,16),(77,'Zapato Casual Hombre NOBUCK AZUL','https://zapa10.es/public/fotos/high/4152_img1419-op.JPG','Zapato de Hombre',26.99,16),(78,'zapatos Oxford para un estilo elegante','https://www.bexley.com/fstrz/r/s/www.bexley.com/es/es/media/wysiwyg/guides-produits/chaussures/spezia.jpg','Zapato de Hombre',49.99,16),(79,'Zapato de cordón','https://calzadosoro.com/11558-large_default/ref-2136-zapato-de-cordon-pitillos-hombre-en-piel-serraje-marron-y-suela-ligera-antideslizante.jpg','Zapato de Hombre',59.46,16),(80,'Zapatos españoles de hombre','https://lavalencianacalzados.com/blog/wp-content/uploads/2024/03/marcas-de-zapatos-espanoles-de-hombre-mas-relevantes.jpg','Zapato de Hombre',58,16);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_talla`
--

DROP TABLE IF EXISTS `producto_talla`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_talla` (
  `producto_id` bigint NOT NULL,
  `talla_id` bigint NOT NULL,
  PRIMARY KEY (`producto_id`,`talla_id`),
  KEY `FK8urixbq5ur3m1m0t7g9x0iuwo` (`talla_id`),
  CONSTRAINT `FK8urixbq5ur3m1m0t7g9x0iuwo` FOREIGN KEY (`talla_id`) REFERENCES `tallas` (`id`),
  CONSTRAINT `FKn1fe5en12c58p72abo9hqktse` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_talla`
--

LOCK TABLES `producto_talla` WRITE;
/*!40000 ALTER TABLE `producto_talla` DISABLE KEYS */;
INSERT INTO `producto_talla` VALUES (41,1),(42,1),(43,1),(44,1),(45,1),(46,1),(47,1),(48,1),(49,1),(50,1),(61,1),(62,1),(63,1),(64,1),(65,1),(66,1),(67,1),(68,1),(69,1),(70,1),(71,1),(72,1),(73,1),(74,1),(75,1),(41,2),(42,2),(43,2),(44,2),(45,2),(46,2),(47,2),(48,2),(49,2),(50,2),(61,2),(62,2),(63,2),(64,2),(65,2),(66,2),(67,2),(68,2),(69,2),(70,2),(71,2),(72,2),(73,2),(74,2),(75,2),(41,3),(42,3),(43,3),(44,3),(45,3),(46,3),(47,3),(48,3),(49,3),(50,3),(61,3),(62,3),(63,3),(64,3),(65,3),(66,3),(67,3),(68,3),(69,3),(70,3),(71,3),(72,3),(73,3),(74,3),(75,3),(41,4),(42,4),(43,4),(44,4),(45,4),(46,4),(47,4),(48,4),(49,4),(50,4),(61,4),(62,4),(63,4),(64,4),(65,4),(66,4),(67,4),(68,4),(69,4),(70,4),(71,4),(72,4),(73,4),(74,4),(75,4),(41,5),(42,5),(43,5),(44,5),(45,5),(46,5),(47,5),(48,5),(49,5),(50,5),(61,5),(62,5),(63,5),(64,5),(65,5),(66,5),(67,5),(68,5),(69,5),(70,5),(71,5),(72,5),(73,5),(74,5),(75,5),(56,6),(57,6),(58,6),(59,6),(60,6),(76,6),(77,6),(78,6),(79,6),(80,6),(56,7),(57,7),(58,7),(59,7),(60,7),(76,7),(77,7),(78,7),(79,7),(80,7),(56,8),(57,8),(58,8),(59,8),(60,8),(76,8),(77,8),(78,8),(79,8),(80,8),(56,9),(57,9),(58,9),(59,9),(60,9),(76,9),(77,9),(78,9),(79,9),(80,9),(56,10),(57,10),(58,10),(59,10),(60,10),(76,10),(77,10),(78,10),(79,10),(80,10),(56,11),(57,11),(58,11),(59,11),(60,11),(76,11),(77,11),(78,11),(79,11),(80,11),(56,12),(57,12),(58,12),(59,12),(60,12),(76,12),(77,12),(78,12),(79,12),(80,12),(56,13),(57,13),(58,13),(59,13),(60,13),(76,13),(77,13),(78,13),(79,13),(80,13);
/*!40000 ALTER TABLE `producto_talla` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tallas`
--

DROP TABLE IF EXISTS `tallas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tallas` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_jgsbl1jyxbdogsu5o8xa51vn` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tallas`
--

LOCK TABLES `tallas` WRITE;
/*!40000 ALTER TABLE `tallas` DISABLE KEYS */;
INSERT INTO `tallas` VALUES (6,'38'),(7,'39'),(8,'40'),(9,'41'),(10,'42'),(11,'43'),(12,'44'),(13,'45'),(4,'L'),(3,'M'),(2,'S'),(5,'XL'),(1,'XS');
/*!40000 ALTER TABLE `tallas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` enum('ADMIN','USUARIO') DEFAULT NULL,
  `activo` bit(1) DEFAULT NULL,
  `fecha_modificacion` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_kfsp0s1tflm1cwlj8idhqsad0` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (3,'admin@admin.com','Administrador','$2a$10$14dCod32JqGLCPGLBLyTbe8P3mxtH4D2WgmMEE85Wn2NY6Go2XVRq','ADMIN',_binary '',NULL),(4,'usuario1@user.com','jorge','$2a$10$WAwJIJzuHl1h0mwASpophe0UsyDSKdMHVSvvIFoF0.oTDocbcj8Q6','USUARIO',_binary '',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valoraciones`
--

DROP TABLE IF EXISTS `valoraciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `valoraciones` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `comentario` varchar(1000) DEFAULT NULL,
  `fecha_valoracion` datetime(6) NOT NULL,
  `puntuacion` int NOT NULL,
  `producto_id` bigint NOT NULL,
  `usuario_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhd9unp5jwhfve95odtb0an6hm` (`producto_id`),
  KEY `FKmtbedrv2q0wjdsrvnb57g8whw` (`usuario_id`),
  CONSTRAINT `FKhd9unp5jwhfve95odtb0an6hm` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`id`),
  CONSTRAINT `FKmtbedrv2q0wjdsrvnb57g8whw` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valoraciones`
--

LOCK TABLES `valoraciones` WRITE;
/*!40000 ALTER TABLE `valoraciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `valoraciones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-05 19:09:26
