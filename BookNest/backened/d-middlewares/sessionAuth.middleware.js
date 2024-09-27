// 1. Authenticate using sessions

/* 
Upon login attach the object session.userEmail = email to 'request'
Upon logout destroy the object  = req.session.destroy((err)=> if(err) console.log(err)) ;
*/
export const authenticate = (req,res,next) =>
{
    if(req.session.userEmail)   next() ;
    else
    {
        // res.redirect('/login') ;
        res.send('not exists') ;
    }
}

