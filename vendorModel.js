var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var vendorSchema = new Schema({
      vendorName :{ type: String },
      vendorURL :{ type: String },
      vendorLogo: { type: Schema.Types.ObjectId, ref:'Photo' },
      vendorPhisicalAddress:{ type: String },
      vendorMainPhone:{ type: String },
      vendorMainFax:{ type: String },
      vendorMainEmail:{ type: String },
      vendorContacts: [],
      vendorMainContact:{ type: Schema.Types.ObjectId, ref:'Contact' },
      vendorForMakes:[], //car makes;
      vendorBrands:[],
      isDeleted:{type: Boolean, default: false},


      vendorUpdated: { type: Date, default: Date.now },
      vendorCreated: { type: Date}

  });

var Vendor = mongoose.model("Vendor", vendorSchema);
module.exports = Vendor;
