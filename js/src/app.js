import myServer from "./config/server.js";

const app = myServer();
const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server up and listening on ${port}`));
