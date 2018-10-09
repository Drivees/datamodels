var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var makeSchema = new Schema({
      makeName :{ type: String, required: true, index: { unique: true } },
      makeLogoURI :{ type: String },
      makeURL: { type: String }
  });

var Make = mongoose.model("Make", makeSchema);
module.exports = Make;
