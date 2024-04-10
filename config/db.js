const mongoose = require ('mongoose');

const DB = "mongodb+srv://shakyanischal1111:lVfaSyuTIoCyw2Dh@cluster0.6gj7g7x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB).then(()=>{
console.log('Database Connected successfully');
})
.catch((err)=>{
    console.log('Database Connection error',err);
})

