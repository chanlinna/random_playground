-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "identity" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "population" INTEGER,
    "capital" VARCHAR(100),
    "currency" VARCHAR(100),
    "national_animal" VARCHAR(100),
    "national_food" VARCHAR(100),
    "founded_year" INTEGER,
    "government_type" VARCHAR(100),
    "most_popular_profession" VARCHAR(100),
    "most_common_hobby" VARCHAR(100),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characteristics" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "characteristics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "country_characteristics" (
    "id" SERIAL NOT NULL,
    "country_id" INTEGER NOT NULL,
    "characteristic_id" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "country_characteristics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "question_text" TEXT NOT NULL,
    "question_type" VARCHAR(50) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question_options" (
    "id" SERIAL NOT NULL,
    "question_id" INTEGER NOT NULL,
    "option_text" VARCHAR(255) NOT NULL,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "question_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "option_characteristics" (
    "id" SERIAL NOT NULL,
    "option_id" INTEGER NOT NULL,
    "characteristic_id" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "option_characteristics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "characteristics_name_key" ON "characteristics"("name");

-- CreateIndex
CREATE UNIQUE INDEX "country_characteristics_country_id_characteristic_id_key" ON "country_characteristics"("country_id", "characteristic_id");

-- CreateIndex
CREATE UNIQUE INDEX "option_characteristics_option_id_characteristic_id_key" ON "option_characteristics"("option_id", "characteristic_id");

-- AddForeignKey
ALTER TABLE "country_characteristics" ADD CONSTRAINT "country_characteristics_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "country_characteristics" ADD CONSTRAINT "country_characteristics_characteristic_id_fkey" FOREIGN KEY ("characteristic_id") REFERENCES "characteristics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_options" ADD CONSTRAINT "question_options_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "option_characteristics" ADD CONSTRAINT "option_characteristics_option_id_fkey" FOREIGN KEY ("option_id") REFERENCES "question_options"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "option_characteristics" ADD CONSTRAINT "option_characteristics_characteristic_id_fkey" FOREIGN KEY ("characteristic_id") REFERENCES "characteristics"("id") ON DELETE CASCADE ON UPDATE CASCADE;
