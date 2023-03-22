const mongoose = require('mongoose')
//if you are using mongoDB compass, you must use those options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000,
    family: 4,
}

const connect = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DATABASE_URL, options).then(() => {
        console.log('Database connect is success')
    }).catch((err) => {
        console.log(err)
        process.exit(1);
    })
}

module.exports = connect


