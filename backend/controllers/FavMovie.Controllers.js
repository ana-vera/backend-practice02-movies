import asyncHandler from "express-async-handler"
import FavMovie from "../models/FavMovie.Model.js"

const setFavMovie = asyncHandler( async (req,res)=>{

    const favMovie = await FavMovie.create({
        userId: req.user.id,
        movieId: req.body.movieId
    })

    res.status(200).json({favMovie})
} )

const getFavMovies = asyncHandler( async (req,res)=>{
    console.log(`The user is: ${req.user.name}`)
    console.log(`The user ID is: ${req.user.id}`)
    const favMovies = await FavMovie.find({ userId: req.user.id })
    if(favMovies.length===0) console.log("this is empty")
    res.status(200).json({favMovies})
})

export {
    setFavMovie,
    getFavMovies
}