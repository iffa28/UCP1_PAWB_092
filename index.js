import express from 'express';
import bodyParser from 'body-parser';
import PupukRoutes from "./routes/pupukRoute.js";
import BibitRoutes from "./routes/bibitRoute.js";

const app = express();

app.use(bodyParser.json());
app.use('/pupuk', pupukRoutes);
app.use('/bibit', bibitRoutes);

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
