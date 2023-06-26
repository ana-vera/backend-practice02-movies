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
    const favMovies = await FavMovie.find({ userId: req.user.id })
    if(favMovies.length===0) console.log("this is empty")
    res.status(200).json({favMovies})
})

const deleteFavMovie = asyncHandler( async(req,res)=>{
    const favMovie = await FavMovie.findById(req.params.id)
    if(!favMovie){
        res.status(400)
        throw new Error('Cannot remove from favorites an unexisting movie')
    }
    await favMovie.deleteOne()
    res.status(200).json({id: req.params.id})
})

export {
    setFavMovie,
    getFavMovies,
    deleteFavMovie
}