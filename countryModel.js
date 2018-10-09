var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var countrySchema = new Schema({
      name :{ type: String, required: true, index: { unique: true } },
      code :{ type: String },

  });


var Country = mongoose.model("Country", countrySchema);
module.exports = Country;
