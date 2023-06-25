import express from 'express'
import protect from '../middleware/authMiddleware.js'
import {setFavMovie} from '../controllers/FavMovie.Controllers.js'
import {setMovie} from '../controllers/Movie.Controllers.js'

const router = express.Router()

router.post('/',setMovie)
router.post('/setFavMovie', protect, setFavMovie)

export default router 