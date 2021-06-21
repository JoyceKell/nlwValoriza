import express from "express";
const app = express();

app.get("/test", (request, response) => {
  return response.send("Olá Mundo");
});

app.post("/test-post", (request, response) => {
  return response.send("metodo post aq");
});

app.listen(3000, () => console.log("server is runing"));
