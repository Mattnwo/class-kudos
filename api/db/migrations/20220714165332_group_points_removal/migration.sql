/*
  Warnings:

  - You are about to drop the `GroupPoint` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GroupPoint" DROP CONSTRAINT "GroupPoint_groupId_fkey";

-- DropForeignKey
ALTER TABLE "GroupPoint" DROP CONSTRAINT "GroupPoint_userId_fkey";

-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "groupPoints" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "GroupPoint";
