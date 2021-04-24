//users - 1.name 2. email
//bank_accounts - 1. user_id 2. credit 3. cash
//operations_table - 1.from_user_id 2.to_user_id 3.operation_type 4.amount

//connect to the database
const mongoose = require ("mongoose")
const { string } = require("yargs")
mongoose.connect('mongodb://127.0.0.1:27017/blog-api', {
    useNewUrlParser:true, 
    useCreateIndex: true
})

//designing and defining the data
//define:
const Account = mongoose.model("Account", {
    id:{
        id:new mongoose.Types.ObjectId(),
        type:String,
    },
        credit:{
            type:Number
        },
        cash:{
            type:Number
        }
})
const User = mongoose.model("User", {
    name:{
        type:String,
        required:true
    },
        email:{
            type:String,
            required:true,
            lowercase:true
        }

})

const Operations_table = mongoose.model("Operations_table", {
    from_user_id:{
        user_id:mongoose.Types.ObjectId(),
        type:String,
        unique: true
    },
        to_user_id:{
        user_id:mongoose.Types.ObjectId(),
        type:String,
        unique: true
           
    },
        amount:{
            type:Number
        }
})
//Tester- 
const me = new User ({
    name:"Or",
    email:"or@mail.com"
})

me.save().then((me)=>{
    console.log(me)

}).catch((error)=>{
    console.log("Error!", error)
})

