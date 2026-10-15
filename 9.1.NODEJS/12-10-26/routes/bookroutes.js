import express from 'express'
import { creatbook, getBooks, getBookById, updateBook, deleteBook } from '../controller/bookcontrollers.js' 
import bookValidator from '../validators/bookValidators.js';
import validate from '../validators/validate.js';

const bookRouter = express.Router()

bookRouter.post("/", bookValidator, validate, creatbook);
bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBookById);
bookRouter.put("/", updateBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/", deleteBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter

