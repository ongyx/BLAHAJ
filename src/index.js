const fs = require("fs");
const process = require("process");

const {Client, Intents, Collection} = require("discord.js");

const env = require("./env");
const commands = require("./commands/deploy");
const events = require("./events/deploy");

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_VOICE_STATES
	]
});

process.on("SIGINT", (code) => {
	console.log(`peace out`);
	client.destroy();
	process.exit(0);
});

events.deploy(client);
commands.deploy(client);

client.login(env.token);
