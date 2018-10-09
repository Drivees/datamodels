var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partSchema = new Schema({
    partTitle: { type: String },
    partDescription: { type: String },
    partSKUnum:{ type: String },//stock keeping unit
    partOEMnum:[],//OEM part numbers array , can have multiple
    partAMnum:[],//aftermarket part numbers
    partNA:{ type: Boolean },//is part discontinued
    partNotes:[{ type: Schema.Types.ObjectId, ref:'Note' }],
    partPrices:[],
    partPhotos:[{ type: Schema.Types.ObjectId, ref:'Photo' }],
    partDiagramPhoto:{ type: Schema.Types.ObjectId, ref:'Photo' },
    partIDinDiagram:{ type: String },


    partWeight: { type: Number }, //gramms
    partQttyRequied: { type: Number }, //number of such parts required in each car

    partCreated: { type: Date, default: Date.now },
    partUpdated: { type: Date, default: Date.now }

});

var Part = mongoose.model("Part", partSchema);
module.exports = Part;
