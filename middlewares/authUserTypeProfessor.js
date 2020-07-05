const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {

    if(req.cookies.token === undefined){
        
        return res.redirect("/error/401")

    }else{
        const {token} = req.cookies;
        const decode = jwt.verify(token, process.env.JWT_KEY);

        if(decode.type === "Aluno"){
            
            return res.redirect("/error/401/aluno");

        }

        next();
    }
    
}