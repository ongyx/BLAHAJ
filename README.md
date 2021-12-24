# BLAHAJ

![blahaj](logo.jpg)

A whale that moonlights as a Discord bot.

## Development

[Register a new bot user](https://discord.com/developers/applications) under an application.

BLAHAJ requires these scopes

- bot
- applications.commands

and permissions as the bare minimum.

- Read Messages/View Channels
- Send Messages
- Embed Links
- Attach Files
- Add Reactions
- Use Slash Commands
- Connect
- Speak

Clone this repo's `dev` branch, and setup the NodeJS environment.

```bash
$ git clone https://github.com/ongyx/BLAHAJ && cd BLAHAJ
$ npm install
```

Create the file `.env` and fill in the details:

```
BOT_MODE=dev
BOT_TOKEN=<your bot token>
BOT_CLIENT_ID=<your bot client ID>
BOT_GUILD_ID=<your test server ID>
```

Spin up a local instance with `npm start` and BLAHAJ should be up and running.
For deployment to something like Heroku, just change `BOT_MODE` to `prod` and copy over the rest.

## Todo

- Playlists for queueing songs to play.
- Command cleanup.
- Proper logging (maybe with Pino, not just `console.log`)

## Credits

@shinyduck for writing the first version of BLAHAJ.

This repo is under the MIT license.
