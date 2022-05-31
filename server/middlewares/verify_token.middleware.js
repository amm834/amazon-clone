import jwt from "jsonwebtoken";

export default function (req, res, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (!token) {
        res.json({
            success: false,
            message: 'Token not found'
        })
    }

    const isBearerExists = 'Bearer ';
    if (!token.startsWith(isBearerExists)) {
        res.json({
            success: false,
            message: 'Please provide json web token'
        })
    }
    token = token.slice(isBearerExists.length, token.length)
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            res.json({
                success: false,
                message: err.message
            })
        }

        req.body['decoded'] = decoded;
        next()
    })

}