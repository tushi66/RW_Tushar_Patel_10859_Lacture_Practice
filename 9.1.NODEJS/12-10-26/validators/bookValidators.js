import { body } from "express-validator";

const bookValidator = [

    body("title").trim().notEmpty().withMessage("Title is required....."),
    body("author").trim().notEmpty().withMessage("Author is required....."),
    body("category").trim().notEmpty().withMessage("Category is required....."),
    body("price").trim().notEmpty().withMessage("Price is required....."),
    body("quantity").trim().notEmpty().withMessage("Quantity is required....."),

]

export default bookValidator