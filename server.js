import app from "./src/app.js";

const port = process.env.port; //process.env.port = porta pra produção.

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
