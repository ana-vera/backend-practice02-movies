import express from 'express'
import protect from '../middleware/authMiddleware.js'
import {getMovies, deleteMovie, setMovie, updateMovie} from '../controllers/Movie.Controllers.js'

const router = express.Router()

router.get('/',getMovies)
router.post('/',setMovie)
router.put('/:id', updateMovie)
router.delete('/:id', deleteMovie)

export default router 