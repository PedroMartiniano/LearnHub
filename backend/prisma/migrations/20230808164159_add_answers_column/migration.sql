/*
  Warnings:

  - Added the required column `answers` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Test` ADD COLUMN `answers` VARCHAR(191) NOT NULL;
