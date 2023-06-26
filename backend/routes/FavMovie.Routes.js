import express from 'express'
import protect from '../middleware/authMiddleware.js'
import {setFavMovie, getFavMovies, deleteFavMovie} from '../controllers/FavMovie.Controllers.js'

const router = express.Router()

router.post('/', protect, setFavMovie)
router.get('/', protect, getFavMovies)
router.delete('/:id',protect,deleteFavMovie)

export default router 