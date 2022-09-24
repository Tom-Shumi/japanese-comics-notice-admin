CREATE TABLE `comic` (
    `id` int NOT NULL AUTO_INCREMENT,
    `japaneseTitle` varchar(255) NOT NULL,
    `englishTitle` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `volume` (
    `id` int NOT NULL AUTO_INCREMENT,
    `comicId` int NOT NULL,
    `volumeNum` int NOT NULL,
    `url` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


ALTER TABLE `volume` ADD usUrl varchar(255);

CREATE TABLE `newVolume` (
    `id` int NOT NULL AUTO_INCREMENT,
    `asin` varchar(10)  NOT NULL UNIQUE,
    `englishTitle` varchar(255) NOT NULL,
    `volumeNum` int NOT NULL,
    `url` varchar(255) NOT NULL,
    `created_at`  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE `newVolume` ADD usUrl varchar(255);

CREATE TABLE `twitterToken` (
    `id` int NOT NULL AUTO_INCREMENT,
    `country` varchar(2) NOT NULL,
    `accessToken` varchar(255) NOT NULL,
    `refreshToken` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `review` (
    `id` int NOT NULL AUTO_INCREMENT,
    `volumeId` int NOT NULL,
    `star` int NOT NULL,
    `review` varchar(200) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `lineAccount` (
    `id` int NOT NULL AUTO_INCREMENT,
    `lineUserId` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `reservableVolume` (
    `id` int NOT NULL AUTO_INCREMENT,
    `asin` varchar(10)  NOT NULL UNIQUE,
    `englishTitle` varchar(255) NOT NULL,
    `volumeNum` int NOT NULL,
    `usUrl` varchar(255) NOT NULL,
    `releaseDate`  DATE NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE `newVolume` ADD `releaseDate`  DATE;