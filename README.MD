# Soter
 ![build status](https://travis-ci.org/nfons/soter.svg?branch=master) 
 [![NPM Version](http://img.shields.io/npm/v/soter.svg?style=flat)](https://www.npmjs.org/package/soter) 
 
Node Tool To Run Security Auditing and set alerts on possible vulnerabilities

# WHY
Useful in CI/CD pipelines, where users might inadvertently add vulnerable packages


# How To User
1. Download Package. `npm i -g soter`

2. Set ENV var: `SOTER_REPORTER` to any supported reporter:
* New relic
* (More Coming soon)

Finally In CI/CD process, Run soter

Soter Will set an event: `SOTER_SECURITY` in corresponding event reporter

