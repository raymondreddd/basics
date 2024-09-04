import pg, { QueryResult } from 'pg';
import dotenv from "dotenv";
dotenv.config();

const pool = new pg.Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    host: process.env.PG_HOST,
    port: 15628,
    database: process.env.PG_DB,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.PG_CERT,
    }
});

// Define types for text and params
type QueryParams = (string | number | boolean | null)[];

// Export the query function with type annotations
export const query = (text: string, params?: QueryParams): Promise<QueryResult> => pool.query(text, params);
