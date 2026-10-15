import { body } from "express-validator";

const employeeValidator = [
    
    body("name").trim().notEmpty().withMessage("Name is Requires..."),
    body("email").isEmail().notEmpty().withMessage("Email is Requires..."),
    body("password").isLength({min:6}).withMessage("Passwords is Requires..."),
    body("gender").trim().notEmpty().withMessage("Gender is Requires..."),
    body("city").trim().notEmpty().withMessage("City is Requires..."),
    body("hobby").trim().notEmpty().withMessage("Hobby is Requires...")
]

export default employeeValidator;