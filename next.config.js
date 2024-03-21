/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        dbConfig: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'Cfvmb1aY6TEgSaPY', // @@@
            database: 'next-js-registration-login-example'
        },
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? `mongodb+srv://vermaanmol807:${password}@cluster0.hoblw19.mongodb.net/` // development api
            : 'http://localhost:3000/api' // production api
    }
}

module.exports = nextConfig