-- CreateTable
CREATE TABLE "Column" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "color" BYTEA NOT NULL,

    CONSTRAINT "Column_pkey" PRIMARY KEY ("id")
);
