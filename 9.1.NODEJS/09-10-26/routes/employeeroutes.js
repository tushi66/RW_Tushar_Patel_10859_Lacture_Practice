import express from 'express'
import { createEmployee , getEmployee , getEmployeeId , updateEmployee , deleteEmployee } from '../controllers/employeeController.js'
import employeeValidator from '../validators/employeeValidator.js'
import validate from '../validators/validate.js'


const employeeRouter = express.Router()

employeeRouter.post("/" , employeeValidator , validate ,  createEmployee)
employeeRouter.get("/" , getEmployee)
employeeRouter.get('/:id' , getEmployeeId)
employeeRouter.put('/' , updateEmployee)
employeeRouter.put('/:id' , updateEmployee)
employeeRouter.delete('/' , deleteEmployee)
employeeRouter.delete('/:id', deleteEmployee)

export default employeeRouter