// server.js
const PORT = process.env.PORT || 3000;

const startServer = (app) => {
  app.listen(PORT, () => {
    console.log(`Serveur en écoute depuis le port ${PORT}`);
  });
};

export default startServer;
