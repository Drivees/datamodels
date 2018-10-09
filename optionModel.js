var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var optionsSchema = new Schema({
    optionTitle: { type: String },
    optionDescription: { type: String },
    optionNotes: { type: String },
    optionVendor: { type: Boolean},
    optionByManufacturer: { type: Boolean},
    optionValue: { type: Number },
    optionValueCurr: { type: String },
    optionPhotos: [{ type: Schema.Types.ObjectId, ref:'Photo' }],

    optionGroup: { type: Schema.Types.ObjectId, ref:'Group' },
    optionDeleted : {type: Boolean, default: false},
    optionCreated:{ type: Date },
    optionUpdated: { type: Date, default: Date.now }
});

var Option = mongoose.model("Option", optionsSchema);
module.exports = Option;
