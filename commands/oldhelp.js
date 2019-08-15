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



//INDEX FS(COMMAND HANDLER)

// fs.readdir("./commands/", (err, files) =>{

//   if(err) console.log(err);

//   let jsfile = files.filter(f => f.split(".").pop() === "js");
//   if(jsfile.length <= 0) {
//     console.log("[Logs] Couldn't Find Commands");
//   }

//   jsfile.forEach((f, i) => {
//     let pull = require(`./commands/${f}`);
//     client.commands.set(pull.config.name, pull);
//     pull.config.aliases.forEach(alias => {
//       client.aliases.set(alias, pull.config.name)
//     })
//   })  
// })