const reporter = process.env.REPORTER;
let eventHelper;
switch (reporter) {
    default:
        eventHelper = require('./newrelic-helper')
}

module.exports = eventHelper;