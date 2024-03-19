CREATE TABLE `admins` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(255) NOT NULL,
  `admin_email` varchar(255) NOT NULL,
  `admin_pass` varchar(255) NOT NULL,
  `admin_county` varchar(255) NOT NULL,
  `admin_job` varchar(255) NOT NULL,
  `admin_contact` varchar(255) NOT NULL,
  `admin_about` text NOT NULL,
  `admin_image` varchar(255) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `bundle_product_relation` (
  `rel_id` int NOT NULL AUTO_INCREMENT,
  `rel_title` varchar(255) NOT NULL,
  `product_id` int NOT NULL,
  `bundle_id` int NOT NULL,
  PRIMARY KEY (`rel_id`),
  KEY `product_id` (`product_id`),
  KEY `bundle_id` (`bundle_id`),
  CONSTRAINT `bundle_product_relation_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  CONSTRAINT `bundle_product_relation_ibfk_2` FOREIGN KEY (`bundle_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `bundles` (
  `bundle_id` int NOT NULL AUTO_INCREMENT,
  `bundle_title` varchar(255) NOT NULL,
  `bundle_description` text,
  `bundle_image` varchar(255) DEFAULT NULL,
  `bundle_price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`bundle_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `wishlist` (
  `wishlist_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`wishlist_id`),
  KEY `customer_id` (`customer_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `pending_orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `invoice_no` varchar(255) NOT NULL,
  `product_id` int NOT NULL,
  `qty` int NOT NULL,
  `size` varchar(255) NOT NULL,
  `order_status` varchar(255) NOT NULL,
  `order_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_id`),
  KEY `customer_id` (`customer_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `pending_orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  CONSTRAINT `pending_orders_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `payments` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `invoice_no` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_mode` varchar(255) DEFAULT NULL,
  `ref_no` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `payment_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `manufacturers` (
  `manufacturer_id` int NOT NULL AUTO_INCREMENT,
  `manufacturer_name` varchar(255) NOT NULL DEFAULT 'Default Manufacturer',
  `manufacturer_country` varchar(255) DEFAULT NULL,
  `manufacturer_address` text,
  `manufacturer_contact` varchar(255) DEFAULT NULL,
  `manufacturer_top` enum('yes','no') NOT NULL,
  `manufacturer_title` varchar(45) DEFAULT NULL,
  `manufacturer_image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`manufacturer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `icons` (
  `icon_id` int NOT NULL AUTO_INCREMENT,
  `icon_name` varchar(255) NOT NULL,
  `icon_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`icon_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `customers` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `customer_address` text,
  `customer_contact` varchar(255) DEFAULT NULL,
  `customer_pass` varchar(255) DEFAULT NULL,
  `customer_image` varchar(255) DEFAULT NULL,
  `customer_confirm_code` varchar(255) DEFAULT NULL,
  `customer_city` varchar(255) DEFAULT NULL,
  `customer_county` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `customer_orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `invoice_no` varchar(255) NOT NULL,
  `order_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `due_amount` decimal(10,2) NOT NULL,
  `order_status` varchar(255) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `customer_orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
