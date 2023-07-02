import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please type in your name'],
        unique:true
    },
    email: {
        type: String,
        required: [true, 'Please type in your email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please type in your password']
    },
    isAdmin: {
        type: Boolean,
        required: [true, 'Provide value true or false'],
        default: false
    }

},{
    timestamps: true
})

export default mongoose.model('User', userSchema)