import mongoose, { model } from 'mongoose'

const 

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagnosedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        age:Number,
        required:true
    },
    blood:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["M","F","O"],
        required:true
    },
    admitedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'

    }

},{timestamps:true})

export const Patient = mongoose.model('Patient',patientSchema)