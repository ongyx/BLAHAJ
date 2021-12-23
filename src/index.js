const fs = require("fs");

const {Client, Intents, Collection} = require("discord.js");

const auth = require("./auth");
const commands = require("./commands/deploy");
const events = require("./events/deploy");

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_VOICE_STATES
	]
});

events.deploy(client);
commands.deploy(client);

client.login(auth.token);
