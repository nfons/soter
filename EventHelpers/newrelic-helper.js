const newrelic = require('newrelic');

function sendEvent(title, severity, cves, overview, recommendation) {
    attributes = {
        title: title,
        severity: severity,
        cves: cves[0],
        overview: overview,
        recommendation: recommendation

    };
    newrelic.recordCustomEvent("SOTER_SECURITY", attributes);
}
module.exports = sendEvent;