// imports
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// open sqlite database
export const openDatabase = async () => {
    return await open({
        filename: 'src/database.db',
        driver: sqlite3.Database
    });
};
