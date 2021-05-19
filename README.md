# verivox-assignment
verivox web automation assignment in cypress

Steps to execute code
1. cd to project directory and execute npm install
2. Command to execute all scripts (headless mode): npx cypress run --spec "cypress/integration/*.js"
3. Command to execute individual scripts (headless mode): npx cypress run --spec "cypress/integration/<script-file-name>.js"
4. Command to execute scripts on specific browser: npx cypress run --spec "cypress/integration/*.spec.js" --browser <browser-name>

<script-file-name> can be replaced with "dls-traffic-verification.spec.js","load-multiple-traffic.spec.js"
<<browser-name> can be replaced with "chrome","firefox","electron"
