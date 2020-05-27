const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
var hd = [
    "***1***",
    "***2***",
    "***3***",
    "***4***",
    "***5***",
    "***6***"

 
  
];
 
 
  message.channel.send(message.author+" **attı. Zar Sonucu :** " + (hd[Math.floor(Math.random() * hd.length)]));
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zar','roll','küp','zarat'],
  permLevel: 0
};
 
exports.help = {
  name: 'zar',
  description: 'Zarla Oynamanıza Yarar.',
  usage: 'zar'
};