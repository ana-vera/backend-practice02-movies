import asyncHandler from "express-async-handler"
import MovieModel from "../models/Movie.Model.js"

const setMovie = asyncHandler( async (req,res)=>{

    const movie = await MovieModel.create({
        adult: req.body.adult,
        backdrop_path: req.body.release_date,
        genre_ids: req.body.genre_ids,
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

export {
    setMovie
}