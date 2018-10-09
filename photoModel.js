var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var photoSchema = new Schema({
      photoTitle :{ type: String },
      photoURI: { type: String },
      photoGroup:{},
      photoTags:[],
      photoGeoCity :{ type: String },
      photoGeoLat :{ type: String },
      photoGeoLon :{ type: String },
      photoOwner:{type: Schema.Types.ObjectId, ref: 'User'}, //User ID
      photoUpdated: { type: Date, default: Date.now }

  });


var Photo = mongoose.model("Photo", photoSchema);
module.exports = Photo;
