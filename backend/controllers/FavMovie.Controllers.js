import asyncHandler from "express-async-handler"
import FavMovieModel from "../models/FavMovie.Model.js"

const setFavMovie = asyncHandler( async (req,res)=>{

    const favMovie = await FavMovieModel.create({
        user: req.body.user.id,
        movie: req.body.movie.id
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