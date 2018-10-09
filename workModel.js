var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workSchema = new Schema({
    workOdometer: { type: Number },
    workOdometerUnit: { type: Number },
    workTitle: { type: String },
    workDateStart: { type: String }, //Make ID: { type: Number },
    workDateEnd: { type: String },
    workLaborItems: [],
    workParts: [],
    workTotalCost:{ type: Number },
    workTotalCostCurr:{ type: String },
    workPhotos:[],
    workNotes:[],
    workStatusHist:[],
    workTags: [],
    workRelatedTasks:[],
    workRelatedParts:[],
    workOwner:{type: Schema.Types.ObjectId, ref: 'User'},
    workPerformedBy:{type: Schema.Types.ObjectId, ref: 'Vendor'},
    workDone:{ type: Boolean, default: false },
    workUpdated: { type: Date, default: Date.now },
    workCreated: { type: Date },
    isDeleted: { type: Boolean, default: false}


});

var Work = mongoose.model("Work", workSchema);
module.exports = Work;
