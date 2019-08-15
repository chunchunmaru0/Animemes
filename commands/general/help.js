const Discord = require("discord.js")
const client = new Discord.Client();
const { prefix } = require('../../config.json');
const fs = require("fs");
const { stripIndents } = require("common-tags")


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
        category: "general",
        description: "This is Help Description",
        accessableby: "Members"
	},
	run: async (client, message, args) => {
		const embed = new Discord.RichEmbed()
            .setColor("#0099ff")
            .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL)
            .setThumbnail(client.user.displayAvatarURL)

        if(!args[0]) {
            const categories = fs.readdirSync("./commands/")

            embed.setDescription(`These are the avaliable commands for ${message.guild.me.displayName}\nThe bot prefix is: **${prefix}**`)
            embed.setFooter(`© ${message.guild.me.displayName} | Total Commands: ${client.commands.size}`, client.user.displayAvatarURL);

            categories.forEach(category => {
                const dir = client.commands.filter(c => c.config.category === category)
                const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
                try {
                    embed.addField(`❯ ${capitalise} [${dir.size}]:`, dir.map(c => `\`${c.config.name}\``).join(" "))
                } catch(e) {
                    console.log(e)
                }
            })

            return message.channel.send(embed)
        } else {
            let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
            if(!command) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${prefix}help\` for the list of the commands.`))
            command = command.config

            embed.setDescription(stripIndents`The bot's prefix is: \`${prefix}\`\n
            **Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
            **Description:** ${command.description || "No Description provided."}
            **Usage:** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "No Usage"}
            **Accessible by:** ${command.accessableby || "Members"}
            **Aliases:** ${command.aliases ? command.aliases.join(", ") : "None."}`)

            return message.channel.send(embed)
        }



	}
}