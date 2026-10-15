const errorHandler = (err, req, res, next) =>{

    console.log(err);

    res.status(err.status || 500 ).json({

        success : true,
        message : err.message || "Somthing Went Wrong"
    })

    
}

export default errorHandler
