const {SlashCommandBuilder, inlineCode} = require('@discordjs/builders');

const Cron = require("croner");
const {fortuneSlips} = require('../data/fortuneslips');

// set of users who already claimed their fortune slip for the day.
var usersClaimed = new Set();

// schedule daily reset at 04:00 (0 4 * * *) CRON GMT+8 corresponding to Genshin Impact daily Asia server reset
const dailyReset = Cron(
    '0 4 * * *',
    {
        maxRuns: Infinity,
        timezone: "Asia/Singapore"
    },
    function () {
        usersClaimed = new Set();
        console.log('daily fortune slip reset', new Date().toString());
    }
);

// Get the time of the next reset, formatted as a dynamic Discord timestamp.
function nextReset() {
    return `<t:${Math.floor(dailyReset.next().getTime() / 1000)}:R>`
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fortuneslip')
        .setDescription('claim your daily fortune slip. (resets at 4AM)'),

    async execute(interaction) {

        if (usersClaimed.has(interaction.user.id)) {
            interaction.reply({
                content: `You've already gotten one today. Please try again tomorrow... ${interaction.user}\nNext reset: ${nextReset()}`,
                ephemeral: true,
            });

        } else {
            let slip = fortuneSlips[Math.floor(Math.random() * fortuneSlips.length)];
            interaction.reply({embeds: [slip]});
            usersClaimed.add(interaction.user.id);
        }

    },
}
