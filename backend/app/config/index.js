const config = {
    app: {
        port: process.env.PORT || 8080,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/booklibrary"
    },
    jwt: {
        secret: process.env.JWT_SECRET || "booklibrary-secret-key",
        // secretReresh: process.env.JWT_SECRETRERESH || "wbchat-secret-reresh-key",
        tokenLife: process.env.JWT_LIFE || 86400, // 24h 
        // tokenLifeReresh: process.env.JWT_LIFE_RERESH || 20, // 24h 
	},
}
module.exports = config;