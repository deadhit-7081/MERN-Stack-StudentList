var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var studentSchema = require('../Models/Student');

//createStudent
router.post('/create-student',(req,res,next) =>{
    console.log(req);
    
    studentSchema.create(req.body,(error,data) =>{
        if(error){
            return next(error)
        }
        else{
            console.log(data);
            res.json(data);
        }
    })
});

//Read Student
router.get('/',(req,res) =>{
    studentSchema.find((error,data) =>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
});

//Getting single student
router.get('/edit-student/:id',(req,res,next)=>{
    studentSchema.findById(req.params.id,(error,data) =>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
});

//UpdateStudent
router.put('/update-student/:id',(req,res,next) =>{
    studentSchema.findByIdAndUpdate(req.params.id,{
        $set : req.body
    },(error,data) =>{
        if(error){
            return next(error);
            console.log(error);
        }
        else{
            res.json(data);
            console.log("Student updated successfully !");
        }
    })
});

//Delete Student
router.delete('/delete-student/:id',(req,res,next)=>{
    studentSchema.findByIdAndRemove(req.params.id,(error,data) =>{
        if(error){
            return next(error);
        }
        else{
            res.status(200);
            res.json({
                msg : data
            })
        }
    })
})

module.exports = router;