import express from 'express';
import bodyParser from 'body-parser';
import PupukRoutes from "./routes/pupukRoute.js";
import BibitRoutes from "./routes/bibitRoute.js";

const app = express();

app.use(bodyParser.json());
app.use('/mobil', pupukRoutes);
app.use('/todos', bibitRoutes);

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
