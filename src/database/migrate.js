import fs from 'fs';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { drizzle } from 'drizzle-orm/mysql2';

const environment = process?.env?.NODE_ENV ? `.${process.env.NODE_ENV.trim()}.env` : '.env';

if (fs.existsSync(environment)) {
    console.log(`Loading variables from ${environment}`);
    dotenv.config({ path: environment });
}
else console.log(`'${environment}' not found. Loading fallback...`);

(async () => {
    let connection = null;

    try {
        const host = process.env.DATABASE_HOST;
        const user = process.env.DATABASE_USERNAME;
        const port = process.env.DATABASE_PORT;
        const password = process.env.DATABASE_PASSWORD;
        const database = process.env.DATABASE_NAME;

        connection = mysql.createPool({ host, user, port, password, database, connectionLimit: 1 });

        const db = drizzle(connection);
        await migrate(db, { migrationsFolder: './migrations' });
        console.log('Migration done!');
    }
    catch (error) {
        console.error('Migration failed:', error);
    }
    finally {
        connection?.end();
    }
})();
