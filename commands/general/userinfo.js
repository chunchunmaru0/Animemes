const Discord = require("discord.js")
module.exports = {
    config: {
        name: "userinfo",
        aliases: ["ui","user"],
        usage: "",
        category: "general",
        description: "Shows the info of user",
        accessableby: ""
	},
	run: async (client, message, args) => {
        let sEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle("User Info")
        
        .setThumbnail(message.author.displayAvatarURL)
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
        .addField("**Username:**", `${message.author.username}`, true)
        .addField("**Discriminator:**", `${message.author.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Created At:**", `${message.author.createdAt}`, true)
        .setTimestamp()
        .setFooter(`${message.guild.me.displayName}`, client.user.displayAvatarURL);
        message.channel.send({embed: sEmbed});

	}
}