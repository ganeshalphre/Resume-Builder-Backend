import OTP from "../Models/otp.js";
import User from "../Models/userModel.js";
import { bcryptPassword, comparePassword } from "../Utils/bcrypt.js";
import sendMail from "../Utils/mail.js";
import { createtoken } from "../Utils/token.js";

export const sendMailForVerification = async(req, res) => {
    const {email} = req.body;
    try {
        const otp = Math.floor(1000 + Math.random() * 9000);
        await sendMail(otp, email)
        const oneTimePassword = new OTP({
            otp,
        })
        await oneTimePassword.save();
        return res.json({success: true, msg: "OTP Sent Successfully"})
    } catch (error) {
        console.log({error});
        res.json({success: false, msg: "something went wrong", err: error})
    }
}

export const verifyOtp = async(req, res) => {
    const {otp} = req.body;
    try {
        const findOtp = await OTP.findOne({otp});
        console.log({findOtp})
        if(!findOtp) return res.json({success: false, msg: "Incorrect OTP"})
        if(findOtp.verified) return res.json({success: false, msg:"OTP Already Used"})
        await OTP.findByIdAndUpdate(findOtp, {verified: true})
        return res.json({success: true, msg: "Email Verified"})
    } catch (error) {
        res.json({success: false, msg: "something went wrong", err: error})
    }
}

export const signup = async (req, res) => {
    try {
        console.log(req.body);
        let {firstName, lastName, email, mobile, age, password} = req.body;
        const userFind = await User.findOne({email});
        console.log({userFind});
        if(userFind) {
            return res.json({success: false, msg: "Account Already Exist"})
        }
        password = await bcryptPassword(password);
        console.log({password});
        const user = new User({ firstName, lastName, email, mobile, age, password});
        await user.save();
        const token = await createtoken(user._id, email, mobile, password);
        console.log({token});
        return res.json({success: true, msg: "Account created successfully", token});
    } catch (error) {
        console.log({error});
        res.json({success: false, msg: "something wnt wrong", err: error})
    }
}

export const signin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const userFind = await User.findOne({email});
        if(!userFind) {
            return res.json({success: false, msg: "Account not exist create an account"})
        }
        const comparedPassword = await comparePassword(password, userFind.password);
        if(!comparedPassword) return res.json({success: false, msg: "Invalid Credentials"});
        const {id, mobile} = userFind;
        const token = await createtoken(id, email, mobile, password);
        return res.json({success: true, msg: "Login Success", token })
    } catch (error) {
        console.log({error})
        res.json({success: false, msg: "something wnt wrong", err: error})
    }
}

export const forgetPassword = async (req, res) => {}
export const resetPassword = async (req, res) => {}