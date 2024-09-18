exports.placeOrder = (req, res) => {
    res.send('Order placed');
  };
  
  exports.getOrder = (req, res) => {
    res.send(`Order details for ID: ${req.params.id}`);
  };
  