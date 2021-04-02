const { MongoClient } = require("mongodb");
require('dotenv').config();
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = `mongodb+srv://${process.env.name}:${process.env.password}@cluster0.jkgb3.mongodb.net/test`;
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);