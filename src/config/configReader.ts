import { readEnv } from '~/utils';
import { AppConfig } from './types';

export const appConfig: AppConfig = {
    app: {
        version: readEnv('APP_VERSION', 'v1.0.0'),
        name: readEnv('APP_NAME', 'Node-API'),
        port: readEnv('APP_PORT', 1314),
        environment: readEnv('NODE_ENV', 'dev'),
    },
    jwt: {
        accessSecretKey: readEnv('JWT_ACCESS_SECRET_KEY', 'default-access-secret'),
        refreshSecretKey: readEnv('JWT_REFRESH_SECRET_KEY', 'default-refresh-secret'),
        accessExpirationDays: readEnv('JWT_ACCESS_EXPIRATION_DAYS', 1 * 24 * 60 * 60), // 1 day
        refreshExpirationDays: readEnv('JWT_REFRESH_EXPIRATION_DAYS', 1 * 24 * 60 * 60), // 1 day
    },
    bcrypt: {
        saltRounds: readEnv('BCRYPT_SALT_ROUNDS', 10),
    },
    mapDatabase: {
        host: readEnv('DATABASE_HOST', 'localhost'),
        port: readEnv('DATABASE_PORT', 3306),
        user: readEnv('DATABASE_USERNAME', 'root'),
        password: readEnv('DATABASE_PASSWORD', 'QwertyuI'),
        database: readEnv('DATABASE_NAME', 'drizzle'),
        connectionLimit: readEnv('DATABASE_CONNECTION_LIMIT', 10),
        url: readEnv('DATABASE_URL', 'mysql://root:QwertyuI@localhost:3306/worthReads'),
    },
    role: {
        superAdmin: readEnv('ROLE_SUPER_ADMIN', 1),
        admin: readEnv('ROLE_ADMIN', 2),
        standardUser: readEnv('ROLE_STANDARD_USER', 3),
        spectator: readEnv('ROLE_SPECTATOR', 4),
    },
    status: {
        active: readEnv('STATUS_ACTIVE', 1),
        inactive: readEnv('STATUS_INACTIVE', -1),
    },
};