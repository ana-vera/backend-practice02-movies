import express from 'express'
import {getUsers, setUser, updateUser, deleteUser} from '../controllers/User.Controllers.js'

const router = express.Router()

router.get('/', getUsers)

router.post('/', setUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

export default router 