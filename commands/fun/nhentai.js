const nHentaiAPI = require('nhentai-api-js');
let api = new nHentaiAPI();

module.exports = {
    config: {
        name: "nhentai",
        aliases: ["nh", "doujins", "ecccchi"],
        usage: "",
        category: "fun",
        description: "Sends full nhentai Book",
        accessableby: ""
    },
    run: async (client, message, args) => {
        if (!args[0]) {
            message.channel.send("Please add your NUKECODE beside $nhentai to get the doujins");

        } else {

            //et msg = await message.channel.send("Your Request is being Processed, Please wait while we load your Data...")

            api.g(args[0]).then(gallery => {
                //console.log(JSON.stringify(gallery));     // (1)
                // console.log(gallery.getPages());          // (2)
                // console.log(gallery.getPagesThumbnail()); // (3)
                
            message.channel.send(`link to the site: https://nhentai.net/g/${args[0]}`, {file: gallery.getCover()});          // (4)
                // console.log(gallery.getCoverThumbnail()); // (5)

                

            });

        }
    }
}