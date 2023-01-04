const mongoose=require('mongoose');//defining model


//Schema define=>fields which are you defining
const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobileNumber:{
        type:String,
        required:true,
        unique:true 
    },
    address:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    profession:{
        type:String
        // required:true
    }
})
//Model creation using schema defined

mongoose.exports=mongoose.model('Employees',employeeSchema);
//difference between collection and document
//Collection:Similar to table,multiple documents in a object
//Document:one object is called document
