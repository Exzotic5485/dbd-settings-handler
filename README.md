# Discord Dashboard Settings Handler
> Requires [discord dashboard](https://www.npmjs.com/package/discord-dashboard)

An easy to use handler for [discord dashboard](https://www.npmjs.com/package/discord-dashboard), it allows you to quickly add new settings without having to worry about setting up a database that uses [keyv](https://www.npmjs.com/package/keyv) to make sure it supports any database you are looking for!

# Usage
```js
const { Category, Option, init } = require('dbd-settings-handler')

init(); // Uses sqlite by default, accepts string of a keyv adapter

// DBD Config...
{
    settings: [
        new Category()
            .setId('setup') // Sets the id of the category - must be unique
            .setName("Setup") // Name of the category
            .setDescription("Setup your bot with default settings!") // Description of the category
            .addOptions(
                new Option() // Creates a new option inside the category
                .setId('lang') // Sets the id of the option - must be unique
                .setName("Language") // Name of the option
                .setDescription("Change bot's language easily") // Description of the option
                .setType(DBD.formTypes.select({"Polish": 'pl', "English": 'en', "French": 'fr'})), // The DBD form type function

                new Option()
                .setId('join_message')
                .setName("Join Message")
                .setDescription("Is the join message enabled?")
                .setType(DBD.formTypes.switch(false))
            )
    ]
}
```
# Support / Help
Join the DBD creators discord:

<a href="https://discord.gg/Nkc8MWxHRD"> <img src="https://discordapp.com/api/guilds/803034737261936670/widget.png" alt="Discord server"/></a>
