import express from 'express';
import bodyParser from 'body-parser';
import pupukRoutes from "./routes/pupukRoute.js";
import bibitRoutes from "./routes/bibitRoute.js";

const app = express();

app.use(bodyParser.json());
app.use('/bibit', bibitRoutes);
app.use('/pupuk', pupukRoutes);


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
