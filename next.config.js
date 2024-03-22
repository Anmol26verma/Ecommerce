/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        dbConfig: {
            host: 'localhost',
            port: 27017,
            user: 'vermaanmol807',
            password: 'PONAOJ9TgROKCbyK', // @@@
            database: 'mongodb://localhost:27017/login'
        },
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? `mongodb+srv://vermaanmol807:PONAOJ9TgROKCbyK@cluster0.oya8azt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` // development api
            : 'http://localhost:27017/login' // production api
            
    }
}

module.exports = nextConfig