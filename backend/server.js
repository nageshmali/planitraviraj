const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

//////////////////////////////////////////////////////////////////
//Local 5000 Server
app.get("/",async (req,res) => {
    res.send("Success!!!!!");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    try {
        console.log(`Server is started and running on ${PORT}`)
    } catch (error) {
        console.log(error);
    }
})
//////////////////////////////////////////////////////////////

//MongoDb Connection

const mongoUrl = "mongodb+srv://planitreact:planitreact@cluster0.hchhdyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {console.log('MongoDB connected Succesfully..')})
.catch(e => console.log(e)) ;

// Importing Schema
require("./imageDetails");
const Images = mongoose.model("ImageDetails");


////////////////////////////////////////////////////////////////////////////


//multer

const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../src/images/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    }
  })

//Upload Image to DB
const upload = multer({ storage: storage })
app.post("/upload-image", upload.single("image"), async (req,res) => {
    console.log(req.body);
    const imageName = req.file.filename;
    try {
        await Images.create({ image : imageName });
        res.json({ status : "ok" });

    } catch (error) {
        res.json({ status : error });
    };
});


//Fetch Image from DB
app.get("/get-image", async (req,res) => {
    try {
        Images.find({}).then((data)=>{
            res.send({ status : "ok", data: data});
        });
    } catch (error) {
        res.json({ status : error});
    }
});





/////////////////////////////////////////////////////////////////////////
//facebook setup
