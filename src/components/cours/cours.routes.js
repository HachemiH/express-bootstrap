import express from "express";
import {
  getCours,
  createCours,
  updateCours,
  deleteCours,
} from "./cours.controller.js";

const router = express.Router();

// Route pour récupérer tous les cours
router.get("/cours", getCours);

// Route pour créer un nouveau cours
router.post("/cours", createCours);

// Route pour mettre à jour un cours existant
router.put("/cours/:id", updateCours);

// Route pour supprimer un cours
router.delete("/cours/:id", deleteCours);

export default router;
