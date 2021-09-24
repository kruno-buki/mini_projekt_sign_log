-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2021 at 04:26 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projekt_autentifikacija`
--

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

CREATE TABLE `korisnik` (
  `korisnikID` int(11) NOT NULL,
  `ime` varchar(100) NOT NULL,
  `prezime` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `brojTelefona` varchar(15) DEFAULT NULL,
  `datumRodenja` date DEFAULT NULL,
  `grad` varchar(255) DEFAULT NULL,
  `administrator` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`korisnikID`, `ime`, `prezime`, `email`, `brojTelefona`, `datumRodenja`, `grad`, `administrator`) VALUES
(1, 'Pero', 'Peričić', 'dsfsdfsdf@dsfs', '0911575190', '2021-09-07', 'Zagreb', 0),
(6, 'Sanja', 'Sanjic', 'sadas@sadaqqq', '09343434', '2021-09-17', 'Samobor', 0),
(7, 'James', 'Bond', 'admin@mail.com', NULL, NULL, NULL, 1),
(8, 'Josip', 'Josip', 'josip@gmail.com', '09123451', '2021-09-09', 'Zagreb', 0),
(9, 'Hrvoje', 'Horvat', 'hrvoje@gmail.com', '098765432', '1996-02-01', 'Karlovac', 0),
(10, 'Mirko', 'Mirkić', 'mirkan@mail.com', '', '0000-00-00', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `zaporke`
--

CREATE TABLE `zaporke` (
  `sifraID` int(11) NOT NULL,
  `sifra` varchar(50) NOT NULL,
  `recoverySifra` varchar(100) NOT NULL,
  `korisnikID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `zaporke`
--

INSERT INTO `zaporke` (`sifraID`, `sifra`, `recoverySifra`, `korisnikID`) VALUES
(1, '1234', 'Ptice umiru pjevajuci', 1),
(6, '1234', 'Ptice umiru pjevajuci', 6),
(7, '0070', 'Bond, James', 7),
(8, '1234', 'majmun', 8),
(9, '1234', 'Sunce na obzoru', 9),
(10, '1111', 'neki pojam', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `korisnik`
--
ALTER TABLE `korisnik`
  ADD PRIMARY KEY (`korisnikID`),
  ADD UNIQUE KEY `korisnikID` (`korisnikID`);

--
-- Indexes for table `zaporke`
--
ALTER TABLE `zaporke`
  ADD PRIMARY KEY (`sifraID`),
  ADD KEY `korisnikID` (`korisnikID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `korisnik`
--
ALTER TABLE `korisnik`
  MODIFY `korisnikID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `zaporke`
--
ALTER TABLE `zaporke`
  MODIFY `sifraID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `zaporke`
--
ALTER TABLE `zaporke`
  ADD CONSTRAINT `zaporke_ibfk_1` FOREIGN KEY (`korisnikID`) REFERENCES `korisnik` (`korisnikID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
