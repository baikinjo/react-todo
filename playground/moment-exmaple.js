var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current Timestamp', now.unix());

var timestamp = 1507164365;
var currentMoment = moment.unix(timestamp);

console.log('Current Moment', currentMoment.format('MMM D, YY @ h:mm a'));

