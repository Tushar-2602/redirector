const test = (req,res,next)=>{
    res.json({
        statusCode:200,
        message:"server running fine"
    })
}

export {test}