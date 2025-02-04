const Drink = require('../models/drink.model');


exports.save_drink = async (req,res) => {
    const {name, expirydate, quantity} = req.body;
    console.log('im here');

    try {
        const saveDrink = new Drink({name, expirydate, quantity});
        await saveDrink.save();
        return res
        .status(201)
        .json({
            success: true,
            message: "Drink saved successfully",
            data: saveDrink
          });
    } catch (err) {
        console.log(err);
        return res.status(500).json({success: false, message: err.message});
        }
    };

    exports.get_drink = async (req,res) => {
        try {
            const drinks = await Drink.find();
            return res.json({
                success: true,
                message: "Drinks fetched successfully",
                data: drinks,
                count: drinks.length,
            });
        } catch (err) {
            console.log(err);
            return res.status(404).json({success: false, message: err.message});
            }
    };

    exports.update_drink = async (req, res) => {
        const {name, expirydate, quantity} = req.body;
        try {
            const updatedDrink = await Drink.findByIdAndUpdate(
                {_id: req.params.id},
                {name, expirydate, quantity},
                {isNew: true}
            );
            return res.status(200).json({message: "Drink updated succssfully", data: updatedDrink});
        } catch (err) {
            console.log(err);
            return res.status(500).json({success: false, message: err.message});
            
        }
    };

     