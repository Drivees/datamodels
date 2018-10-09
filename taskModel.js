var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var taskSchema = new Schema({
      taskTitle: {type: String},
      taskDescription:{ type: String },
      taskRelatedCar:{type: Schema.Types.ObjectId, ref: 'Car'},
      taskOwner:{type: Schema.Types.ObjectId, ref: 'User'},
      taskTags:[],
      taskDone:{ type: Boolean, default: false},
      taskAppearanceDate:{ type: Date },
      taskRelatedWorks:[],
      taskClosed:{ type: Boolean, default: false},
      taskClosingDate:{ type: Date },
      taskPhotos:[],
      taskStatusHist:[],
      taskUpdated: { type: Date, default: Date.now },
      taskCreated: { type: Date  },
      isDeleted:{ type: Boolean, default: false}
  });



var Task = mongoose.model("Task", taskSchema);
module.exports = Task;
