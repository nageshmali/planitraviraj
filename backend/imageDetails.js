const mongoose = require("mongoose");

const ImageDetailsSchema = new mongoose.Schema(
    {
        image:String
    },
    {
        collection: "imageDetails",
    }
);

mongoose.model("ImageDetails", ImageDetailsSchema);