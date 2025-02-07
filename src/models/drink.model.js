const mongoose = require('mongoose');


const drinkSchema = new mongoose.Schema(
    {
        name: String,
        expirydate: {type: String, unique: false},
        quantity: {type: Number, unique: false}, 
    },
     {
        versionKey: false,
        timestamps: true,
     }
     );

     const Drink = mongoose.model('Drink', drinkSchema);
     
     module.exports = Drink;