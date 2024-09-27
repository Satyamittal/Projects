// All configurations about mongoDB.js
import { MongoClient } from "mongodb";
import * as iModules from '../e-modules/internal-modules.js' ;

/* Connnect to database */
/* Connection variable */
let client = null; // Changed from 'const' to 'let' for reassignment

/* Connect to MongoDB */
export const connectToMongodb = () => {
    if (!process.env.url) {
        throw new iModules.ApplicationError('Database URL not provided', 400); // Handle missing URL
    }

    return MongoClient.connect(process.env.url)
        .then(clientInstance => {
            client = clientInstance; // Reassign the connected client
            console.log('MongoDB is connected');
        })
        .catch(err => {
            console.error('Error connecting to MongoDB:', err.message); // Log the error for debugging
            throw new iModules.ApplicationError(err.message, 400); // Pass error message to ApplicationError
        });
};
/* 
One address may have multiple servers
Connect to particular database
*/
export const getDB = ()=>
{
    return client.db();
}


// Write all useful commands of mongodb here..