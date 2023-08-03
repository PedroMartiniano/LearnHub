-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_id_alumn_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_id_staff_fkey`;

-- AlterTable
ALTER TABLE `Users` MODIFY `id_alumn` VARCHAR(191) NULL,
    MODIFY `id_staff` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_id_alumn_fkey` FOREIGN KEY (`id_alumn`) REFERENCES `Alumn`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_id_staff_fkey` FOREIGN KEY (`id_staff`) REFERENCES `Staff`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
