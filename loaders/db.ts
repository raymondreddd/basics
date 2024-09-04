import { Pool } from 'pg';

export const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    host: process.env.PG_HOST,
    port: 15628,
    database: process.env.PG_DB
});

