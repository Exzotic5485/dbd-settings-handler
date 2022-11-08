const Keyv = require('keyv');
const path = require('path')

let db;

module.exports = {
    init(keyvAdapter) {
        db = new Keyv(keyvAdapter || "sqlite://" + path.join(__dirname, "/database.sqlite"));

        db.on('error', err => console.error('Keyv connection error:', err));

        console.log("[DBD-Settings-Handler] Database initialized!");
    },
    getDB() {
        if(!db) throw new Error("Database not initialized");
        
        return db;
    }
}