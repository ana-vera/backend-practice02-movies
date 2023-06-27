import asyncHandler from "express-async-handler"
import Movie from "../models/Movie.Model.js"



const getMovies = asyncHandler( async (req,res)=>{
    const tareas = await Movie.find()
    res.status(200).json(tareas)
})

const setMovie = asyncHandler( async (req,res)=>{

    const movie = await MovieModel.create({
        adult: req.body.adult,
        backdrop_path: req.body.release_date,
        genre_ids: req.body.genre_ids,
        id: req.body.id,
        original_language: req.body.original_language,
        original_title: req.body.original_title,
        overview: req.body.overview,
        popularity: req.body.popularity,
        poster_path: req.body.poster_path,
        release_date: req.body.release_date,
        title: req.body.title,
        video: req.body.video,
        vote_average: req.body.vote_average,
        vote_count: req.body.vote_count
    })

    res.status(200).json({movie})
} )

const updateMovie = asyncHandler ( async (req,res)=>{

    const movie = await Movie.findById(req.params.id)
    if (!movie){
        res.status(400)
        throw new Error('Movie not found')
    }

    const movieUpdated = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true} )

    res.status(200).json({movieUpdated})
})

const deleteMovie = asyncHandler(async (req,res)=>{

    const movie = await Movie.findById(req.params.id)
    if(!movie){
        res.status(400)
        throw new Error('Movie not found')
    }
    await movie.deleteOne()
    res.status(200).json({id: req.params.id})
})

export {
    getMovies,
    setMovie,
    updateMovie,
    deleteMovie
}