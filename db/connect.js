const mongoose=require('mongoose');

// mongoose.connect(`${process.env.MONGO_URL}`)//so this is returning promise so we have to use async and await

const db=async()=>{
    try{
       await mongoose.set('strictQuery', true);
        await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log('Connection Established');
    }catch(error){
        console.log("Error while connecting DB",error);
    }

}

module.exports=db;//every js file has only one module.exports (for important connection or variable)
