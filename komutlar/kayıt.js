const Discord = require("discord.js");
const data = require('quick.db');
exports.run = async (client, message, args) => {// chimp#6907
if(!message.member.hasPermission(`MANAGE_MESSAGES`)) return;
  
if(!args[0]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
  
let role = message.guild.roles.get(`708681876222640168`)// vatandaş rol id
let unregistered = message.guild.roles.get(`708280896393969735`)// Kayıtsız rol id
let channel = message.guild.channels.get(`707517187832807506`) || message.channel// Log kanal id girin, boş bırakırsanız komutun kullanıldığı kanala logu yollar.

let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(`${args[0]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.bot) return;
  
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor(`#fffff0`)
.setFooter(`#${message.channel.name} kanalında kullanıldı.`)

message.guild.members.get(kullanıcı.id).addRole(role.id)
message.guild.members.get(kullanıcı.id).removeRole(unregistered.id)
message.guild.members.get(kullanıcı.id).send(emb.setDescription(`**${message.guild.name}** sunucusunda ${message.author} tarafından kayıt edildin.`))

channel.send(
emb.setDescription(`${kullanıcı}, kullanıcısı kayıt edildi.`)
.addField(`Kayıt eden:`, message.author, true)
.addField(`Verilen rol:`, role.name, true)
.addField(`Alınan rol:`, unregistered.name, true))
  
// Çok isterseniz botun yolladığı mesaja tepki ekleyebilirsiniz.
// .then(m => m.react(``))
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k','kayıt'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt'
};