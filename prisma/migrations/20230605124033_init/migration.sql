-- CreateTable
CREATE TABLE "UploadFileUtilsateur" (
    "id" SERIAL NOT NULL,
    "url" TEXT,
    "utilisateurId" INTEGER,

    CONSTRAINT "UploadFileUtilsateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT,
    "prenom" TEXT,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "bio" TEXT,
    "ecoleId" INTEGER,
    "styleId" INTEGER NOT NULL,
    "leconId" INTEGER NOT NULL,
    "rangId" INTEGER NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professeur" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT,
    "prenom" TEXT,
    "description" TEXT,
    "ecole" TEXT,
    "dateDeNaissance" TIMESTAMP(3) NOT NULL,
    "titreGagne" TEXT,
    "diplome" TEXT,
    "photo" TEXT[],
    "carriere" TEXT,

    CONSTRAINT "Professeur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ecole" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,

    CONSTRAINT "Ecole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Style" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "description" TEXT,
    "professeurId" INTEGER,

    CONSTRAINT "Style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rang" (
    "id" SERIAL NOT NULL,
    "place" INTEGER NOT NULL,
    "point" INTEGER NOT NULL,
    "styleId" INTEGER NOT NULL,
    "ecoleId" INTEGER NOT NULL,

    CONSTRAINT "Rang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Niveau" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "leconId" INTEGER NOT NULL,

    CONSTRAINT "Niveau_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeconFile" (
    "id" SERIAL NOT NULL,
    "file" TEXT[],
    "leconId" INTEGER NOT NULL,

    CONSTRAINT "LeconFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "description" TEXT,
    "leconId" INTEGER NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lecon" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "description" TEXT,
    "coursId" INTEGER,

    CONSTRAINT "Lecon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cours" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "description" TEXT,
    "niveauId" INTEGER NOT NULL,
    "styleId" INTEGER NOT NULL,
    "professeurId" INTEGER NOT NULL,
    "instrumentId" INTEGER NOT NULL,

    CONSTRAINT "Cours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instrument" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "description" TEXT,
    "utilisateurId" INTEGER,
    "professeurId" INTEGER,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Badge" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "point" INTEGER NOT NULL,
    "certifie" BOOLEAN NOT NULL,
    "niveauId" INTEGER NOT NULL,
    "leconId" INTEGER NOT NULL,
    "coursId" INTEGER NOT NULL,
    "utilisateurId" INTEGER,

    CONSTRAINT "Badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IconeBadge" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "badgeId" INTEGER NOT NULL,

    CONSTRAINT "IconeBadge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Abonnement" (
    "id" SERIAL NOT NULL,
    "expiration" TIMESTAMP(3) NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "abonnementPlanId" INTEGER NOT NULL,

    CONSTRAINT "Abonnement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbonnementPlan" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "plan" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "duree" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AbonnementPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Concours" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "localisation" TEXT NOT NULL,
    "prixEntrer" INTEGER NOT NULL,
    "prixGagne" INTEGER NOT NULL,
    "niveauId" INTEGER NOT NULL,
    "styleId" INTEGER NOT NULL,
    "instrumentId" INTEGER NOT NULL,

    CONSTRAINT "Concours_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Professeur_email_key" ON "Professeur"("email");

-- AddForeignKey
ALTER TABLE "UploadFileUtilsateur" ADD CONSTRAINT "UploadFileUtilsateur_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_leconId_fkey" FOREIGN KEY ("leconId") REFERENCES "Lecon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_rangId_fkey" FOREIGN KEY ("rangId") REFERENCES "Rang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_ecoleId_fkey" FOREIGN KEY ("ecoleId") REFERENCES "Ecole"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Style" ADD CONSTRAINT "Style_professeurId_fkey" FOREIGN KEY ("professeurId") REFERENCES "Professeur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rang" ADD CONSTRAINT "Rang_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rang" ADD CONSTRAINT "Rang_ecoleId_fkey" FOREIGN KEY ("ecoleId") REFERENCES "Ecole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Niveau" ADD CONSTRAINT "Niveau_leconId_fkey" FOREIGN KEY ("leconId") REFERENCES "Lecon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeconFile" ADD CONSTRAINT "LeconFile_leconId_fkey" FOREIGN KEY ("leconId") REFERENCES "Lecon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_leconId_fkey" FOREIGN KEY ("leconId") REFERENCES "Lecon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lecon" ADD CONSTRAINT "Lecon_coursId_fkey" FOREIGN KEY ("coursId") REFERENCES "Cours"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cours" ADD CONSTRAINT "Cours_niveauId_fkey" FOREIGN KEY ("niveauId") REFERENCES "Niveau"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cours" ADD CONSTRAINT "Cours_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cours" ADD CONSTRAINT "Cours_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cours" ADD CONSTRAINT "Cours_professeurId_fkey" FOREIGN KEY ("professeurId") REFERENCES "Professeur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instrument" ADD CONSTRAINT "Instrument_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instrument" ADD CONSTRAINT "Instrument_professeurId_fkey" FOREIGN KEY ("professeurId") REFERENCES "Professeur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_niveauId_fkey" FOREIGN KEY ("niveauId") REFERENCES "Niveau"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_leconId_fkey" FOREIGN KEY ("leconId") REFERENCES "Lecon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_coursId_fkey" FOREIGN KEY ("coursId") REFERENCES "Cours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IconeBadge" ADD CONSTRAINT "IconeBadge_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "Badge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abonnement" ADD CONSTRAINT "Abonnement_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abonnement" ADD CONSTRAINT "Abonnement_abonnementPlanId_fkey" FOREIGN KEY ("abonnementPlanId") REFERENCES "AbonnementPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concours" ADD CONSTRAINT "Concours_niveauId_fkey" FOREIGN KEY ("niveauId") REFERENCES "Niveau"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concours" ADD CONSTRAINT "Concours_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concours" ADD CONSTRAINT "Concours_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
