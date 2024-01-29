//create 
const marketModel = require("../model/marketModel");

exports.market = async (req, res) => {
    try {
        const { price, title } = req.body;
        const savedData = await marketModel.create({ price, title });
        return res.status(200).json({ success: true, data: savedData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

//get all data from database
exports.getAllData = async (req ,res)=>{
    try {
        const  getData = await marketModel.find({});
        if(!getData){
            return res.status(404).send({success : false, message: 'Data not found'})
        }
        return res.status(200).send({success: true, messag: 'Fetched all data successfully !', getData})
        
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }

}
