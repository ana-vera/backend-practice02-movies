import express from 'express'
import protect from '../middleware/authMiddleware.js'
import {setMovie} from '../controllers/Movie.Controllers.js'

const router = express.Router()


router.post('/',setMovie)

export default router 