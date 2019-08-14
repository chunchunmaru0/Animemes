const Discord = require("discord.js")
const { prefix, token } = require('../config.json');


module.exports.run = async (client, message, args) => {
    message.channel.send('This is Help!')
}

module.exports.config = {
    name: "help",
    aliases: ["h", "halp"]
}