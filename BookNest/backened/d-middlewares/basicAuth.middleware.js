/* 3. Basic Authentication

- In this client sent credentials like username & email on every request.
- And server each time verify the credentials.
*/
export const basicAuthenticator = (req,res,next)=>
    {
        const authHeader = req.headers['authorization'];
        if(!authHeader) return res.send('No authorization') ;
        const credentials = authHeader.replace('Basic','');
        
        // [username:password]
        const decodedAns = Buffer.from(credentials,'base64').toString('utf8');
        const creds =decodedAns.split(':');
    
        // match username & password with database
        const matched = true ;
    
        if(matched) next();
        res.status(400).send('Incorrect credentials') ;
    }
    