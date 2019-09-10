const Danbooru = require('danbooru');

module.exports = {
  config: {
    name: "sfw",
    aliases: ["sb, sbooru, safebooru,anichara"],
    usage: "",
    category: "general",
    description: "Sends the random SFW pictures of anime chara ",
    accessableby: ""
  },
  run: async (client, message, args) => {
    //code here


    const booru = new Danbooru("https://safebooru.donmai.us")
    booru.posts({ tags: 'order:rank',  limit: 100  }).then(posts => {
      // Select a random post from posts array
      const index = Math.floor(Math.random() * posts.length)
      const post = posts[index]

      // Get post's url and create a filename for it
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
  }
}