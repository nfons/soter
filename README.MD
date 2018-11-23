# Soter
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

