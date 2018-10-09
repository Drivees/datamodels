var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var planSchema = new Schema({
      name :{ type: String, required: true, index: { unique: true } },
      name :{ type: String},
      code :{ type: String },
      title:{ type: String },
      prices:[{amount: {type: Number}, currency: {type: Schema.Types.ObjectId, ref: 'Currency'}}],
      title_subtext: { type: String },
      title_shortDescription: { type: String },
      features: [],
      created: { type: Date },
      createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
      lastUpdate:  {type: Date, default: Date.now },
      enabled: {type: Boolean, default: false },
      active: {type: Boolean, default: false },
      dateStart: { type: Date },
      dateEnd: { type: Date },
      listWeight: {type: Number },
      region: { type: String , default: 'all' },
      countries:[]

  });


var Plan = mongoose.model("Plan", planSchema);
module.exports = Plan;
