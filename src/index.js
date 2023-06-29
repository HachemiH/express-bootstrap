import express from "express";
import routes from "./routes.js";
import startServer from "./server.js";

const app = express();

app.use("/", routes);

// Démarrer le serveur
startServer(app);
