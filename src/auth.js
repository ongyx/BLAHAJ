const fs = require("fs");
const path = require("path")

const SECRETS_PATH = path.join(__dirname, "..", "secrets.json")

module.exports = JSON.parse(fs.readFileSync(SECRETS_PATH, "utf-8"))
