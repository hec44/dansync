													
//Name of the file : dropbox-file-upload.js
//Including the required moduless
var request = require('request');
require("dotenv").config();
//enter your access token
let access_token = process.env.DROPBOXACCESSTOKEN;
//Name of the file to be uploaded
saveDropbox = function(content, filename) {
    options = {
        method: "POST",
        url: 'https://content.dropboxapi.com/2/files/upload',
        headers: {
          "Content-Type": "application/octet-stream",
          "Authorization": "Bearer " + access_token,
          "Dropbox-API-Arg": "{\"path\": \"/dansync-cogscy/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
        },
        body:content
    };
    request(options,function(err, res,body){
        console.log("Err : " + err);
        console.log("res : " + res);
        console.log("body : " + body);    
    })
};



													
													
												