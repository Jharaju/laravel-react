-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 27, 2022 at 09:57 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eLearning`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', NULL, '$2y$10$42QFysyUpJ6EBi/qKRBiyuW5zZNVG42M7eeILgBC3osK40vJeBm3i', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `chapters`
--

CREATE TABLE `chapters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chapters`
--

INSERT INTO `chapters` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(24, 'higher order functions', 'active', '2022-04-04 00:18:27', '2022-04-04 23:34:49'),
(25, 'file system', 'active', '2022-04-04 00:18:52', '2022-04-04 23:20:08'),
(26, 'variables and states', 'active', '2022-04-04 00:19:30', '2022-04-04 22:59:47'),
(27, 'Routing', 'active', '2022-04-04 23:40:30', '2022-04-04 23:41:30'),
(28, 'array methods', 'active', '2022-04-05 00:01:59', '2022-04-05 00:12:14'),
(29, 'jsx', 'pending', '2022-04-05 00:02:24', '2022-04-05 00:02:24'),
(30, 'props', 'pending', '2022-04-26 23:21:49', '2022-04-26 23:21:49');

-- --------------------------------------------------------

--
-- Table structure for table `chapter_exams`
--

CREATE TABLE `chapter_exams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `chapter_id` bigint(20) UNSIGNED NOT NULL,
  `exam_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chapter_exams`
--

INSERT INTO `chapter_exams` (`id`, `chapter_id`, `exam_id`, `created_at`, `updated_at`) VALUES
(2, 24, 6, NULL, NULL),
(3, 28, 7, NULL, NULL),
(4, 26, 8, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `chapter_topics`
--

CREATE TABLE `chapter_topics` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `chapter_id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chapter_topics`
--

INSERT INTO `chapter_topics` (`id`, `chapter_id`, `topic_id`, `created_at`, `updated_at`) VALUES
(2, 24, 3, NULL, NULL),
(3, 25, 4, NULL, NULL),
(4, 26, 5, NULL, NULL),
(5, 28, 6, NULL, NULL),
(6, 27, 9, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `exams`
--

CREATE TABLE `exams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `question` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ans_opt_one` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ans_opt_two` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ans_opt_three` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ans_opt_four` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correct_ans` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `exams`
--

INSERT INTO `exams` (`id`, `question`, `ans_opt_one`, `ans_opt_two`, `ans_opt_three`, `ans_opt_four`, `correct_ans`, `status`, `created_at`, `updated_at`) VALUES
(3, 'how to redirect users on different url or pages in js?', 'window.url= \'url\';', 'header(\'location:url or filename\');', 'window .location=\"filename or url\";', 'window.push(\'filename\');', 'window .location=\"filename or url\";', 'pending', '2022-04-04 00:34:09', '2022-04-04 00:34:09'),
(4, 'how to redirect users on different url or pages in js?', 'window.url= \'url\';', 'header(\'location:url or filename\');', 'window .location=\"filename or url\";', 'window.push(\'filename\');', 'window .location=\"filename or url\";', 'active', '2022-04-04 00:42:25', '2022-04-04 23:22:50'),
(5, 'how to redirect users on different url or pages in js?', 'window.url= \'url\';', 'header(\'location:url or filename\');', 'window .location=\"filename or url\";', 'window.push(\'filename\');', 'window .location=\"filename or url\";', 'active', '2022-04-04 00:42:41', '2022-04-04 22:34:42'),
(6, 'how to redirect users on different url or pages in js?', 'window.url= \'url\';', 'header(\'location:url or filename\');', 'window .location=\"filename or url\";', 'window.push(\'filename\');', 'window .location=\"filename or url\";', 'active', '2022-04-04 00:44:26', '2022-04-04 22:20:46'),
(7, 'how many arguments are required in in_array() method in core php?', '1', '3', '2', '4', '2', 'active', '2022-04-05 00:06:12', '2022-04-05 00:12:21'),
(8, 'What is actually jsx?', 'javascript extension', 'javascript and xml', 'javascript package', 'none of them', 'javascript and xml', 'pending', '2022-04-05 00:10:27', '2022-04-05 00:10:27');

-- --------------------------------------------------------

--
-- Table structure for table `exam_stats`
--

CREATE TABLE `exam_stats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Member', 'member@gmail.com', NULL, '$2y$10$nzzi7F7iWheySwxAfkIUH.Esgt0PUZD/QI2z74M0N2onwqWmetHcK', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member_chapters`
--

CREATE TABLE `member_chapters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `member_id` bigint(20) UNSIGNED NOT NULL,
  `chapter_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member_chapters`
--

INSERT INTO `member_chapters` (`id`, `member_id`, `chapter_id`, `created_at`, `updated_at`) VALUES
(13, 1, 24, NULL, NULL),
(14, 1, 25, NULL, NULL),
(15, 1, 26, NULL, NULL),
(16, 1, 27, NULL, NULL),
(17, 1, 28, NULL, NULL),
(18, 1, 29, NULL, NULL),
(19, 1, 30, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member_exams`
--

CREATE TABLE `member_exams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `member_id` bigint(20) UNSIGNED NOT NULL,
  `exam_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member_exams`
--

INSERT INTO `member_exams` (`id`, `member_id`, `exam_id`, `created_at`, `updated_at`) VALUES
(3, 1, 3, NULL, NULL),
(4, 1, 4, NULL, NULL),
(5, 1, 5, NULL, NULL),
(6, 1, 6, NULL, NULL),
(7, 1, 7, NULL, NULL),
(8, 1, 8, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member_requests`
--

CREATE TABLE `member_requests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `member_id` bigint(20) UNSIGNED NOT NULL,
  `request_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member_requests`
--

INSERT INTO `member_requests` (`id`, `member_id`, `request_id`, `created_at`, `updated_at`) VALUES
(13, 1, 15, NULL, NULL),
(14, 1, 16, NULL, NULL),
(16, 1, 18, NULL, NULL),
(17, 1, 19, NULL, NULL),
(18, 1, 20, NULL, NULL),
(20, 1, 22, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member_topics`
--

CREATE TABLE `member_topics` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `member_id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member_topics`
--

INSERT INTO `member_topics` (`id`, `member_id`, `topic_id`, `created_at`, `updated_at`) VALUES
(3, 1, 3, NULL, NULL),
(4, 1, 4, NULL, NULL),
(5, 1, 5, NULL, NULL),
(6, 1, 6, NULL, NULL),
(7, 1, 9, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_02_24_062704_create_subjects_table', 1),
(6, '2022_02_24_063122_create_chapters_table', 1),
(7, '2022_02_24_070625_create_topics_table', 1),
(8, '2022_02_24_071108_create_exams_table', 1),
(9, '2022_02_24_071938_create_exam_stats_table', 1),
(10, '2022_02_24_074031_create_requests_table', 1),
(11, '2022_03_05_212355_create_admins_table', 1),
(12, '2022_03_05_212442_create_members_table', 1),
(13, '2022_03_23_205120_create_member_chapters_table', 1),
(14, '2022_03_23_205202_create_subject_chapters_table', 1),
(15, '2022_03_23_205319_create_subject_topics_table', 1),
(16, '2022_03_23_205334_create_chapter_topics_table', 1),
(17, '2022_03_23_205422_create_member_topics_table', 1),
(18, '2022_03_23_205546_create_member_exams_table', 1),
(19, '2022_03_23_205609_create_subject_exams_table', 1),
(20, '2022_03_23_205622_create_chapter_exams_table', 1),
(21, '2022_03_23_214953_create_member_requests_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(55) UNSIGNED NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chapter` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `topic` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `page_source` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`id`, `post_id`, `category`, `user_name`, `subject`, `chapter`, `topic`, `page_source`, `created_at`, `updated_at`) VALUES
(15, 29, 'chapter', 'Member', 'react', 'jsx', NULL, NULL, '2022-04-05 00:02:24', '2022-04-05 00:02:24'),
(16, 6, 'topic', 'Member', 'php', 'array methods', 'in_array() method', '/storage/files/1649136796.Cv-Raju Jha.pdf', '2022-04-05 00:03:17', '2022-04-05 00:03:17'),
(18, 7, 'exam', 'Member', 'php', 'array methods', NULL, NULL, '2022-04-05 00:06:13', '2022-04-05 00:06:13'),
(19, 8, 'exam', 'Member', 'react', NULL, NULL, NULL, '2022-04-05 00:10:27', '2022-04-05 00:10:27'),
(20, 8, 'exam', 'Member', 'react', 'variables and states', NULL, NULL, '2022-04-05 00:10:28', '2022-04-05 00:10:28'),
(22, 30, 'chapter', 'Member', 'react', 'props', NULL, NULL, '2022-04-26 23:21:49', '2022-04-26 23:21:49');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'javascript', NULL, NULL),
(4, 'php', NULL, NULL),
(5, 'react', NULL, NULL),
(7, 'nodejs', '2022-03-23 17:38:45', '2022-03-23 17:38:45');

-- --------------------------------------------------------

--
-- Table structure for table `subject_chapters`
--

CREATE TABLE `subject_chapters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `chapter_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subject_chapters`
--

INSERT INTO `subject_chapters` (`id`, `subject_id`, `chapter_id`, `created_at`, `updated_at`) VALUES
(13, 1, 24, NULL, NULL),
(14, 4, 25, NULL, NULL),
(15, 5, 26, NULL, NULL),
(16, 7, 27, NULL, NULL),
(17, 4, 28, NULL, NULL),
(18, 5, 29, NULL, NULL),
(19, 5, 30, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subject_exams`
--

CREATE TABLE `subject_exams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `exam_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subject_exams`
--

INSERT INTO `subject_exams` (`id`, `subject_id`, `exam_id`, `created_at`, `updated_at`) VALUES
(3, 1, 3, NULL, NULL),
(4, 1, 4, NULL, NULL),
(5, 1, 5, NULL, NULL),
(6, 1, 6, NULL, NULL),
(7, 4, 7, NULL, NULL),
(8, 5, 8, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subject_topics`
--

CREATE TABLE `subject_topics` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subject_topics`
--

INSERT INTO `subject_topics` (`id`, `subject_id`, `topic_id`, `created_at`, `updated_at`) VALUES
(2, 1, 3, NULL, NULL),
(3, 4, 4, NULL, NULL),
(4, 5, 5, NULL, NULL),
(5, 4, 6, NULL, NULL),
(6, 7, 9, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

CREATE TABLE `topics` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `page_no` int(255) NOT NULL,
  `page_name` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `topics`
--

INSERT INTO `topics` (`id`, `page_no`, `page_name`, `status`, `created_at`, `updated_at`) VALUES
(3, 0, '1649051885.Cv-Raju Jha.pdf', 'active', '2022-04-04 00:28:05', '2022-04-04 23:34:26'),
(4, 0, '1649051930.Cv-Raju Jha.pdf', 'active', '2022-04-04 00:28:50', '2022-04-04 23:34:15'),
(5, 0, '/storage/files/1649106743.Cv-Raju Jha.pdf', 'active', '2022-04-04 15:42:24', '2022-04-05 00:12:53'),
(6, 0, '/storage/files/1649136796.Cv-Raju Jha.pdf', 'pending', '2022-04-05 00:03:17', '2022-04-05 00:03:17'),
(7, 2, '/storage/files/1649471056.Cv-Raju Jha.pdf', 'pending', '2022-04-08 20:54:16', '2022-04-08 20:54:16'),
(8, 2, '/storage/files/1649471161.Cv-Raju Jha.pdf', 'pending', '2022-04-08 20:56:01', '2022-04-08 20:56:01'),
(9, 2, '/storage/files/1649473497.Cv-Raju Jha.pdf', 'active', '2022-04-08 21:34:58', '2022-04-08 21:37:26');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'User', 'user@gmail.com', NULL, '$2y$10$sm7TPzGNnr/G.YBkbvLCmukDUNdZbrGT/IXqYEVSGx9i5BBi542Re', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `chapters`
--
ALTER TABLE `chapters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chapter_exams`
--
ALTER TABLE `chapter_exams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chapter_exams_chapter_id_foreign` (`chapter_id`),
  ADD KEY `chapter_exams_exam_id_foreign` (`exam_id`);

--
-- Indexes for table `chapter_topics`
--
ALTER TABLE `chapter_topics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chapter_topics_chapter_id_foreign` (`chapter_id`),
  ADD KEY `chapter_topics_topic_id_foreign` (`topic_id`);

--
-- Indexes for table `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exam_stats`
--
ALTER TABLE `exam_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `exam_stats_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `members_email_unique` (`email`);

--
-- Indexes for table `member_chapters`
--
ALTER TABLE `member_chapters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_chapters_member_id_foreign` (`member_id`),
  ADD KEY `member_chapters_chapter_id_foreign` (`chapter_id`);

--
-- Indexes for table `member_exams`
--
ALTER TABLE `member_exams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_exams_member_id_foreign` (`member_id`),
  ADD KEY `member_exams_exam_id_foreign` (`exam_id`);

--
-- Indexes for table `member_requests`
--
ALTER TABLE `member_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_requests_member_id_foreign` (`member_id`),
  ADD KEY `member_requests_request_id_foreign` (`request_id`);

--
-- Indexes for table `member_topics`
--
ALTER TABLE `member_topics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_topics_member_id_foreign` (`member_id`),
  ADD KEY `member_topics_topic_id_foreign` (`topic_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`) USING BTREE;

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subject_chapters`
--
ALTER TABLE `subject_chapters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject_chapters_subject_id_foreign` (`subject_id`),
  ADD KEY `subject_chapters_chapter_id_foreign` (`chapter_id`);

--
-- Indexes for table `subject_exams`
--
ALTER TABLE `subject_exams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject_exams_subject_id_foreign` (`subject_id`),
  ADD KEY `subject_exams_exam_id_foreign` (`exam_id`);

--
-- Indexes for table `subject_topics`
--
ALTER TABLE `subject_topics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject_topics_subject_id_foreign` (`subject_id`),
  ADD KEY `subject_topics_topic_id_foreign` (`topic_id`);

--
-- Indexes for table `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `chapters`
--
ALTER TABLE `chapters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `chapter_exams`
--
ALTER TABLE `chapter_exams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `chapter_topics`
--
ALTER TABLE `chapter_topics`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `exams`
--
ALTER TABLE `exams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `exam_stats`
--
ALTER TABLE `exam_stats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `member_chapters`
--
ALTER TABLE `member_chapters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `member_exams`
--
ALTER TABLE `member_exams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `member_requests`
--
ALTER TABLE `member_requests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `member_topics`
--
ALTER TABLE `member_topics`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `subject_chapters`
--
ALTER TABLE `subject_chapters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `subject_exams`
--
ALTER TABLE `subject_exams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `subject_topics`
--
ALTER TABLE `subject_topics`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `topics`
--
ALTER TABLE `topics`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chapter_exams`
--
ALTER TABLE `chapter_exams`
  ADD CONSTRAINT `chapter_exams_chapter_id_foreign` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`),
  ADD CONSTRAINT `chapter_exams_exam_id_foreign` FOREIGN KEY (`exam_id`) REFERENCES `exams` (`id`);

--
-- Constraints for table `chapter_topics`
--
ALTER TABLE `chapter_topics`
  ADD CONSTRAINT `chapter_topics_chapter_id_foreign` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`),
  ADD CONSTRAINT `chapter_topics_topic_id_foreign` FOREIGN KEY (`topic_id`) REFERENCES `topics` (`id`);

--
-- Constraints for table `exam_stats`
--
ALTER TABLE `exam_stats`
  ADD CONSTRAINT `exam_stats_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `member_chapters`
--
ALTER TABLE `member_chapters`
  ADD CONSTRAINT `member_chapters_chapter_id_foreign` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`),
  ADD CONSTRAINT `member_chapters_member_id_foreign` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`);

--
-- Constraints for table `member_exams`
--
ALTER TABLE `member_exams`
  ADD CONSTRAINT `member_exams_exam_id_foreign` FOREIGN KEY (`exam_id`) REFERENCES `exams` (`id`),
  ADD CONSTRAINT `member_exams_member_id_foreign` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`);

--
-- Constraints for table `member_requests`
--
ALTER TABLE `member_requests`
  ADD CONSTRAINT `member_requests_member_id_foreign` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`),
  ADD CONSTRAINT `member_requests_request_id_foreign` FOREIGN KEY (`request_id`) REFERENCES `requests` (`id`);

--
-- Constraints for table `member_topics`
--
ALTER TABLE `member_topics`
  ADD CONSTRAINT `member_topics_member_id_foreign` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`),
  ADD CONSTRAINT `member_topics_topic_id_foreign` FOREIGN KEY (`topic_id`) REFERENCES `topics` (`id`);

--
-- Constraints for table `subject_chapters`
--
ALTER TABLE `subject_chapters`
  ADD CONSTRAINT `subject_chapters_chapter_id_foreign` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`),
  ADD CONSTRAINT `subject_chapters_subject_id_foreign` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`);

--
-- Constraints for table `subject_exams`
--
ALTER TABLE `subject_exams`
  ADD CONSTRAINT `subject_exams_exam_id_foreign` FOREIGN KEY (`exam_id`) REFERENCES `exams` (`id`),
  ADD CONSTRAINT `subject_exams_subject_id_foreign` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`);

--
-- Constraints for table `subject_topics`
--
ALTER TABLE `subject_topics`
  ADD CONSTRAINT `subject_topics_subject_id_foreign` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`),
  ADD CONSTRAINT `subject_topics_topic_id_foreign` FOREIGN KEY (`topic_id`) REFERENCES `topics` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
