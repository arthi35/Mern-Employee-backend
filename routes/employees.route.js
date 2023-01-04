//For implementing routes we have to use express
const express=require('express');
const Employees=require('../model/employees.model');
const router=express.Router();//For all routes we have to implement this one package

//initialize by using route
//to get all employess
 router.get ('/employees',(req,res)=>{
try{
Employees.find((err,data)=>{
    if(err){
        return res.status(400).send({message:"Error while retrieving employee detail"})
    }
    return res.status(200).send(data);//return keyword=>if there is a error means it will come outside thaat's why we are not using return keyword
})
    
}catch(error){
    // console.log(error)
res.status(500).send({message:"Internal Server Error"}) 
}
});

//To get single employees

router.get('/employees/:empID',(req,res)=>{
try{
Employees.findOne({_id:req.params.empID},(err,data)=>{
    if(err){
        return res.status(400).send({message:"Error while retrieving employee detail"})
    }
    return res.status(200).send(data);//return keyword=>if there is a error means it will come outside thaat's why we are not using return keyword
})
    
}catch(error){
    // console.log(error)
    res.status(500).send({message:"Internal Server Error"})
}
});

// //to add new employee
router.post('/employees', (req, res) => {
    try{
        const data = req.body;
        const employee = new Employees(data);
        employee.save((err, data) => {
            if(err){
                return res.status(400).send({message: 'Error while creating a new employee.'});
            }

            return res.status(201).send({id: data._id, message: 'Employee has been created successfully.'})
        })

    }catch(error){
       res.status(500).send({message: 'Internal Server Error'}); 
    }
});


// //to update an existing employee
router.put('/employees/:empID',(req,res)=>{
    try{
        const employeeID=req.params.empID;
        Employees.findByIdandUpdate({_id:employeeID},{$set:req.body},(err,data)=>{
            if(err){
                return res.status(400).send({message:"Error while updating employee"});
            }
            return res.status(201).send({id:data._id,message:"Employee details have been updated successfully"})
        })
    }catch(error){
        res.status(500).send({message:"Internal server error"})
    }
})


// //to delete an employee
router.delete('/employees/:empID',(req,res)=>{
    try{
        const employeeID=req.params.empID;
        Employees.deleteOne({_id:employeeID},{$set:req.body},(err,data)=>{
            if(err){
                return res.status(400).send({message:"Error while updating employee"});
            }
            return res.status(201).send({id:data._id,message:"Employee details have been updated successfully"})
        })
    }catch(error){
        res.status(500).send({message:"Internal server error"})
    }
});
// router.get('/employees', (req, res) => {
//     try{
//         const { email } = req.query;
        
//         if(email){
//             Employees.find({email}, (err, data) => {
//                 if(err){
//                     return res.status(400).send({message: 'Error while retrieving employees details.'});
//                 }
    
//                 return res.status(200).send(data);
    
//             })
//         }else{
//             Employees.find((err, data) => {
//                 if(err){
//                     return res.status(400).send({message: 'Error while retrieving employees details.'});
//                 }
    
//                 return res.status(200).send(data);
    
//             })
//         }

        
//     }catch(error){
//         res.status(500).send({message: 'Internal Server Error'});
//     }
// });

//To get a single employee details
// router.get('/employees/:empID', (req, res) => {
//     try{
//         Employees.findOne({_id: req.params.empID},(err, data) => {
//             if(err){
//                 return res.status(400).send({message: 'Error while retrieving an employee details.'});
//             }

//             return res.status(200).send(data);

//         })
//     }catch(error){
//         res.status(500).send({message: 'Internal Server Error'});
//     }
// });


//To add a new employee
// router.post('/employees', (req, res) => {
//     try{
//         const data = req.body;
//         const employee = new Employees(data);
//         employee.save((err, data) => {
//             if(err){
//                 return res.status(400).send({message: 'Error while creating a new employee.'});
//             }

//             return res.status(201).send({id: data._id, message: 'Employee has been created successfully.'})
//         })

//     }catch(error){
//         res.status(500).send({message: 'Internal Server Error'});
//     }
// });

//To update an existing employee
// router.put('/employees/:empID', (req, res) => {
//     try{
//         const employeeID = req.params.empID;
//         Employees.findByIdAndUpdate({_id: employeeID}, {$set: req.body}, (err, data) =>{
//             if(err){
//                 return res.status(400).send({message: 'Error while updating an employee.'});
//             }

//             return res.status(201).send({id: data._id, message: 'Employee details have been updated successfully.'})
//         })

//     }catch(error){
//         res.status(500).send({message: 'Internal Server Error'});
//     }
// });

//To delete an employee
// router.delete('/employees/:empID', (req, res) => {
//     try{
//         const employeeID = req.params.empID;
//         Employees.deleteOne({_id: employeeID}, (err, data) => {
//             if(err){
//                 return res.status(400).send({message: 'Error while deleting an employee.'})
//             }

//             return res.status(200).send({message: 'Employee details have been deleted successfully.'})
//         })
//     }catch(error){
//         return res.status(500).send({message: 'Internal Server Error'});
//     }
// });


module.exports=router;