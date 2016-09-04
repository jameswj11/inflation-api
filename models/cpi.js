let CPI = require('../cpi.json')

module.exports = {
  calculate: function(req, res, next){
    let date           = Number.parseInt(req.query.year);
    let value          = Number.parseFloat(req.query.value);
    let responseObject = {}

    responseObject["startValue"] = value;
    responseObject["targetYear"] = date;
    responseObject["adjustedValue"] = Number.parseFloat(
      (value * CPI[2016]/CPI[date]).toFixed(2)
    )

    res.inflationAdjusted = {response: responseObject}
    next()
  }
}
