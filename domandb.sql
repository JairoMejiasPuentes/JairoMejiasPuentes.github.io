-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-05-2022 a las 12:53:18
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `domandb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `block_user`
--

CREATE TABLE `block_user` (
  `id_user` int(11) NOT NULL,
  `id_block` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `element`
--

CREATE TABLE `element` (
  `id_element` tinyint(4) NOT NULL,
  `name` varchar(20) NOT NULL,
  `sound` varchar(10) NOT NULL,
  `img` varchar(15) NOT NULL,
  `lang` varchar(3) NOT NULL,
  `id_block` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `element`
--

INSERT INTO `element` (`id_element`, `name`, `sound`, `img`, `lang`, `id_block`) VALUES
(1, 'calc', 'calc', 'calc', 'es', 1),
(2, 'calctxt', 'calc', 'calctxt', 'es', 1),
(3, 'glue', 'glue', 'glue', 'es', 1),
(4, 'gluetxt', 'glue', 'gluetxt', 'es', 1),
(5, 'notebook', 'not', 'notebook', 'es', 1),
(6, 'notebooktxt', 'not', 'notebooktxt', 'es', 1),
(7, 'pencil', 'pencil', 'pencil', 'es', 1),
(8, 'penciltxt', 'pencil', 'penciltxt', 'es', 1),
(9, 'rule', 'rule', 'rule', 'es', 1),
(10, 'ruletxt', 'rule', 'ruletxt', 'es', 1),
(11, 'park', 'park', 'park', 'es', 2),
(12, 'parktxt', 'park', 'parktxt', 'es', 2),
(13, 'castle', 'castle', 'castle', 'es', 2),
(14, 'castletxt', 'castle', 'castletxt', 'es', 2),
(15, 'seesaw', 'seesaw', 'seesaw', 'es', 2),
(16, 'seesawtxt', 'seesaw', 'seesawtxt', 'es', 2),
(17, 'slide', 'slide', 'slide', 'es', 2),
(18, 'slidetxt', 'slide', 'slidetxt', 'es', 2),
(19, 'swing', 'swing', 'swing', 'es', 2),
(20, 'swingtxt', 'swing', 'swingtxt', 'es', 2),
(21, 'carrots', 'carrots', 'carrots', 'es', 3),
(22, 'carrotstxt', 'carrots', 'carrotstxt', 'es', 3),
(23, 'eggs', 'eggs', 'eggs', 'es', 3),
(24, 'eggstxt', 'eggs', 'eggstxt', 'es', 3),
(25, 'fish', 'fish', 'fish', 'es', 3),
(26, 'fishtxt', 'fish', 'fishtxt', 'es', 3),
(27, 'meat', 'meat', 'meat', 'es', 3),
(28, 'meattxt', 'meat', 'meattxt', 'es', 3),
(29, 'milk', 'milk', 'milk', 'es', 3),
(30, 'milktxt', 'milk', 'milktxt', 'es', 3),
(31, 'bird', 'bird', 'bird', 'es', 4),
(32, 'birdtxt', 'bird', 'birdtxt', 'es', 4),
(33, 'cat', 'cat', 'cat', 'es', 4),
(34, 'cattxt', 'cat', 'cattxt', 'es', 4),
(35, 'dog', 'dog', 'dog', 'es', 4),
(36, 'dogtxt', 'dog', 'dogtxt', 'es', 4),
(37, 'fish', 'fish', 'fish', 'es', 4),
(38, 'fishtxt', 'fish', 'fishtxt', 'es', 4),
(39, 'hamster', 'hamster', 'hamster', 'es', 4),
(40, 'hamstertxt', 'hamster', 'hamstertxt', 'es', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `elements_block`
--

CREATE TABLE `elements_block` (
  `id_block` tinyint(3) UNSIGNED NOT NULL,
  `description` text DEFAULT NULL,
  `finished` tinyint(1) DEFAULT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `elements_block`
--

INSERT INTO `elements_block` (`id_block`, `description`, `finished`, `img`) VALUES
(1, 'bloque sobre materiales de papelería', 0, 'stationery'),
(2, 'bloque sobre elementos del parque', 0, 'park'),
(3, 'bloque sobre los alimentos', 0, 'food'),
(4, 'bloque sobre los animales domésticos', 0, 'pets');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `play_user`
--

CREATE TABLE `play_user` (
  `id_user` tinyint(4) NOT NULL,
  `name_user` text NOT NULL,
  `pass_user` int(11) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `play_user`
--

INSERT INTO `play_user` (`id_user`, `name_user`, `pass_user`, `email`) VALUES
(1, 'jairo', 1234, ''),
(2, 'admin', 1234, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `element`
--
ALTER TABLE `element`
  ADD PRIMARY KEY (`id_element`);

--
-- Indices de la tabla `elements_block`
--
ALTER TABLE `elements_block`
  ADD PRIMARY KEY (`id_block`);

--
-- Indices de la tabla `play_user`
--
ALTER TABLE `play_user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `element`
--
ALTER TABLE `element`
  MODIFY `id_element` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT de la tabla `elements_block`
--
ALTER TABLE `elements_block`
  MODIFY `id_block` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `play_user`
--
ALTER TABLE `play_user`
  MODIFY `id_user` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
