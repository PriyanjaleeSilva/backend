const mongoose = require('mongoose');

var Marks = mongoose.model('Marks', {
    course: { type: String },
    username: { type: String },
    fullname: { type: String },
    marks: { type: Number }
    
});

module.exports = { Course };