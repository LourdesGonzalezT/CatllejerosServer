const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportSchema = new Schema(
    {
        tittle: {
            type: String,
            trim: true,
            required: [true, 'Por favor, indica el nombre del evento'],
        },

        reportDate: {
            type: Date
        },

        information: {
            type: String,
        },

        reportImage: {
            type: String,
            //TODO  default: '{https://res.cloudinary.com/duewvq0qa/image/upload/v1685439940/jaagt9jzd154emhmfncj.jpg}',
        }

    },
    {
        timestamps: true
    }
)

const Report = mongoose.model('Report', reportSchema)

module.exports = Report
