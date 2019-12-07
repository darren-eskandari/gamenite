const mongoose = require('mongoose');

const Schema = mongoose.Schema; 


const eventSchema = new Schema({
    public: Boolean,
    name: {type: String, required: true},
    location: {type: String, required: true},
    displayName: String,
    imgUrl: String,
    startTime: String,
    endTime: String,
    guests: [{type: Schema.Types.ObjectId, ref: 'User'}],
    games: [ {type: Schema.Types.ObjectId, ref: 'Game'} ],

});



const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
