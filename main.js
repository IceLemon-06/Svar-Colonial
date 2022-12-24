const { Client, GatewayIntentBits, messageLink } = require('discord.js')
require('dotenv/config');
const { getFromDB } = require('./FirebaseHandler.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],

})

client.on('ready', () => {
    console.log(`Ready! Logged in as ${client.user.username}`)
})

const prefix = "!";
client.on('messageCreate', (message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command == "ping") {
        message.reply("pong!");
    }
    
    
})

async function localGet(bugID) {
    await getFromDB(bugID)
    //console.log(getFromDB(3704788))
}

//localGet(3704788)

client.login(process.env.TOKEN)