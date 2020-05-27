const Discord = require('discord.js')
exports.run = async(client, message, args) => {
  
  
const emoji1 = message.client.emojis.get('📞');
const emoji2 = message.client.emojis.get('📞');
const emoji3 = message.client.emojis.get('📞');
const emoji4 = message.client.emojis.get('📞');
const emoji5 = message.client.emojis.get('📞');
const emoji6 = message.client.emojis.get('📞');
const emoji7 = message.client.emojis.get('📞');
      let isEnabled;
      message.reply("```Yardım Komutunu Kullandığınız İçin Teşekkürler. Birazdan Yetkili Ekibimiz sizinle ilgilenicektir.```");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "706299592861417503";
      const embed = new Discord.RichEmbed()
        .addField('Uyarı', `📞 Canlı Destek Çağrısı`)
        .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Kanal**: ${message.channel} \n**Destek İsteyen**: ${message.author}  \n**Destek Mesajı**: ${mesaj}`)
        .setFooter("Canlı Destek")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
client.channels.get('706299592861417503').send('<@&708289882178715718>')
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
}
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0
};
exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'yardım'
};