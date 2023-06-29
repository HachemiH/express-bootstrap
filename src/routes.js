import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Le server fonctionne ! :D");
});

export default router;
