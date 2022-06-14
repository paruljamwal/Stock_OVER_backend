const mongoose = require("mongoose");
module.exports=()=>{
    return mongoose.connect(
      `mongodb+srv://Parul:Parul@cluster0.qqdnm.mongodb.net/Products?retryWrites=true&w=majority`
    );
       
}

   
  