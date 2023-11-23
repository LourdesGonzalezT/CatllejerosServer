const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'Por favor, indica el nombre del evento'],
        },

        eventDate: {
            type: Date
        },


        description: {
            type: String,
            maxlength: [500, 'Has superado el máximo de caracteres (500)'],

        },

        image: {
            type: String,
            //TODO  default: '{https://res.cloudinary.com/duewvq0qa/image/upload/v1685439940/jaagt9jzd154emhmfncj.jpg}',
        }

    },
    {
        timestamps: true
    }
)

const Event = mongoose.model('Event', eventSchema)

module.exports = Event