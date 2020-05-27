const Discord = require('discord.js');

var hd = [
    "Tura",
    "Yazı"
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(new Discord.RichEmbed()
   .setDescription(message.author + " Para Döndü: " + (hd[Math.floor(Math.random() * hd.length)]))
    .setColor('#ffffff'))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazıtura'],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'yazı-tura'
};