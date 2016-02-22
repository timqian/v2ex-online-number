"use strict";

var http = require('http');
var fs = require('fs');

function myRep() {
  http.request({host:'www.v2ex.com'}, (res) => {
    res.on('data', (chunk) => {
      const html = `${chunk}`;         // TO BE UNDERSTAND
      const numberPatt = /nbsp;\s(\d{0,5})\s人在线/g;
      const result = numberPatt.exec(html);

      if(result) {
        const number = result[1];
        /*console.log("number", number);*/

        fs.open('./numbers.csv', 'a', undefined, (err, fd) => {
          if(err) throw err;

          fs.write(fd, `${new Date()}, ${number}\n`, '',  undefined, (err)=>{
            if(err) throw err;

            fs.close(fd, (err) => {
              if(err) throw err;
            });
          });
        });
      }
    });
  }).end();
}

setInterval(myRep, 5 * 60 * 1000);
