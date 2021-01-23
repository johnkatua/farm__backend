const Pasture = require('../Models/pasture');

exports.create = (req, res) => {
  const pasture = new Pasture(req.body);
  pasture.save((err, data) => {
    if(err) {
      return res.status(500).json({ error: err.message }) 
    }
    res.json({ data })
  })
};

exports.pastureById = (req, res, next, id) => {
  Pasture.findById(id).exec((err, pasture) => {
    if(err || !pasture) {
      return res.status(400).json({ error: "pasture not found" })
    }
    req.pasture = pasture;
    next();
  })
};

exports.read = (req, res) => {
  return res.json(req.pasture);
};

exports.list = (req, res) => {
  Pasture.find().exec((err, data) => {
    if(err) {
      return res.status(500).json({ error: err.message }) 
    }
    res.json(data);
  })
};

exports.update = (req, res) => {
  const pasture = req.pasture;
  pasture.temp = req.body.temp;
  pasture.condition = req.body.condition;
  pasture.save((err, data) => {
    if(err) {
      return res.status(400).json({ error: "Something went wrong" })
    }
    res.json(data);
  })
};

exports.remove = (req, res) => {
  const pasture = req.pasture;
  pasture.save((err) => {
    if(err) {
      return res.status(400).json({ error: "Something went wrong" })
    }
    res.json({ message: "Pasture deleted successfully"});
  })
};