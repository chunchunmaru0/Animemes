const nekoClient = require("../../nekoxyz.js")
const neko = new nekoClient();

module.exports = {
    config: {
        name: "neko",
        aliases: ["neko", "meow", "nya"],
        usage: "",
        category: "fun",
        description: "Sends SFW Neko",
        accessableby: ""
    },
    run: async (client, message, args) => {
         async function test() {
            //console.log( await neko.data.neko());
            var data = await neko.data.neko()
           // console.log(data.message)
            message.channel.send("",{
                file : data.message
            })
        }

        test();
    }
}