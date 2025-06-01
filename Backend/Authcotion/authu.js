import jwt from "jsonwebtoken"
// import valitaionModel from "../Schema/Validation";

export const authu = async (req, res, next) => {
    const { token } = req.cookies;
    try {
        if (!token) {
            return res.json({ success: false, message: "go to login" })
        }
        // console.log(token)

        const decode = jwt.verify(token, "nithishkumar")
        if (!decode.id) {
            res.json({ success: false, message: "invalide token playload" })
        } else {
            // const userExist = await valitaionModel.findById(decode.id)
            // if(!userExist){
            //     return res.status(404).json({ success: false, message: "user Not found" })
            // }
            req.body = req.body || {};
            req.body.UserId = decode.id;
            next()
        }
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


export const isAdmin = (req, res, next) => {
    if (req.role !== "admin") {
        return res.status(403).json({ success: false, message: "Access denied. Admins only." });
    }
    next();
};
