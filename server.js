import express from "express";
import bodyParser from 'body-parser'
import fs from 'fs';
const app = express();
app.use(express.json());
const PORT = 6000;
app.use(bodyParser.urlencoded({ extended: false }))

  app.get("/", function (req, res){

  
  // function format (date) {  
  //     if (!(date instanceof Date)) {
  //       throw new Error('Invalid "date" argument. You must pass a date instance')
  //     }
  //       const year = date.getFullYear()
  //     const month = String(date.getMonth() + 1).padStart(2, '0')
  //     const day = String(date.getDate()).padStart(2, '0')
    
  //     return `${year}-${month}-${day}` 
  //   }
  
  //   const data= format(new Date('2023-4-17')) 
  //   console.log(data)
  
  //   fs.writeFile(`./backup/text-${data}.txt`, data, (err)=> {console.log( `Completed file${data}`)})

    res.send("<h1>TEXT DATE CREATIONI<h1>");
  });
  app.listen(PORT,()=>{
    console.log("Server is running on port 6000")
  })

