const Discord = require("discord.js")
const client = new Discord.Client();
const { prefix, token } = require('../../config.json');


// module.exports.run = async (client, message, args) => {
//     const hEmbed = new Discord.RichEmbed()
// 	.setColor('#0099ff')
// 	.setTitle('Help')
// 	.setDescription('Shows the HELP for this bot')
// 	.setThumbnail(message.client.avatarURL)
// 	.addField('Commands', 'being written')
// 	.addBlankField()
// 	// .addField('Inline field title', 'Some value here', true)
// 	// .addField('Inline field title', 'Some value here', true)
// 	// .addField('Inline field title', 'Some value here', true)
// 	// .setImage('')
// 	.setTimestamp()
// 	.setFooter(message.guild.name, '');

// message.channel.send(hEmbed);
// }

// module.exports.config = {
//     name: "help",
//     aliases: ["h", "halp"]
// }

module.exports = {
    config: {
        name: "help",
        aliases: ["h", "halp", "commands"],
        usage: "!usage",
        category: "miscellaneous",
        description: "",
        accessableby: "Members"
	},
	run: async (bot, message, args) => {
		const hEmbed = new Discord.RichEmbed()
		.setColor('#0099ff')
		.setTitle('Help')
		.setDescription('Shows the HELP for this bot')
		.setThumbnail(message.client.avatarURL)
		.addField('Commands', 'being written')
		.addBlankField()
		// .addField('Inline field title', 'Some value here', true)
		// .addField('Inline field title', 'Some value here', true)
		// .addField('Inline field title', 'Some value here', true)
		// .setImage('')
		.setTimestamp()
		.setFooter(message.guild.name, '');
	
	message.channel.send(hEmbed);

	}
}