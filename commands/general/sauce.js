const fetch = require('node-fetch');
const Discord = require("discord.js");
const {sauceNaoAPI} = require("../../config.json")
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

        if(!args[0]){
        var Attachment = (message.attachments).array();
        if (Attachment[0] == null) {
            message.channel.send("Please add an `Image` alongside with `SAUCE` command or add `IMAGE LINK` beside the `SAUCE` command to find the sauce of the picture!")
        } else {
            //console.log(Attachment)
            Attachment.forEach(function (attachment) {
                var link = attachment.url
                console.log(link);

                getSauce(link);
            })

        }
    }else {
        var link = args[0];
        console.log(link)
        getSauce(link);
    }
    function getSauce(link) {
        fetch("https://saucenao.com/search.php?output_type=2&url=" + link + "&api_key=" + sauceNaoAPI)
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
                    var member_name = mainValue.member_name;
                    var title = mainValue.title; //of pixiv
                    var danbooru_id = mainValue.danbooru_id;
                    var material = mainValue.material; //on danbooru
                    var character = mainValue.characters; //on danbooru
                    var aniDb_id = mainValue.anidb_aid;
                    var part = mainValue.part;
                    var est_time = mainValue.est_time;
                    var drawr_id = mainValue.drawr_id //on drawr
                    var da_id = mainValue.da_id //Deviant Art
                    var author_name = mainValue.author_name //Deviant art Author Name
                    var author_url = mainValue.author_url // Deviantart Author URL
    
                    var creator = mainValue.creator //creater on booru site
    
    
                    var percentage = parseFloat(similarity);
    
                    if (percentage <= 60) {
    
                        if (c != 0) {
                            // message.channel.send("thats it")
                            console.log("SAUCE FOUND!")
                        } else {
                            message.channel.send(" :x: Sadly, there is no SAUCE <:PePe_hands:595077130665197579>")
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
                    if (title != undefined) { embed.addField("**Title:**", title) }
    
                    if (source != undefined && source != "") { embed.addField("**Source:**", source) }
                    if (creator != undefined && creator != "") { embed.addField("**Creator:**", creator) }
                    if (pixiv_id != undefined && pixiv_id != "") { embed.addField("**Pixiv ID:**", pixiv_id) }
                    if (member_name != undefined && member_name != "") { embed.addField("**Member Name:**", member_name) }
                    if (drawr_id != undefined && drawr_id != "") { embed.addField("**Drawr ID**", drawr_id) }
                    if (da_id != undefined && da_id != "") { embed.addField("**Deviantart ID:**", da_id) }
                    if (author_name != undefined && author_name != "") { embed.addField("**Author Name**", author_name) }
                    if (author_url != undefined && author_url != "") { embed.addField("**Author url**", author_url) }
                    if (danbooru_id != undefined && danbooru_id != "") { embed.addField("**Danbooru ID:**", danbooru_id) }
                    if (material != undefined && material != "") { embed.addField("**Material:**", material) }
                    if (character != undefined && character != "") { embed.addField("**Character:**", character) }
                    if (aniDb_id != undefined && aniDb_id != "") { embed.addField("**AniDB ID:**", aniDb_id) }
                    if (year != undefined && year != "") { embed.addField("**Year:**", year) }
                    if (part != undefined && part != "") { embed.addField("**Part:**", part) }
                    if (est_time != undefined && est_time != "") { embed.addField("**Estimated Time:**", est_time) }
                    if (index_name != undefined && index_name != "") { embed.addField("**Index:**", index_name) }
                    if (url != undefined && url != "") { embed.addField("**External Url:**", url) }
    
                    message.channel.send({ embed: embed });
    
                    c = c + 1;
    
                
            }
            })
    }
    }
}
