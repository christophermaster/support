var mysql = require('mysql');
require('dotenv').config({ path: process.cwd() + '\\src\\env\\config\\dev.env' })
/**
 * Autor: Christopher siverio
 * fecha: 17-07-2020
 */
export const dbConnection = () => {
    return mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_SCHEMA
    })
}