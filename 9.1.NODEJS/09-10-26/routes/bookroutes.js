import express from 'express'
import {createBook, getBooks, getBooksById, updateBook, deletebook } from '../controller/bookcontrollers.js' 
import bookValidator from '../validators/bookValidators.js';
import validate from '../validators/validate.js';

const bookRouter = express.Router()

bookRouter.post("/", bookValidator, validate, createBook);
bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBooksById);
bookRouter.put("/", updateBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/", deletebook);
bookRouter.delete("/:id", deletebook);

export default bookRouter

