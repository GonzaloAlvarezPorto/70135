import dotenv from "dotenv";

// const enviroment = 'PRODUCTION';

// dotenv.config({
//     path: enviroment === 'PRODUCTION' ? './.env.production' : './.env.development'
// });

// export default {
//     port: process.env.PORT,
//     mongoUrl: process.env.MONGO_URL,
//     adminName: process.env.ADMIN_NAME,
//     adminPassword: process.env.ADMIN_PASSWORD
// }


export const getVariables = (options) => {
    const enviroment = options.opts().mode;
    dotenv.config({
        path: enviroment === 'development' ? './.env.development' : './.env.production'
    })

    return {
        port: process.env.PORT,
        mongoUrl: process.env.MONGO_URL,
        adminName: process.env.ADMIN_NAME,
        adminPassword: process.env.ADMIN_PASSWORD
    }
}