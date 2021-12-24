if (process.env.BOT_MODE !== "prod") {
	require("dotenv").config()
}

temp = {
	token: process.env.BOT_TOKEN,
	clientID: process.env.BOT_CLIENT_ID,
	guildID: process.env.BOT_GUILD_ID
};

for (let [key, value] of Object.entries(temp)) {
	if (!value) {
		throw new Error(`${key} has invalid value ${value}!`);
	}
}

module.exports = temp;
