const Discord = require("discord.js")
module.exports = {
    config: {
        name: "botinfo",
        aliases: ["bi","b","bot"],
        usage: "",
        category: "general",
        description: "Shows the info of this bot",
        accessableby: ""
	},
	run: async (client, message, args) => {
        let sEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle("BOT INFO")
        .setThumbnail(client.user.displayAvatarURL)
        .setAuthor(`${message.guild.me.displayName} Info`, client.user.displayAvatarURL)
        .addField("**BOT Name:**", `${message.guild.me.displayName}`, true)
        .addField("**BOT Creator:**", `<@338357788818276352>`, true)
        .addBlankField()
        .addField(`**GITHUB:**`,'https://github.com/KaleyMoro/Animemes/')
        .addField("**CREATED AT:**", `${client.user.createdAt}`)
        .setTimestamp()
        .setFooter(`${message.guild.me.displayName}`, client.user.displayAvatarURL);
        message.channel.send({embed: sEmbed});

	}
}