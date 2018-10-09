var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var conditionSchema = new Schema({
      conditionTitle :{ type: String },
      conditionLogo: { type: String },
      conditionDescription :{ type: String },


      conditionCreated: { type: Date },
      conditionUpdated: { type: Date, default: Date.now }

  });


var Condition = mongoose.model("Condition", groupSchema);
module.exports = Condition;
