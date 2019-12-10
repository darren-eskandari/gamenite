const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    displayName: {type: String, unique: true},
    imgUrl: String,
    location: String,
    dob: String,
    phone: String,
    bio: String,
    library: [ {type: Schema.Types.ObjectId, ref: 'Game'} ],
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
    friendRequests: [{type: Schema.Types.ObjectId, ref: 'User'}],
    events: [{type: Schema.Types.ObjectId, ref: 'Event'}],
    uid: String
});


const User = mongoose.model('User', userSchema);

module.exports = User;
