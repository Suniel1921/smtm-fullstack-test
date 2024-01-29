const mongoose = require ("mongoose");
const dbConnection = ()=>{
    try {
        mongoose.connect(process.env.DB_URL)
        console.log(`Datbase Conncted !`)
        
    } catch (error) {
        console.log(`Database Not Conneted ! ${error}`)
        
    }
}

module.exports = dbConnection;