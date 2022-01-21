import jsonwebtoken from "jsonwebtoken";

const generatewebtoken=(id)=>{
    const token=jsonwebtoken.sign({id},"abcde",{expiresIn:"30d"})
    return token
}

export default generatewebtoken