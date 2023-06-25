import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
    adult: {
        type: Boolean,
        required: [true, 'Specify if the movie is for mature audience only'],
    },
    backdrop_path:{
        type: String,
        required: [true, 'Please enter path for backdrop']
    },
    genre_ids: {
        type: [Number],
        required: [true, 'At least 1 Genre ID needed --> []'],
    },
    original_language: {
        type: String,
        required: [true, 'Type the language of the movie']
    },
    original_title: {
        type: String,
        required: [true, "Enter original title of the movie" ]
    },
    overview: {
        type: String,
        required: [true, 'Enter a small description of the movie']
    },
    popularity: {
        type: Number,
        required: [true, 'Enter popularity number']
    },
    poster_path:{
        type: String,
        required: [true, 'Enter the image pathway. Example: /vZloFAK7NmvMGKE7VkF5UHaz0I.jpg']
    },
    release_date:{
        type: String,
        required: [true, "enter release date"]
    },
    title: {
        type: String,
        required: [true, "enter title"]
    },
    video: {
        type: Boolean,
        required: [true, "video true or false"],
        default: false
    },
    vote_average: {
        type: Number,
        required: [true, "what is the average vote"]
    },
    vote_count: {
        type: Number,
        required: [true, "what is the vote count"]
    }


})

export default mongoose.model('Movie', movieSchema)