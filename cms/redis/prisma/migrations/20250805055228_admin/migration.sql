/*
  Warnings:

  - Added the required column `adminId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Question" ADD COLUMN     "adminId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."admin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "public"."admin"("email");

-- AddForeignKey
ALTER TABLE "public"."Question" ADD CONSTRAINT "Question_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "public"."admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
