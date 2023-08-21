-- CreateTable
CREATE TABLE "Alumn" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "regis_date" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Alumn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "regis_date" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "id_alumn" TEXT,
    "id_staff" TEXT,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Module" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "id_course" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answers" TEXT NOT NULL,
    "right_answer" TEXT NOT NULL,
    "id_module" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlumnAnswer" (
    "id" TEXT NOT NULL,
    "id_alumn" TEXT NOT NULL,
    "id_test" TEXT NOT NULL,
    "alumn_answer" TEXT NOT NULL,
    "is_right" BOOLEAN NOT NULL,
    "answer_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AlumnAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "id_alumn" TEXT NOT NULL,
    "id_course" TEXT NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alumn_cpf_key" ON "Alumn"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_cpf_key" ON "Staff"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_id_alumn_fkey" FOREIGN KEY ("id_alumn") REFERENCES "Alumn"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_id_staff_fkey" FOREIGN KEY ("id_staff") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_id_module_fkey" FOREIGN KEY ("id_module") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumnAnswer" ADD CONSTRAINT "AlumnAnswer_id_alumn_fkey" FOREIGN KEY ("id_alumn") REFERENCES "Alumn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumnAnswer" ADD CONSTRAINT "AlumnAnswer_id_test_fkey" FOREIGN KEY ("id_test") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_id_alumn_fkey" FOREIGN KEY ("id_alumn") REFERENCES "Alumn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
