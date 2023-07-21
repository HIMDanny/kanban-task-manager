/*
  Warnings:

  - A unique constraint covering the columns `[id,name]` on the table `Column` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "columnId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Column_id_name_key" ON "Column"("id", "name");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_columnId_status_fkey" FOREIGN KEY ("columnId", "status") REFERENCES "Column"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
