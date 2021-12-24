const fs = require("fs");

const {REST} = require("@discordjs/rest");
const {Routes} = require("discord-api-types/v9");

const env = require("../env")

const rest = new REST({version: "9"}).setToken(env.token);

// create a map of command names to the commands themselves.
const commands = new Map(
  fs
    .readdirSync(__dirname)
    .filter(file => file.endsWith(".js") && file != "deploy.js")
    .map(file => {
      const command = require(`./${file}`);
      return [command.data.name, command];
    })
)

module.exports = {
  async deploy(client) {
    // Register guild commands.
    try {
      await rest.put(
        Routes.applicationGuildCommands(env.clientID, env.guildID),
        {body: Array.from(commands.values()).map(c => c.data.toJSON())},
      );
      console.log("Successfully registered application commands.");

    } catch (error) {
      console.error(error);
    }

    // Register interaction (slash command) callback.
    client.on("interactionCreate", async interaction => {
      if (!interaction.isCommand()) return;

      const command = commands.get(interaction.commandName);

      if (!command) return;

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({content: "There was an error while executing this command!", ephemeral: true});
      }
    });
  }
}
