const Database =  require('sqlite-async')

function execute(db) {
    //criar as tabelas do banco de dados
    db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            WHATSAPP TEXT,
            bio TEXT
        );    
        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
          
        );    
        CREATE TABLE IF NOT EXISTS classe_schadule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            classe_id INTERGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );   
        `)
}
module.exports = Database.open(__dirname + '/database.sqlite').then(execute);