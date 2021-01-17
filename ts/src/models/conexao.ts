import mongoose from "mongoose";

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.DB_HOST}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const conexao = mongoose.connect(uri, options);

export default conexao;
