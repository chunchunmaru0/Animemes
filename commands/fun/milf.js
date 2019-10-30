const Danbooru = require('danbooru');
const {bororuAPI} = require("../../config.json")
const login = 'login';

module.exports = {
    config: {
        name: "milf",
        aliases: ["milf, MMMMMMILF, onesans"],
        usage: "",
        category: "fun",
        description: "Sends the milf NSFW anime pictures ",
        accessableby: ""
    },
    run: async (client, message, args) => {
        //code here


        const booru = new Danbooru(login, bororuAPI)
        
        if (message.channel.nsfw){
            // console.log("it's nsfw channel")

        booru.posts({ tags: 'milf order:favcount', limit: 100  }).then(posts => {
            // Select a random post from posts array
            const index = Math.floor(Math.random() * posts.length)
            const post = posts[index]

            // Get post's url and create a filename for it
            //console.log(booru.url(post))
            const url = booru.url(post.file_url)
            const name = `${post.md5}.${post.file_ext}`
            message.channel.send("", {
                file: url.href
            });
            //console.log(booru.url(post.file_url));

            //   // Download post image using node's https and fs libraries
            //   require('https').get(url, response => {


            //     response.pipe(require('fs').createWriteStream(name))
            //     console.log(response.pipe(require('fs').createWriteStream(name)));
            //   })
        })
    } else {
        message.channel.send("This is not NSFW channel, Please command me on NSFW channel <:astolfo_peace:598071428419682314>")
    }
    }
}