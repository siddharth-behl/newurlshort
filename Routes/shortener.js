import express from "express"
import pages from "../controllers/shortener.js"
import urldata from "../models/urlstore.js"
import RestrictToLoggedInUserOnly from "../middlewares/auth.js"


const port=2000
const router=express.Router()
//FAVICON.ICO REMOVER
router.get("/favicon.ico",(req,res)=>res.send(""))

//HOMEPAGE
router.get("/",RestrictToLoggedInUserOnly,pages.homepage_get)

//ANALYTICS
router.get("/analytics",RestrictToLoggedInUserOnly,pages.analytics)

//POST
router.post("/post",RestrictToLoggedInUserOnly,pages.homepage_post)

//WORKING OF URL SHORTENER
router.get("/:shortid",pages.siteopener)



export default router