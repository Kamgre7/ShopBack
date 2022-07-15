-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 15 Lip 2022, 14:15
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `megak_shop`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `product`
--

CREATE TABLE `product` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(6) NOT NULL,
  `price` decimal(9,2) NOT NULL,
  `sku` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryId` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `quantity`, `price`, `sku`, `categoryId`, `img`, `createdAt`) VALUES
('13744643-f4ca-429e-af05-ee7614016559', 'samsung galaxy s21', 'Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice smartfon Very nice sm', 10, '199.90', 'ab232a32', '09034afe-5c50-446e-9529-b648e5643e36', 'samsung.jpg', '2022-07-09 10:36:23'),
('15758338-7c9b-43ee-825d-2ba48dcda1e9', 'Apple 1kg', 'Jabłko – jadalny, kulisty owoc drzew z rodzaju jabłoń Malus. Jabłka odmian uprawnych o mieszańcowym pochodzeniu, uznawanych za gatunek jabłoń domowa Malus domestica, są istotnym komercyjnie owocem o soczystym i chrupkim miąższu. Są spożywane na surowo, a także po obróbce kulinarnej.', 57, '1.70', 'J4B66k', '38a6b033-f563-48b2-ae22-fe53bb39ec92', 'apple.jpg', '2022-07-09 10:46:18'),
('244bcbb1-fc85-11ec-b3a9-5cf3709dd9df', 'Samochodzik', 'Super zajebisty samochód Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit.', 10, '100.00', 'asldk3', '1cc5b87b-4cad-4e9c-b0f3-780534de345c', 'car.png', '2022-07-05 19:08:51'),
('4c6b4fb5-4c77-48a9-9732-a403b41c521b', 'Necklance', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum qu', 50, '1700.10', '543f', '047779f1-42ca-4d66-85f0-52c995a4bf2f', 'necklance.png', '2022-07-08 14:55:19'),
('64fc0c8d-bedc-4e3b-9bc3-2127a1fed3b4', 'Nike ball', ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum quia sed ut, voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo nisi nostrum q', 10, '50.00', 'hjky776', 'e040fa08-1a73-4a72-b4a7-ca9b21d5592c', 'ball.png', '2022-07-08 14:55:55'),
('c7b7c258-8bfb-4bae-a8f6-b3c0500700ff', 'Chair', 'One of the basic pieces of furniture, a chair is a type of seat. Its primary features are two pieces of a durable material, attached as back and seat to one another at a 90°-or-slightly-greater angle, with usually the four corners of the horizontal seat attached in turn to four legs—or other parts of the seat\'s underside attached to three legs or to a shaft about which a four-arm turnstile on rollers can turn—strong enough to support the weight of a person who sits on the seat (usually wide and broad enough to hold the lower body from the buttocks almost to the knees) and leans against the vertical back (usually high and wide enough to support the back to the shoulder blades).', 40, '10.78', 'sad35', '512c29cd-16f9-42c6-9c40-d73fba15dcf5', 'chair.jpg', '2022-07-12 17:48:01');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `product_category`
--

CREATE TABLE `product_category` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `product_category`
--

INSERT INTO `product_category` (`id`, `name`, `description`, `img`, `createdAt`) VALUES
('047779f1-42ca-4d66-85f0-52c995a4bf2f', 'Jewellery', 'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.', 'jewellery.jpg', '2022-07-12 17:45:33'),
('09034afe-5c50-446e-9529-b648e5643e36', 'Electronic', 'Electronics has hugely influenced the development of modern society. The identification of the electron in 1897, along with the subsequent invention of the vacuum tube which could amplify and rectify small electrical signals, inaugurated the field of electronics and the electron age.[1] Practical applications started with the invention of the diode by Ambrose Fleming and the triode by Lee De Forest in the early 1900s, which made the detection of small electrical voltages such as radio signals from a radio antenna possible with a non-mechanical device.', 'electronics.jpg', '2022-07-04 18:48:08'),
('1cc5b87b-4cad-4e9c-b0f3-780534de345c', 'Vehicle', 'A car (or automobile) is a wheeled motor vehicle that is used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of goods.[2][3]', 'vehicles.jpg', '2022-07-04 19:43:16'),
('38a6b033-f563-48b2-ae22-fe53bb39ec92', 'Foods', 'food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion. Plants, which convert solar energy to food by photosynthesis, are the primary food source. Animals that feed on plants often serve as sources of food for other animals. To learn more about the sequence of transfers of matter and energy in the form of food from organism to organism, see food chain.', 'foods.jpg', '2022-07-04 19:00:36'),
('512c29cd-16f9-42c6-9c40-d73fba15dcf5', 'furniture', 'Furniture consists of large objects such as tables, chairs, or beds that are used in a room for sitting or lying on or for putting things on or in. Each piece of furniture in their home suited the style of the house. Synonyms: household goods, furnishings, fittings, house fittings More Synonyms of furniture.', 'furniture.jpg', '2022-07-09 11:09:51'),
('e040fa08-1a73-4a72-b4a7-ca9b21d5592c', 'Sports', 'an activity involving physical exertion and skill in which an individual or team competes against another or others for entertainment.an activity involving physical exertion and skill in which an individual or team competes against another or others for entertainment.an activity involving physical exertion and skill in which an individual or team competes against another or others for entertainment.', 'sports.jpg', '2022-07-12 17:44:09');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_product_product_category` (`categoryId`);

--
-- Indeksy dla tabeli `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`id`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_product_product_category` FOREIGN KEY (`categoryId`) REFERENCES `product_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
