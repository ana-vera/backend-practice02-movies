import express from 'express'
import protect from '../middleware/authMiddleware.js'
//import {setFavMovie} from '../controllers/FavMovie.Controllers.js'

const router = express.Router()

//router.post('/', setFavMovie)

export default router 