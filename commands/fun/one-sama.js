const fetch = require("node-fetch")
const { sankaku_login, sankaku_passwordHash } = require('../../config.json');
module.exports = {
    config: {
        name: "one-sama",
        aliases: ["os","onee","onesama","bigsis","nee"],
        usage: "",
        category: "info",
        description: "",
        accessableby: ""
	},
	run: async (client, message, args) => {
		//code here

        fetch(`https://capi-v2.sankakucomplex.com/posts?page=1&limit=25&tags=onee-sama+order:popular&login=${sankaku_login}&password_hash=${sankaku_passwordHash}`)
        .then(function(response) {
            return response.json();
          })
         .then(function(jsonObj) {
          
            var file = new Array();
            // jsonObj.forEach(element => {
               
            //   file= element.file_url;
            //    console.log(file) 

            // });
            for (const key in jsonObj) {
                if (jsonObj.hasOwnProperty(key)) {
                    const element = jsonObj[key];
                    
                     file[key] = element.preview_url

                     //console.log(key, file[key])
                    
                }
            }
            var rng=Math.floor((Math.random() * jsonObj.length));
           // console.log(jsonObj.file_url)
           var imgFile = file[rng]
           message.channel.send("", {file: imgFile})
           console.log("random file is", imgFile)
           
         //console.log(jsonObj)
        })
	}
}