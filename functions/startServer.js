export const start = (server, port) => {
  server.listen(port, () => {
    console.log(`Server listens on ${port}`);
  });
}