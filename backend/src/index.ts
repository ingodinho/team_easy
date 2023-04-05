import express, { Application, Request, Response} from "express";
import cors from 'cors';
import morgan from "morgan";

const app: Application = express();

const PORT = process.env.PORT || 9000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// middlewares

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({origin: [FRONTEND_URL], credentials: true}));

app.get("/test", (_: Request, res: Response) => {
    res.status(200).send("Server running, test passed");
});

app.use((_, res: Response) => {
    res.status(404).send("Sorry, URL not found!");
});
app.listen(PORT, (): void => console.log("Server startet on Port: ", PORT));
