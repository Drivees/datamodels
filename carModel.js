var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
    carNotes: { type: String },
    carMake: { type: Schema.Types.ObjectId, ref :'Make' }, //Make ID
    carBodyType : { type: String }, //Cabrio, Coupe, Sedan , Touring
    carProductionYYYY: { type: Number , default: 1900},
    carProductionMM: { type: Number },
    carColor: { type: String },
    carOdoAtPurchase: { type: Number },
    carNumberOfPreviousOwners: { type: Number },
    carConditionAtPurchase:{ type: Schema.Types.ObjectId, ref :'Condition' },
    carOdoLastUpdate: { type: Number },
    carSteering : { type: Boolean, default: true }, // default is left-hand drive
    carModel: { type: String },
    carManfPlatform : {type: Schema.Types.ObjectId, ref: 'Platform'},
    // carRegion: {type: Schema.Types.ObjectId, ref: 'Region'}, //EU , US, JP, EMEA ,AU
    carRegion:{type: String},
    carEngineDisplacement: { type: String },
    carEngineType : { type: String },
    carEngineCylindersNumber: { type: Number },
    carIgnitionType : {type: String}, //Mechanical - Electronic
    carFuelSystem : {type: String}, //carbureted , MFI , EFI , Converted to Injection , Converted to Carburetor
    carCatalyticConvertor:{ type: Boolean },
    carElectricSystem: {type: String} , //6V, 12V, 24V , converted to 12V , converted to 6v ,
    carIsElectricHybrid: { type: Boolean, default: false },
    carTransType: { type: String }, //Automatic, Manual , Semi-Manual , Robotic , CVT , Other
    carTraction: { type: String }, //FWD , RWD, AWD
    carRegistrationNumber: { type: String, index: { unique: true } },
    carOriginalRegistrationCountry: { type: Schema.Types.ObjectId, ref:'Country' },
    carCurrentRegistrationCountry: { type: Schema.Types.ObjectId, ref:'Country' },
    carVIN: { type: String }, //VIN or Serial number
    carEngineNumber: { type: String },
    carFactoryOptions:[{type: Schema.Types.ObjectId, ref: 'Option'}], //IDs of options
    carWorks:[{type: Schema.Types.ObjectId, ref: 'Work'}],//IDs of works
    carTasks:[{type: Schema.Types.ObjectId, ref: 'Task'}], // IDs of Tasks
    carMOTDate: { type: Date },
    carMOTNotes:{ type: String },
    carModelCode:{ type: String },
    carInsuranceLevel:{ type: String },

    carSold :  { type: Boolean, default: false },
    carSoldDate :{type: Date},
    carSoldPrice: { type: Number },
    carSoldPriceCurrency:{type: Schema.Types.ObjectId, ref: 'Currency'},
    carSoldAtOdometer: { type: Number },

    carInitialRegistrationDate: { type: Date },
    carCurrentOwner:{type: Schema.Types.ObjectId, ref: 'User'}, //User ID
    carPurchasePrice:{type: Number},
    carPurchasePriceCurrency:{type: Schema.Types.ObjectId, ref: 'Currency'},
    carPurchaseDate:{type: Date},

    carPhotos:[{type: Schema.Types.ObjectId, ref: 'Photo'}], //User ID
    carPoster:{ type: Schema.Types.ObjectId, ref :'Photo' , default:'58ee368640bd24030198a6c0' },
    carUpdated: { type: Date, default: Date.now },
    carCreated: { type: Date }
});

var Car = mongoose.model("Car", carSchema);
module.exports = Car;
