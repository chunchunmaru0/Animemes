const fetch = require('node-fetch');
const Discord = require("discord.js");
module.exports = {
    config: {
        name: "sauce",
        aliases: ["sos", "sas"],
        usage: "",
        category: "general",
        description: "",
        accessableby: ""
    },
    run: async (client, message, args) => {
        //code here

        var Attachment = (message.attachments).array();
        Attachment.forEach(function (attachment) {
            console.log(attachment.url);

            fetch("https://saucenao.com/search.php?output_type=2&url=" + attachment.url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (jsonObj) {
                    var results = jsonObj.results;
                    results.forEach(element => {
                        //console.log(element.header)
                        var data = element.header
                        var similarity = data.similarity;
                        var thumbnail = data.thumbnail;
                        var index_name = data.index_name;
                        var mainValue = element.data
                        var source = mainValue.source;
                        var year = mainValue.year;

                        var url = mainValue.ext_urls;
                        console.log("similarity:", similarity, "source:", source, "year:", year, "index-name:", index_name, "External Url:", url);

                        const embed = new Discord.RichEmbed()
                            .setColor("#0099ff")
                            .setTitle("here's the SAUCE: ")
                            .setThumbnail(thumbnail)
                            .addBlankField()
                            .addField("**Similarity:**", similarity)
                            .addField("source:", source)
                            .addField("year:", year)
                            .addField("index-name:", index_name)
                            .addField("External Url:", url)
                            message.channel.send({embed: embed});

                    });
                })
        })

    }
}