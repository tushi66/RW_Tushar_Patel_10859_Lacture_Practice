import employeemodel from "../model/employeemodel.js";
import bcrypt from 'bcrypt'

const makeHobbyArray = hobby =>{

    if(Array.isArray(hobby)) return hobby
    return hobby ? hobby.split(",").map((item)=> item.trim()) : [];

}

// Crreate em[ployee with hassing password]

export const createEmployee = async (req, res, next) =>{

    try{

        const {name, email, password, gender, city} = req.body;
        const hobby = makeHobbyArray(req.body.hobby)

        const hashedPassword  = await bcrypt.hash(password, 10 )

        const employee = await employeemodel.create({
            name,
            email,
            password:hashedPassword,
            gender,
            hobby,
            city,
            file:req.file ? req.file.filename : null
        })

         const result = employee.toObject()

        res.status(201).json({
            success:true,
            message:"Employee created Successfully.",
            data:result
        })

    }catch(err){

        next(err)
    }

}

// View All Employee + Search + Sort  + Pagination

export const getEmployee = async(req , res , next) => {
    try{
        
        const {search="" , sortBy="createdAt" , order="desc" , page=1 , limit=5} = req.query

        const allowedSort = ["name" , "email" , "city" , "createdAt"]

        const field = allowedSort.includes(sortBy) ? sortBy : "createdAt"

        const direction = order === "asc" ? 1 : -1;

        const pageNumber = Math.max(Number(page) , 1)

        const limitNumber = Math.min(Math.max(Number(limit) , 1) , 50)

        const filter = search ? {
            $or:[
                {name :{$regex:search , $option:"i"}},
                {email:{$regex:search , $option:"i"}},
                {city:{$regex:search , $option:"i"}}
            ]
        } : {};

        const skip = (pageNumber - 1) * limitNumber

        const [employee , total] = await Promise.all([
            employeemodel.find(filter).sort({[field]:direction}).skip(skip).limit(limitNumber) , 
            employeemodel.countDocuments(filter)
        ])

        res.json({
            sucess:true,
            total,
            page:pageNumber,
            totalPages:Math.ceil(total / limitNumber),
            data:employee
        })

    }catch(err){
        next(err)
    }
}


// View Single Employee

export const getEmployeeId = async(req , res , next) => {
    try{
        const employee = await employeemodel.findById(req.params.id).select("-password")

        if(!employee){
            return res.status(404).json({
                message:"Employee not found."
            })
        }

        res.json({
            success:true,
            data:employee
        })

    }catch(err){
        next(err)
    }
}

// Update Employee 


export const updateEmployee = async(req , res , next) => {
    try{
        const id = req.params.id || req.query.id

        if(!id){
            return res.status(400).json({
                message:"Employee id is required"
            })
        }

        const data = {...req.body}

        if(data.hobby) data.hobby = makeHobbyArray(data.hobby)

        if(data.password) data.password  = await bcrypt.hash(data.password , 10)

        if(req.file) data.file = req.file.filename

        const employee = await employeemodel.findByIdAndUpdate(id , data , {new:true , runValidators:true}).select("-password")

        if(!employee){
            return res.status(404).json({
                message:"Employee not found."
            })
        }

        res.json({
            success:true,
            message:"Employee updated successfully.",
            data:employee
        })

    }catch(err){
        next(err)
    }
}


// Delete Employee 


export const deleteEmployee = async(req , res , next) => {
    
    try{
        const id = req.params.id || req.query.id

        if(!id){
            return res.status(400).json({
                message:"Employee id is required"
            })
        }

        const employee = await employeemodel.findByIdAndDelete(id)

        if(!employee){
            return res.status(404).json({
                message:"Employee not found."
            })
        }

        res.json({
            success:true,
            message:"Employee deleted successfully.",
        })

    }catch(err){
        next(err)
    }

}