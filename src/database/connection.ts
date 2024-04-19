import { drizzle } from 'drizzle-orm/mysql2';
import mysql, { Pool } from 'mysql2/promise';
import { appConfig } from '~/config';
import { schema } from './schema';

export class MapDatabase {
    private static instance: MapDatabase;
    private poolConnection: Pool;

    private constructor() {
        const { host, user, port, password, database, connectionLimit } = appConfig.mapDatabase;
        this.poolConnection = mysql.createPool({ host, port, user, password, database, connectionLimit });
    }

    public static getInstance(): MapDatabase {
        if (!MapDatabase.instance) {
            MapDatabase.instance = new MapDatabase();
        }

        return MapDatabase.instance;
    }

    public getDB() {
        return drizzle(this.poolConnection, { schema, mode: 'default' });
    }

    public async closeConnections(): Promise<void> {
        if (MapDatabase.instance) {
            console.log('Closing db connections...');
            await this.poolConnection.end();
        }
    }
}

export const db = MapDatabase.getInstance().getDB();
