/* 4. JWT Token authentication

-  This token is divided in 3 parts , Header , payload & signature.
-  This could be decoded at `jwt.io` website.
-  Sensitive data like password should not be stored in "payload".

# Process

- # Login with credentials
- # Server creates a token and send back to client.
- # User sent token in "auth Header". And server verifies it , and send response.

*/
import jwt from 'jsonwebtoken' ;

// Make a JWT Token after login in controller function
const token = jwt.sign(
    {
        userId: id,
        email:email
    },
    'Secret-Key',{expiresIn:'1h'}
);

// Send this token = res.send(token) ;

// verify the token
export const JWTverifier = (req,res,next)=>
    {
        const token = req.headers['authorization'];

        if(!token)
            {
                return res.status(401).send('Unauthorized');
            }
        try
        {
            const payload = jwt.verify(token,'Secret-Key') 
            // const {userId,email} = payload ;
        }
        catch(err)
        {
            // unauthorized
        }
        next() ;
    }
