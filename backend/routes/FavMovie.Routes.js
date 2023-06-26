import express from 'express'
import protect from '../middleware/authMiddleware.js'
import {setFavMovie, getFavMovies} from '../controllers/FavMovie.Controllers.js'

const router = express.Router()

router.post('/', protect, setFavMovie)
router.get('/', protect, getFavMovies)


export default router 