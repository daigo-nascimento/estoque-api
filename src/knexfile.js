import dotenv from 'dotenv';
import {fileURLToPath} from 'node:url';

dotenv.config({ path: fileURLToPath(new URL('../.env', import.meta.url))});


export default {
    development :{
        client: 'mysql2', 
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations:{
            directory: './database/migrations'
        },
        seeds: {
        directory: './database/seeds/dev'
        },
    }
}