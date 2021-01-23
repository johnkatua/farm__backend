const Cattle = require('../Models/cattle');

exports.create = (req, res) => {
  const cattle = new Cattle(req.body);
  cattle.save((err, data) => {
    if(err) {
      return res.status(500).json({ error: err.message }) 
    }
    res.json({ data })
  })
};

exports.list = (req, res) => {
  Cattle.find().populate('pasture').exec((err, data) => {
    if(err) {
      return res.status(500).json({ error: err.message }) 
    }
    res.json(data);
  })
};

exports.cattleById = (req, res, next, id) => {
  Cattle.findById(id).exec((err, cattle) => {
    if(err || !cattle) {
      return res.status(400).json({ error: 'Cattle not found' })
    }
    req.cattle = cattle;
    next();
  });
};

exports.read = (req, res) => {
  return res.json(req.cattle)
};

exports.update = (req, res) => {
  const cattle = req.cattle;
  cattle.quantity = req.body.quantity;
  cattle.sold = req.body.sold;
  cattle.bought = req.body.bought;
  cattle.save((err, data) => {
    if(err) {
      return res.status(400).json({ error: "Something went wrong" })
    }
    res.json(data);
  })
}

exports.remove = (req, res) => {
  let cattle = req.cattle;
  cattle.remove((err) => {
    if (err) {
      return res.status(400).json({ error: 'Cattle not found' });
    }
    res.json({ message: "Cattle deleted successfully"})
  })
};