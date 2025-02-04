const mongoose = require('mongoose');


const drinkSchema = new mongoose.Schema(
    {
        name: String,
        expirydate: {type: String, unique: true},
        quantity: {type: Number, unique: true}, 
    },
     {
        versionKey: false,
        timestamps: true,
     }
     );

     const Drink = mongoose.model('Drink', drinkSchema);
     
     module.exports = Drink;