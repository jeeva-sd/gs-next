export interface Environment {
  [key: string]: string | undefined;
}

export interface AppInfo {
  version: string;
  name: string;
  port: number;
  environment: string;
}

export interface JwtConfig {
  accessSecretKey: string;
  refreshSecretKey: string;
  accessExpirationDays: number;
  refreshExpirationDays: number;
}

export interface BcryptConfig {
  saltRounds: number;
}

export interface DbConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  connectionLimit: number;
  url: string;
}

export interface GeneralConfig {
  allowedDomains: string;
}

export interface RoleConfig {
  superAdmin: number;
  admin: number;
  standardUser: number;
  spectator: number;
}

export interface StatusConfig {
  active: number;
  inactive: number;
}

export interface AppConfig {
  app: AppInfo;
  jwt: JwtConfig;
  bcrypt: BcryptConfig;
  mapDatabase: DbConfig;
  role: RoleConfig;
  status: StatusConfig;
}