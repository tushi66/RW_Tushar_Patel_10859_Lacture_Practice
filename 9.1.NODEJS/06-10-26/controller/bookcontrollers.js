import BookSchema from '../model/bookmodel.js'

// Book iNsert

export const creatbook = async(req , res , next) =>{
    try {

        const book = await BookSchema.create(req.body)

        res.status(201).json({
            success: true,
            message: "Book Created Successfyully",
            data:book
        })

    }catch(err){
        next(err)
    }
}

// view all book + search + sort + pagination

export const getBooks = async(req, res, next) =>{

    try{

        const {search="", sortBy="createdAt",order="desc", page=1, limit=5} = req.body

        const allowedSort = ["title", "author", "price", "category", "createdAt"];

        const field = allowedSort.includes(sortBy) ? sortBy:"createdAt"
        
        const direction = order === "asc" ? 1: -1;  

        const pageNumber = Math.max(Number(page),1)

        const limitNumber = Math.min(Math.max(Number(limit),1),50)

        const filter = search ? {
            $or:[
                {title:{$regex:search, $option:"i"}},
                {author:{$regex:search, $option:"i"}},
                {category:{$regex:search, $option:"i"}}
            ]
        } : {};

        const skip = (pageNumber-1) * limitNumber

        const [books, total] = await Promise.all([
            BookSchema.find(filter).sort({[field]:direction}).skip(skip).limit(limitNumber),
            BookSchema.countDocument(filter)
        ])


        res.json({
            sucess:true,
            total,
            page:pageNumber,
            totalPages:Math.ceil(total / limitNumber),
            data:books
        })


    }catch(err){
        next(err)
    }


}

// Single View Books VIew 

export const getBookByID = async (req, res, next) =>{

    try{
        const book = await BookSchema.findById(req.params.id)

        if(!id){
            return res.status(404).json({meesage: "Books Not Founds...."})
        }


        res.json({success:true, data:book})


    }catch(err){
        next(err);
    }
}

// Updatred Book by ID

export const updateBook = async(req, res, next) => {

    try{

        const id = req.params.id || req.query.id 

        if(!id){
            
            return res.status(400).json({message:"Book id is required."})

        }

        const book = await BookSchema.findByIdAndUpdate(id, req.body , {new:true, runValidators:true})

        if(!book){

            return res.status(404).json({message:"Book not found."})

        }

        
        res.json({
            success:true,
            message:"Book updated successfully.",
            data:book
        })


    }catch(err){

        next(err)

    }

}


// Deleted Book 


export const deleteBook = async(req , res , next) => {
    try{

        const id = req.params.id || req.query.id

        if(!id){
            return res.status(400).json({message:"Book id is required."})
        }

        const book = await Book.findByIdAndDelete(id)

        if(!book){
            return res.status(404).json({message:"Book not found."})
        }

        res.json({
            success:true,
            message:"Book deleted successfully.",
        })

    }catch(err){
        next(err)
    }
}