import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please type in the name of the movie'],
    },
    genre_id: {
        type: Number,
        required: [true, 'Genre ID needed'],
    },
    description: {
        type: String,
        required: [true, 'Enter a small description of the movie']
    },
    image:{
        type: mongoose.Schema.Types.Buffer,
        required: true,
        ref: 'Image'
    }
})

export default mongoose.model('Movie', movieSchema)