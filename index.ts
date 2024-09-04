import express, { type Express, type Request, type Response } from "express";
import http from "http";
import dotenv from "dotenv";
dotenv.config();

import * as db from "./loaders/db"

const app: Express = express();

app.use(express.json())

// 1st connect with local postgres

const data: {
    id: number | string;
    name?: string;
}[] = [
        {
            id: 1
        }
    ];

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Hi"
    })
});
app.post('/', async (req: Request, res: Response) => {
    const { name } = req.body;
    console.log(name);

    const result = await db.query("INSERT INTO USERS(name); RETURNING *;", [name]);
    console.log(result);

    return res.status(200).json({
        data
    })
});

app.post('/', (req: Request, res: Response) => {
    const { body } = req;
    console.log(body);

    return res.status(200).json({
        data
    })
});

const server = http.createServer(app);
const PORT = process.env.NODE_PORT || '3001';

server.listen(parseInt(PORT), () => {
    console.log("Server Listening on:", PORT);
});