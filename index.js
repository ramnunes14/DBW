import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import session from 'express-session';
import formRoutes from './routes/formRoutes.js';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'seu-segredo',  
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  
  }));
app.use('/', formRoutes);  
app.use(routes);
app.listen(3000, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Server listening on PORT", 3000);
    }
});
