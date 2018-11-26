#!/usr/bin/env node
//reset new relic stuff
process.env.NEW_RELIC_NO_CONFIG_FILE = true;
var colors = require('colors/safe');
require('colors');
const program = require('commander');
const fs = require("fs");

var jsonContent = JSON.parse(fs.readFileSync("package.json"));
program.option('--reporter, -r', 'Reporter to use, Defaults: New Relic', /^(newrelic|grafana)$/i, 'newrelic')
    .option('--terminate, -t', 'Terminate on medium or higher')
    .version(jsonContent.version, '-v, --version');
program.parse(process.argv);
const event = require('./EventHelpers/eventHelper');
var spawn = require('child_process').spawnSync;
var child = spawn('npm' , ['audit','--json']);
let json = JSON.parse(child.stdout);


function colorSev(sev) {
    switch(sev){
        case 'high':
            return colors.red(sev);
        case 'moderate':
            return colors.yellow(sev);
        default:
            return colors.green(sev)
    }
}

Object.keys(json.advisories).forEach(function (key) {
    let adv = json.advisories;
    let title = adv[key].title;
    let severity = adv[key].severity;
    let cves = adv[key].cves;
    let overview = adv[key].overview;
    let recommendation = adv[key].recommendation;

    event(title, severity, cves, overview, recommendation);
    console.log("Vulnerability found: ".red + title, " [Severity] ".cyan + colorSev(severity))
});

(Object.keys(json.advisories).length  === 0) ? console.log("No Vulnerabilities found") : console.log("Vulnerabilities logged");
process.exit();

