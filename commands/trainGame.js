exports.run = (bot, message, args) => {
  const math = require('mathjs');
  if (!isNaN(args[0]) && args[0].length == 4 && !args[0].includes(".")){
    //message.reply(" I have 4 numbers and I'm attempting to solve this.")
    n1 = parseInt(args[0].slice(0,1));
    n2 = parseInt(args[0].slice(1,2));
    n3 = parseInt(args[0].slice(2,3));
    n4 = parseInt(args[0].slice(3,4));
    solve(n1, n2, n3, n4);
  } else {
    message.reply ("Please enter 4 numbers.");
  }

  function operation(num1, num2, operation) {
      if (operation === "+") {
          return num1 + num2;
      }
      else if (operation === "-") {
          return num1 - num2;
      }
      else if (operation === "*") {
          return num1 * num2;
      }
      else if (operation === "/") {
          return num1 / num2;
      }
      else if (operation === "^") {
          return pow(num1, num2);
      }
  }

  function solve(a, b, c, d) {
    const symbols = ["+", "-", "*", "/", "^"];
    var solutions = "";
      for (let s1 of symbols) {
          for (let s2 of symbols) {
              for (let s3 of symbols) {
                  try {
                      if (operation(operation(operation(a, b, s1), c, s2), d, s3) === 10) {
                          solutions += `((${a}${s1}${b})${s2}${c})${s3}${d}\n`;
                      }
                  }
                  catch (e) {
                      //do nothing
                  }
              }
          }
      }
      if (solutions.length === 0){
        message.channel.send("```No solutions found.```");
      }else{
        message.channel.send("```" + solutions + "```");
      }
  }



};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['tg'],
	botPerms: [],
	memberPerms: []
};

exports.help = {
	name: 'traingame',
	description: 'A calculator for the Sydney train game!',
	usage: 'traingame XXXX'
};
