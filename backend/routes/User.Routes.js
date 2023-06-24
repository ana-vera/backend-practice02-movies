import express from 'express'
import protect from '../middleware/authMiddleware.js'
import {setUser, loginUser, updateUser, deleteUser} from '../controllers/User.Controllers.js'
import {showFavMovies} from '../controllers/FavMovie.Controllers.js'

const router = express.Router()

router.post('/register', setUser)

router.post('/login', loginUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

router.get('/my-favorites', protect, showFavMovies)

export default router 