const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        cin: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        }
    });

    const Student = mongoose.model('Student', studentSchema);

    module.exports = Student;