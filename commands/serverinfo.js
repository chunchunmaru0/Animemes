const Discord = require("discord.js")
const { prefix, token } = require('../config.json');


module.exports.run = async (client, message, args) => {
    message.channel.send('Server Info on Progress')
}

module.exports.config = {
    name: "serverinfo",
    aliases: ["si", "server", "servinf"]
}