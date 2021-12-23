const fs = require("fs");

const events = fs
  .readdirSync(__dirname)
  .filter(file => file.endsWith(".js") && file != "deploy.js")
  .map(file => require(`./${file}`))

module.exports = {
  async deploy(client) {
    for (const event of events) {
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
      } else {
        client.on(event.name, (...args) => event.execute(...args));
      }
    }
  }
}
