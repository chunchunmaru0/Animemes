const Discord = require("discord.js")
module.exports = {
    config: {
        name: "serverinfo",
        aliases: ["s","si","server"],
        usage: "",
        category: "general",
        description: "Shows the info of the current guild",
        accessableby: ""
	},
	run: async (client, message, args) => {
        let sEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Guild Name:**", `${message.guild.name}`, true)
        .addField("**Guild Owner:**", `${message.guild.owner}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .addField("**Role Count:**", `${message.guild.roles.size}`, true)
        .setTimestamp()
        .setFooter(`${message.guild.me.displayName}`, client.user.displayAvatarURL);
        message.channel.send({embed: sEmbed});

	}
}