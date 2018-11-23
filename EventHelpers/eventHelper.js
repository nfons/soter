const reporter = process.env.SOTER_REPORTER;
let eventHelper;
switch (reporter) {
    default:
        eventHelper = require('./newrelic-helper')
}

module.exports = eventHelper;