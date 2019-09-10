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
        if (Attachment[0] == null) {
            message.channel.send("Please add an Image alongside with SAUCE command to find the sauce of the picture!")
        } else {
            //console.log(Attachment)
            Attachment.forEach(function (attachment) {
                console.log(attachment.url);

                fetch("https://saucenao.com/search.php?output_type=2&url=" + attachment.url)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (jsonObj) {
                        var c = 0;
                        var d = 0;
                        var results = jsonObj.results;
                        for (var call of results) {

                            //console.log(call)
                            var data = call.header
                            var similarity = data.similarity;
                            var thumbnail = data.thumbnail;
                            var index_name = data.index_name;
                            var mainValue = call.data
                            var source = mainValue.source;
                            var year = mainValue.year;
                            var pixiv_id = mainValue.pixiv_id;
                            var danbooru_id = mainValue.danbooru_id;
                            var material = mainValue.material; //on danbooru
                            var character = mainValue.characters; //on danbooru


                            var percentage = parseFloat(similarity);

                            if (percentage <= 50) {

                                if (c != 0) {
                                    // message.channel.send("thats it")
                                    console.log("SAUCE FOUND!")
                                } else {
                                    message.channel.send("Sadly, there is no SAUCE <:PePe_hands:595077130665197579>")
                                }
                                break;
                            }
                            var url = mainValue.ext_urls;
                            console.log("similarity:", similarity, "source:", source, "year:", year, "index-name:", index_name, "External Url:", url);

                            const embed = new Discord.RichEmbed()
                                .setColor("#0099ff")
                                .setTitle("here's the SAUCE: ")
                                .setThumbnail(thumbnail)
                                // .addBlankField()
                                .addField("**Similarity:**", similarity)
                                .addField("source:", source)
                                .addField("year:", year)
                                .addField("index-name:", index_name)
                                .addField("External Url:", url)
                            message.channel.send({ embed: embed });

                            c = c + 1;

                        }
                    })

            })

        }
    }
}