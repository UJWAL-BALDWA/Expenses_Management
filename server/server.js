import  express  from "express";
import mongoose from 'mongoose';
import cors from "cors";

const PORT = 4000
const app = express();
app.use(cors)

await mongoose.connect(
  "mongodb+srv://Expenses_Management:7022874220@cluster0.ssnowxu.mongodb.net/?retryWrites=true&w=majority"
);
console.log("MongoDb Connection is Succesfully Done")

app.get('/' , (req , res) =>{
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log('server is running at port http://localhost:4000')
})