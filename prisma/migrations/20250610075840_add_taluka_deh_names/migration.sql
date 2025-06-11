/*
  Warnings:

  - You are about to drop the column `deh` on the `case` table. All the data in the column will be lost.
  - You are about to drop the column `taluka` on the `case` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Case` DROP COLUMN `deh`,
    DROP COLUMN `taluka`,
    ADD COLUMN `dehId` VARCHAR(191) NULL,
    ADD COLUMN `talukaId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Case` ADD CONSTRAINT `Case_talukaId_fkey` FOREIGN KEY (`talukaId`) REFERENCES `Taluka`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Case` ADD CONSTRAINT `Case_dehId_fkey` FOREIGN KEY (`dehId`) REFERENCES `Deh`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
