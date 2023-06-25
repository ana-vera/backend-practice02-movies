import mongoose from 'mongoose'

const favMovieSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Movie'
    }
})

export default mongoose.model('FavMovie', favMovieSchema)