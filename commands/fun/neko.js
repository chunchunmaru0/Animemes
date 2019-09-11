const nekoClient = require("../../nekoxyz.js")
const neko = new nekoClient();

module.exports = {
    config: {
        name: "neko",
        aliases: ["n"],
        usage: "",
        category: "info",
        description: "",
        accessableby: ""
	},
	run: async (client, message, args) => {
        async function test() {
            var data = await neko.data.neko();
            console.log(data.message)
            message.channel.send("",{
                file: data.message
            })
          }
          
          test();
	}
}