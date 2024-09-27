// 2. Authenticate using Cookies
export const authenticateCookie = (req,res,next)=>
{
    // If cookie exists then set it's value
    if(req.cookies.cookieName)
    {
        res.locals.cookieName = 'extra' ;
    }   
    // If not exists then make a new one
    else
    {
        res.cookie('cookieName' ,'cookieValue', {maxAge: 2*24*60*60*1000});
    }
    next() ;

}

    // How to delete cookie ? upon logout == > res.clearCookie('cookieName') ;
    