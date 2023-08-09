-- CreateTable
CREATE TABLE `Purchase` (
    `id` VARCHAR(191) NOT NULL,
    `id_alumn` VARCHAR(191) NOT NULL,
    `id_course` VARCHAR(191) NOT NULL,
    `purchase_date` DATETIME(3) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
