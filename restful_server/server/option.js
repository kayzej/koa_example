var mongoose = require('mongoose');

var optionSchema = mongoose.Schema({

});
var option = mongoose.model('option', optionSchema);

function createOption() {

}

exports.createOption = createOption;