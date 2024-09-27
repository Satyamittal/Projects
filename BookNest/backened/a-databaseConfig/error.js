// This class manages all user errors
export class ApplicationError extends Error
{
    constructor(message,code)
    {
        super(message) ;
        this.code = code ;
    }
};
