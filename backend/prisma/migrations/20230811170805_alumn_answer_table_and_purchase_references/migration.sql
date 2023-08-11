-- CreateTable
CREATE TABLE `AlumnAnswer` (
    `id` VARCHAR(191) NOT NULL,
    `id_alumn` VARCHAR(191) NOT NULL,
    `id_test` VARCHAR(191) NOT NULL,
    `alumn_answer` VARCHAR(191) NOT NULL,
    `is_right` BOOLEAN NOT NULL,
    `answer_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AlumnAnswer` ADD CONSTRAINT `AlumnAnswer_id_alumn_fkey` FOREIGN KEY (`id_alumn`) REFERENCES `Alumn`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlumnAnswer` ADD CONSTRAINT `AlumnAnswer_id_test_fkey` FOREIGN KEY (`id_test`) REFERENCES `Test`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchase` ADD CONSTRAINT `Purchase_id_alumn_fkey` FOREIGN KEY (`id_alumn`) REFERENCES `Alumn`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchase` ADD CONSTRAINT `Purchase_id_course_fkey` FOREIGN KEY (`id_course`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
