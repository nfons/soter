#!/usr/bin/env node
const event = require('./EventHelpers/eventHelper');

var spawn = require('child_process').spawnSync;
var child = spawn('npm' , ['audit','--json']);
let json = JSON.parse(child.stdout);

Object.keys(json.advisories).forEach(function (key) {
    let adv = json.advisories;
    let title = adv[key].title;
    let severity = adv[key].severity;
    let cves = adv[key].cves;
    let overview = adv[key].overview;
    let recommendation = adv[key].recommendation;

    event(title, severity, cves, overview, recommendation);
});

(Object.keys(json.advisories).length  === 0) ? console.log("No Vulnerabilities found") : console.log("Vulnerabilities logged");
process.exit();

