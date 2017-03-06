-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2017 at 10:15 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `msydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(5) NOT NULL,
  `activTitle` varchar(100) NOT NULL,
  `activDetail` text NOT NULL,
  `activDate` date NOT NULL,
  `activImage` int(11) NOT NULL,
  `activSubmit` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `activTitle`, `activDetail`, `activDate`, `activImage`, `activSubmit`) VALUES
(1, 'ค่ายญาลันนันบารูในสถานศึกษา ', ' ช่วงวันที่ 19-21 พฤศจิกายน พ.ศ.2556 ศูนย์ประสานงานญาลันนันบารู ได้จัดค่ายญาลันนันบารูในสถานศึกษา จำนวน 3 รุ่น แยกเป็น\r\n\r\n          - อบรมปอเนาะสานใจฯ  ณ สถาบันศึกษาปอเนาะมูฮายีรีน ม.4 ต.บาโงสะโต อ.ระแงะ จ.นราธิวาส มีนักเรียนเข้ารับการอบรม 115 คน\r\n          - อบรมนักเรียนอาสาป้องกันภัยยาเสพติด จำนวน 2 รุ่น\r\n               1. โรงเรียนมุสลิมบำรุง ม.2 ต.บาโร๊ะ อ.ยะหา จ.ยะลา มีนักเรียนเข้ารับการอบรม 76 คน\r\n               2. โรงเรียนอิสลามวิทยามูลนิธิ ม.3 ต.จะแหน อ.สะบ้าย้อย จ.สงขลา มีนักเรียนเข้ารับการอบรม 239 คน \r\n   วันที่ 19 พฤศจิกายน พ.ศ.2556  เป็นวันแรกของอบรมตามหลักสูตร ซึ่งบาบอ/ผู้บริหาร/อาจารย์ รวมทั้งนักเรียนให้การต้อนรับ และมีส่วนร่วมเป็นอย่างดี', '2014-04-01', 0, 'เจ้าหน้าที่หน่วยญาลันปัตตานี'),
(2, '\r\nค่ายพัฒนาศักยภาพครู ณ โรงเรียนประทีปศาสตร์', 'การจัดค่ายพัฒนาศักยภาพครู ในหลักสูตรนักเรียนอาสา 3 วัน 2 คืน ระหว่างวันที่ 22,24-25 กรกฎาคม 2559\r\n\r\nณ โรงเรียนประทีปศาสตร์ ม.2 ต.ท่าม่วง อ.เทพา จ.สงขลา ผู้เข้าอบรมจำนวน 22 คน \r\n\r\n          การจัดอบรมครั้งนี้มีวัตถุประสงค์เพื่อสร้างจิตใต้สำนึกในการเป็นครู และความสามัคคีในหมู่คณะ โดยเริ่มแรกจะการทำความรู้จักกัน ระหว่างทีมงานวิทยากรกับผู้เข้าอบรม และสร้างความคุ้นเคยให้กับทุกคน เพื่อให้ผู้เข้าอบรมได้มีความพร้อมในการที่จะเรียนรู้จากทีมวิยากร ทั้งนี้ทาง ผอ.และบาบอได้ให้ความร่วมมือเป็นอย่างดี\r\n\r\n          ผลการอบรม ทางครูทุกคนได้ให้ความร่วมมือเป็นอย่างดี โดยเฉพาะการเปิดใจในการที่จะแก้ไขปัญหาในโรงเรียน และการเปิดใจในการแบ่งกลุ่มของคณะอาจารย์ ทั้งนี้ในการให้ความรู้จะใช้กระบวนการของหลักสูตรนักเรียนอาสา และหลักสูตรของผู้นำ  และที่สำคัญที่สุดทางวิทยากรได้มีการให้ความรู้ในรูปแบบหลักสูตรญาลันนันบารูสัญจรกับนักเรียนโรงเรียนประทีปอิสลามวิทยา ทั้งนี้ยังให้นักเรียนได้เป็นพยานว่า คณะอาจารย์ได้รู้ถึงการเป็นอยู่ที่แท้จริงและกลับมาเป็นเหมือนเดิม กลับมาคุยกันเหมือนเดิม กลับมาสามัคคีเป็นหนึ่งเหมือนเดิม และทางอาจารย์ก็ยังได้ให้อภัยซึ่งกันและกัน  กิจกรรมในครั้งนี้เป็นตัวชี้วัดว่าในตัวของวิทยากรของศูนย์ประสานงานได้จัดบรรลุเป้าหมายเป็นอย่างดี', '2016-07-01', 0, 'เจ้าหน้าที่หน่วยญาลันสงขลา'),
(3, '\r\nหลักสูตรแกนนำญาลันนันบารูหญิง บ้านปาแตรายอ', 'การจัดอบรมหลักสูตรแกนนำญาลันนันบารูหญิง หลักสูตร 2 วัน 1 คืน ห้วงวันที่ 4 - 5 พฤษภาคม พ.ศ. 2558 ในพื้นที่บ้านปาแตรายอ ม.2 ต.เกะรอ อ.รามัน จ.ยะลา ยอด 51 คน\r\n\r\n          การจัดอบรมครั้งนี้ทีมได้ให้ความรู้เรื่องโทษพิษภัยของยาเสพติด และได้เกมเวลาที่ผ่านมา ย้อนกลับไม่ได้   เล่นเกมสามัคคี เล่นเกมหยอดปากกาในขวด และลงกิจกรรมผู้นำที่ดีควรเป็นคนแบบไหน\r\n\r\n          แล้วโจทย์ที่ 2 ถ้าหากว่าเราเป็นผู้นำเราจะพัฒนาหมู่บ้านเราอย่างไร? และกลางคืนเปิดหนังมูฮัมหมัดให้น้องๆ ได้ดู และยังมีการร้องอานาซีดเป็นกลุ่มอีกด้วย', '2015-04-15', 0, 'เจ้าหน้าที่หน่วยญาลันยะลา');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(5) NOT NULL,
  `newsTitle` varchar(100) NOT NULL,
  `newsDetail` text NOT NULL,
  `newsDate` date NOT NULL,
  `newsImage` int(11) NOT NULL,
  `newsSubmit` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `newsTitle`, `newsDetail`, `newsDate`, `newsImage`, `newsSubmit`) VALUES
(1, 'วันที่ 26 มิถุนายน วันต่อต้านยาเสพติดโลก', 'วันที่ 26 มิถุนายน วันต่อต้านยาเสพติดโลก\r\n\r\n          สำนักงาน ป.ป.ส.ได้จัดงานมอบโล่ประกาศเกียรติคุณบุคคลและองค์กรณ์ที่มีผลงานยอดเยี่ยมและดีเด่นในการป้องกันและแก้ไขปัญหายาเสพติด ประจำปี 2558  ณ หอประชุมกรมประชาสัมพันธ์  วันที่ 26 มิถุนายน 2558  โดย พล.อ.ประยุทธ์ จันทร์โอชา นายกรัฐมนตรี เป็นผู้มอบ\r\n\r\n          ในโอกาศนี้ บาบอ อับบาส  บินอิบรอฮีม  บาบอปอเนาะญาลันนันบารู/ประธานศูนย์ประสานงานญาลันนันบารู รับโล่เกียรติคุณ "ด้านการบำบัด/ฟื้นฟู"  \r\n\r\n          อีกหนึ่งคน  อับดุลเราะมัน  สายาดะ  วิทยากร ศปส.กอ.รมน.ภาค 4 สน./รองประธานศูนย์ประสานงานญาลันนันบารู  รับโล่เกียรติคุณ "ด้านป้องกัน"', '2016-06-26', 0, 'เจ้าหน้าที่หน่วยญาลันปัตตานี'),
(2, 'อบรมแกนนำปอเนาะเกาะแลหนัง', '   การจัดอบรมแกนนำ ณ ปอเนาะเกาะแลหนัง ต.ปากบาง อ.เทพา จ.สงขลา ระหว่างวันที่ 25 - 27 เมษายน \r\nพ.ศ.2558\r\n\r\n      ทางวิทยากรได้ให้ความรู้เรื่องโทษพิษภัยของยาเสพติด และกิจกรรมเล่นเกมเชื่อก เพื่อแสดงให้เห็นว่าผู้นำต้องใช้คำสั่งในการที่จะเป็นผู้นำต้องอดทนและสามัคคีกัน เพื่อจะเดินหน้าต่อไปในการที่จะปฎิบัติกฎระเบียบที่ต้องแก้ไขปัญหาที่เกิดขึ้นและจะต้องสามัคคีกันและเป็นพี่น้องกัน', '2015-04-25', 0, 'เจ้าหน้าที่หน่วยญาลันสงขลา'),
(3, 'กิจกรรม เวทีชาวบ้าน', ' วันที่ 18 พฤศจิกายน 2556 ศูนย์ประสานงานฯ จ.ปัตตานี (ทีมสันติภาพ) ได้ลงพื้นที่จัดกิจกรรม เวทีชาวบ้าน ณ.สถาบันปอเนาะมุสตานุลอารีฟีน ต.กระหวะ อ.มายอ ปัตตานี เป็นกิจกรรมต่อเนื่องหลังจากมีการอบรมปอเนาะสานใจฯ และกิจกรรมห้องน้ำสุขภาวะ เพื่อให้เกิดต่อเนื่องในเป้าหมายที่วางไว้ กิจกรรมในวันนี้เป็นกิจกรรมที่ให้เกิดการร่วมมือกันระหว่างชาวบ้านในพื้นที่ กับสถาบันปอเนาะในการแก่ไขปัญหายาเสพติดในหมู่บ้านของตัวเอง\r\n\r\n         กลุ่มเป้าหมาย ทั้งหมด164 คน แยกเป็นชาวบ้านในพื้นที่รวมกับผู้นำในพื้นที่ 98 คน และนักเรียนสถาบันปอเนาะ 66 คน\r\n\r\n          กิจกรรมที่ได้ทำวันนี้\r\n          1. บรรยายโทษพิษภัยยาเสพติดให้กับชาวบ้านได้รู้ว่าสถานการณ์ยาเสพติดในปัจจุบันเป็นอย่างไร จะได้ร่วมมือกันในการแก้ไขและป้องกันต่อไป\r\n\r\n          2. กิจกรรมกวนอาซูรอ เพื่อสร้างความสัมพันธ์ระหว่างชาวบ้านในพื้นที่และนักเรียนในสถาบัน \r\n\r\n          ผลที่ได้รับ\r\n          1. ชาวบ้านในพื้นที่ได้รู้ถึงโทษของยาเสพติดที่กำลังระบาดในพื้นที่ และยอมรับว่าสถานการณ์ยาเสพติดในพื้นที่ก็มีอยู่\r\n\r\n          2. สถาบันปอเนาะได้มีความร่วมมือกันกับชาวบ้านที่จะร่วมป้องกันและแกัไขปัญหายาเสพติดต่อไป\r\n\r\n          3. สร้างความสัมพันธ์ระหว่างสถาบันปอเนาะกับชาวบ้านในพื้นที่\r\n\r\n          4. ห้องน้ำสามารถเป็นตัวอย่างให้กับสถาบันอื่นที่ยังไม่ร่วมโครงการกับเราและสามารถเป็นตัวอย่างให้กับครัวเรือนด้วย เป็นกิจกรรมใหม่ที่เป็นกิจกรรมต่อเนื่องในสถาบันปอเนาะ', '2014-11-10', 0, 'เจ้าหน้าที่หน่วยญาลันปัตตานี'),
(4, '\r\nบุกเบิกปักเสาเขตพื้นที่ที่จะสร้างปอเนาะญาลันนันบารู', ' แกนนำญาลันนันบารู และทีมศูนย์ประสานงานญาลันนันบารู ร่วมกันบุกเบิกปักเสาเขตพื้นที่ที่จะสร้างปอเนาะญาลันนันบารู ที่เกาะแลหนัง ต.ปากบาง อ.เทพา จ.สงขลา', '2016-10-03', 0, 'เจ้าหน้าที่หน่วยญาลันสงขลา');

-- --------------------------------------------------------

--
-- Table structure for table `stafflist`
--

CREATE TABLE `stafflist` (
  `id` int(5) NOT NULL,
  `staffName` varchar(50) NOT NULL,
  `staffLastname` varchar(50) NOT NULL,
  `staffGender` varchar(5) NOT NULL,
  `staffAge` int(3) NOT NULL,
  `staffAddress` text NOT NULL,
  `staffDepart` varchar(50) NOT NULL,
  `staffTel` varchar(10) NOT NULL,
  `staffEmail` varchar(50) NOT NULL,
  `staffUser` varchar(20) NOT NULL,
  `staffPswd` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stafflist`
--

INSERT INTO `stafflist` (`id`, `staffName`, `staffLastname`, `staffGender`, `staffAge`, `staffAddress`, `staffDepart`, `staffTel`, `staffEmail`, `staffUser`, `staffPswd`) VALUES
(1, 'สุชาติ', 'สีใส', 'ชาย', 34, 'อ.เมือง จังหวัด นราธิวาส', 'หน่วยญาลันนราธิวาส', '0852362364', 'Suchart.s@gmail.com', 'suchart', 'suchart'),
(2, 'เพทาย  ', 'เพขรถาวร', 'หญิง', 25, 'อ.รามัน จ.ยะลา', 'หน่วยญาลันยะลา', '0948146782', 'Paytaiy.P@gmail.com', 'paytaiy', 'paytaiy'),
(3, 'ดนัย ', 'สิงหธร', 'ชาย', 30, 'เมือง จ.นราธิวาส', 'หน่วยญาลันปัตตานี', '0871289432', 'danai@gmail.com', 'danai', 'danai'),
(4, 'กัลย์สุดา', 'ศรีดี', 'หญิง', 23, 'อ.เมือง จ.ภูเก็ต', 'หน่วยญาลันสงขลา', '0869533404', '์Nanny@gmail.com', 'nanny', 'nanny'),
(5, 'อัศรันณ์', 'ญาลัน', 'ชาย', 47, 'อ.เมือง  จ.นราธิวาส', 'หน่วยญาลันยะลา', '0834758312', 'Aslan@gmail.com', 'aslan', 'aslan');

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE `survey` (
  `id` int(5) NOT NULL,
  `surDate` date NOT NULL,
  `surResultPoint` int(5) NOT NULL,
  `surNameAddic` varchar(20) NOT NULL,
  `surLocatedAddic` varchar(20) NOT NULL,
  `surVolunName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `survey`
--

INSERT INTO `survey` (`id`, `surDate`, `surResultPoint`, `surNameAddic`, `surLocatedAddic`, `surVolunName`) VALUES
(1, '2017-02-10', 3, ' มานพ ', 'การดี', 'แสนสุข'),
(2, '2017-02-12', 2, '3', '3', 'อายู'),
(3, '2017-02-12', 3, '2', '2', 'เฟิน');

-- --------------------------------------------------------

--
-- Table structure for table `survey_addic`
--

CREATE TABLE `survey_addic` (
  `id` int(5) NOT NULL,
  `surAddicName` varchar(20) NOT NULL,
  `surAddicLastname` varchar(20) NOT NULL,
  `surAddicAge` int(3) NOT NULL,
  `surAddicLocated` varchar(20) NOT NULL,
  `surAddicAddress` text NOT NULL,
  `surAddicDrugs` text NOT NULL,
  `surAddicGroup` varchar(50) NOT NULL,
  `surAddicRate` text NOT NULL,
  `suraddicVolun` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `survey_addic`
--

INSERT INTO `survey_addic` (`id`, `surAddicName`, `surAddicLastname`, `surAddicAge`, `surAddicLocated`, `surAddicAddress`, `surAddicDrugs`, `surAddicGroup`, `surAddicRate`, `suraddicVolun`) VALUES
(1, 'จิตกร', 'ดอแม', 30, 'เทพา ', 'เทพา จ.สงขลา', 'กัญชา', 'กลุ่มใช้เป็นครั้งคราว (User)', '- การให้ความรู้ความแนะนำจำนวน 1-2 ครั้ง เป็นเวลา 2 สัปดาห์  \r\n- การช่วยเหลือ ครอบครัว โรงเรียน และชุมชน', 'เฟิน'),
(2, 'ฟารีดา', 'ใจดี', 25, 'รามัน', 'รามัน  ยะลา', 'ยาไอซ์', 'กลุ่มใช้เป็นครั้งคราว (User)', '- การให้ความรู้ความแนะนำจำนวน 1-2 ครั้ง เป็นเวลา 2 สัปดาห์  \r\n- การช่วยเหลือ ครอบครัว โรงเรียน และชุมชน', 'อายู'),
(3, 'มานพ', 'การดี', 28, 'เมือง ปัตตานี', 'เมือง  จ.ปัตตนี', 'ฝิ่น เฮโรอีน', 'กลุ่มใช้เป็นครั้งคราว (User)', '- การให้ความรู้ความแนะนำจำนวน 1-2 ครั้ง เป็นเวลา 2 สัปดาห์  \r\n- การช่วยเหลือ ครอบครัว โรงเรียน และชุมชน', 'แสนสุข');

-- --------------------------------------------------------

--
-- Table structure for table `volunteerlist`
--

CREATE TABLE `volunteerlist` (
  `id` int(5) NOT NULL,
  `volunName` varchar(50) NOT NULL,
  `volunLastname` varchar(20) NOT NULL,
  `volunGender` varchar(10) NOT NULL,
  `volunAge` int(3) NOT NULL,
  `volunAddress` text NOT NULL,
  `volunJob` varchar(50) NOT NULL,
  `volunTel` varchar(10) NOT NULL,
  `volunEmail` varchar(50) NOT NULL,
  `volunUser` varchar(20) NOT NULL,
  `volunPswd` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `volunteerlist`
--

INSERT INTO `volunteerlist` (`id`, `volunName`, `volunLastname`, `volunGender`, `volunAge`, `volunAddress`, `volunJob`, `volunTel`, `volunEmail`, `volunUser`, `volunPswd`) VALUES
(1, 'แสนสุข', 'ศรีสยาม', 'หญิง', 25, 'รามัน ยะลา', 'ค้าขาย', '0862030230', 'Sansuk@gmail.com', 'sansuk', 'sansuk'),
(2, 'พัชรมัย', 'เหมหงษา', 'หญิง', 22, 'กะทู้ ภูเก็ต', 'นักศึกษา', '0822302020', 'fern@gmail.com', 'fern', 'fern');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stafflist`
--
ALTER TABLE `stafflist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey`
--
ALTER TABLE `survey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey_addic`
--
ALTER TABLE `survey_addic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `volunteerlist`
--
ALTER TABLE `volunteerlist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stafflist`
--
ALTER TABLE `stafflist`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `survey`
--
ALTER TABLE `survey`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `survey_addic`
--
ALTER TABLE `survey_addic`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `volunteerlist`
--
ALTER TABLE `volunteerlist`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
