import { config } from 'dotenv';
config();

export const PORT = process.env.PORT;
export const MONGO_URL = process.env.MONGO_URL;
export const DOMINIO = process.env.DOMINIO;
export const EMAIL_APP=process.env.EMAIL_APP;
export const PASSWORD_APP=process.env.PASSWORD_APP;