import Zones from '../models/zone.model';

const getAllZone = async (req, res) => {
       try {
              const zone = await Zones.find().populate('employeeId');
              res.status(200).json(zone);
       } catch (error) {
              res.status(400).json({
                     message: error
              });
       }
};

const getOneZone = async (req, res) => {
       try {
              const id = req.params.id;
              const zone = await Zones.findById({
                     _id: id
              })
              res.status(200).json(zone)
       } catch (error) {
              res.status(400).json({
                     message: "zone not found"
              });
       }
}

const addZone = async (req, res) => {
       try {
              const getData = req.body;
              const zone = await new Zones(getData).save();
              res.status(200).json(zone)
       } catch (error) {
              res.status(400).json({
                     message: "Not add Zone"
              });
       }
}

const updateZone = async (req, res) => {
       try {
              const id = req.params.id;
              const getData = req.body;
              const zone = await Zones.findOneAndUpdate({
                     _id: id
              }, getData, {
                     zone: true
              });
              res.status(200).json(zone)
       } catch (error) {
              res.status(400).json({
                     message: "Cập nhật không thành công",
              });
       }
}

const removeZone = async (req, res) => {
       try {
              const id = req.params.id;
              const zone = await Zones.findOneAndDelete({
                     _id: id
              });
              res.status(200).json(zone);
       } catch (error) {
              res.status(400).json({
                     message: "Xóa không thành công"
              });
       }
}

export {
       getAllZone,
       getOneZone,
       addZone,
       updateZone,
       removeZone,
}
