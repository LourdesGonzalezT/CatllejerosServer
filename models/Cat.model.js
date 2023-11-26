const { Schema, model } = require("mongoose");

const catSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Por favor, indica el nombre del gatete'],
    },

    age: {
      type: String
    },

    sex: {
      type: String,
      required: [true, 'Por favor, indica el sexo del gatete'],
      enum: ['macho', 'hembra'],
    },

    aboutCat: {
      type: String,
      maxlength: [500, 'Has superado el máximo de caracteres (500)'],
    },

    image1: {
      type: String,
      //TODO  default: '{https://res.cloudinary.com/duewvq0qa/image/upload/v1685439940/jaagt9jzd154emhmfncj.jpg}',
    },

    image2: {
      type: String,
      //TODO  default: '{https://res.cloudinary.com/duewvq0qa/image/upload/v1685439940/jaagt9jzd154emhmfncj.jpg}',
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Cat = model("Cat", catSchema);

module.exports = Cat;
