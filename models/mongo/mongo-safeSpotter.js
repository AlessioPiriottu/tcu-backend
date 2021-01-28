const mongoose = require('mongoose');

module.exports = mongoose.model('SafeSpotter', new mongoose.Schema({
    id: Number,
    street: String,
    condition: String,
    critical_issues: Number,
    condition_convert: String,
    alert_type: String,
    date: { type: Date, default: Date.now },
    checked: { type: Boolean, default: false },
},{
    versionKey: false
}));


