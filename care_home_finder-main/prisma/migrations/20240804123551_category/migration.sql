-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "categoryname" TEXT NOT NULL,
    "categoryimage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryname_key" ON "Category"("categoryname");

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryimage_key" ON "Category"("categoryimage");
