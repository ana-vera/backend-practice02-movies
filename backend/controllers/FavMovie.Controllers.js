import asyncHandler from "express-async-handler"
import FavMovie from "../models/FavMovie.Model.js"

const setFavMovie = asyncHandler( async (req,res)=>{

    const favMovie = await FavMovie.create({
        user: req.user.id,
        movieId: req.body.movieId
    })

    res.status(200).json({favMovie})
} )

const showFavMovies = asyncHandler(async (req,res)=>{
    res.status(200).json({message: "show all favorite movies"})
})

export {
    setFavMovie,
    showFavMovies
}