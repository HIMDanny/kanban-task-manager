-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "columnId" INTEGER;

-- AlterTable
ALTER TABLE "Column" ADD COLUMN     "boardId" INTEGER;

-- AddForeignKey
ALTER TABLE "Column" ADD CONSTRAINT "Column_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE SET NULL ON UPDATE CASCADE;
