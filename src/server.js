import http from "http";

const startServer = (app) => {
  const server = http.createServer(app);
  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

export { startServer };
