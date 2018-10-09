var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var groupSchema = new Schema({
      groupTitle :{ type: String },
      groupLogo: { type: String },
      groupDescription :{ type: String },


      groupCreated: { type: Date },
      groupUpdated: { type: Date, default: Date.now }

  });


var Group = mongoose.model("Group", groupSchema);
module.exports = Group;
