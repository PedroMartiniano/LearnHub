/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Alumn` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `Staff` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Alumn_cpf_key` ON `Alumn`(`cpf`);

-- CreateIndex
CREATE UNIQUE INDEX `Staff_cpf_key` ON `Staff`(`cpf`);
