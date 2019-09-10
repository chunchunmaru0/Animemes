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
                            var pixiv_id = mainValue.pixiv_id; //on pixiv
                            var member_name= mainValue.member_name;
                            var title = mainValue.title; //of pixiv
                            var danbooru_id = mainValue.danbooru_id;
                            var material = mainValue.material; //on danbooru
                            var character = mainValue.characters; //on danbooru
                            var aniDb_id = mainValue.anidb_id;
                            var part = mainValue.part;
                            var est_time = mainValue.est_time;
                            var drawr_id = mainValue.drawr_id //on drawr
                            var da_id = mainValue.da_id //Deviant Art
                            var author_name = mainValue.author_name //Deviant art Author Name
                            var author_url = mainValue.author_url // Deviantart Author URL

                            var creator = mainValue.creator //creater on booru site


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
                                if(title != undefined){ embed.addField("**Title:**", title)}

                                if(source != undefined){ embed.addField("**Source:**", source)}
                                if(creator != undefined){ embed.addField("**Creator:**", creator)}
                                if(pixiv_id != undefined){ embed.addField("**Pixiv ID:**", pixiv_id)}
                                if(member_name != undefined){ embed.addField("**Member Name:**", member_name)}
                                if(drawr_id != undefined){ embed.addField("**Drawr ID**", drawr_id)}
                                if(da_id != undefined){ embed.addField("**Deviantart ID:**", da_id)}
                                if(author_name != undefined){ embed.addField("**Author Name**", author_name)}
                                if(author_url != undefined){ embed.addField("**Author url**", author_url)}
                                if(danbooru_id != undefined){ embed.addField("**Danbooru ID:**", danbooru_id)}
                                if(material != undefined){ embed.addField("**Material:**", material)}
                                if(character != undefined){ embed.addField("**Character:**", character)}
                                if(aniDb_id != undefined){ embed.addField("**AniDB ID:**", aniDb_id)}
                                if(year != undefined){ embed.addField("**Year:**", year)}
                                if(part != undefined){ embed.addField("**Part:**", part)}
                                if(est_time != undefined){ embed.addField("**Estimated Time:**", est_time)}
                                if(index_name != undefined){ embed.addField("**Index:**", index_name)}
                                if(url != undefined){ embed.addField("**External Url:**", url)}
                               
                            message.channel.send({ embed: embed });

                            c = c + 1;

                        }
                    })

            })

        }
    }
}