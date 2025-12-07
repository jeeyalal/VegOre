// import express from "express"
// import {addFood} from "../controllers/foodController.js"
// import multer from "multer"

// const foodRouter = express.Router();

// //image storage engine

// const storage = multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,cb)=>{
//         return cb(null,`${Date.now()}${file.originalname}`)
//     }
        
// })


// const upload = multer({storage:storage})




// foodRouter.post("/add",upload.single("image"),addFood)


// export default foodRouter;
import express from "express";
import { addFood ,listFood,removeFood} from "../controllers/foodController.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const foodRouter = express.Router();

// ✅ Multer storage (SAFE for Windows)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

// ✅ Route
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;
