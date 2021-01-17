import myServer from "./config/server";

const app = myServer();
const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server up and running on port ${port}`));
