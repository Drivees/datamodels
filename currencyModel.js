var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var currencySchema = new Schema({
    symbol:{type: String},
    name: {type: String},
    symbol_native: {type: String},
    decimal_digits: {type: Number},
    rounding:{type: Number},
    code: {type: String},
    name_plural: {type: String}

  });


var Currency = mongoose.model("Currency", currencySchema);
module.exports = Currency;
