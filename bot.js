const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` Tamamdır reisim.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

client.on('guildMemberAdd', async (member) => {
    var kanal = member.guild.channels.get('706299573102182430')
    kanal.send(`**🎉 ${member} Cerberus'a Hoşgeldin. Seninle Beraber Tam Tamına ${member.guild.memberCount} Kişiyiz!**`) ;
})
client.on('guildMemberAdd', (member) => {
    const db = require('quick.db'); 

         const channelss = db.fetch(`kkanal_${member.guild.id}`).replace("<#", "").replace(">", "")

       const kayıts = db.fetch(`ksistem_${member.guild.id}`)
             if (kayıts == undefined) {
             }
            if (kayıts == 'acik') {
             
                          member.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(member, {
                    VIEW_CHANNEL: false
                });
            });
                          
                 member.guild.channels.get(channelss).overwritePermissions(member, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true
                });
            
            }

        
  });
const activities_list = [
    "Cerberus Roleplay", // Sadece Tırnak Yani " İşareti İçinde Yazmakta Olan Mesajları Değiştirin.
    "Cerberus Roleplay", // Sadece Tırnak Yani " İşareti İçinde Yazmakta Olan Mesajları Değiştirin.
    "Cerberus Roleplay", // Sadece Tırnak Yani " İşareti İçinde Yazmakta Olan Mesajları Değiştirin.
    ]; 

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // Bu Kısımları Ellemeyin
        client.user.setActivity(activities_list[index]); // Bu Kısımları Ellemeyin.
    }, 3000); // Selam 1 Saniye = 1000 MiliSaniye Yapar - Kısacası Böyle Bırakırsan - 3 Saniyede 1 Değişir. 
});

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'selamün aleyküm'||
      msg.content.toLowerCase() === 'selamun aleyküm'||
      msg.content.toLowerCase() === 'sa'||
      msg.content.toLowerCase() === 'selam') {
    await msg.react('🇦');
    await msg.react('🇸');
  }
});

var prefix = ayarlar.prefix;
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
    require('./util/eventLoader')(client);

};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.on('guildMemberAdd', async (member, guild, message) => {
 
  const express = require("express");
const http = require("http");
const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " BOT Aktif.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_NAME}.glitch.me`);
}, 1000 * 60 * 3);
});
client.on("guildMemberAdd", member => {
  let guild = member.guild;
  let user = client.users.get(member.id);
  const channel = member.guild.channels.find(c => c.id === '706299573102182430')
  if (!channel) return;
  let kullanıcı = client.users.get(member.id)
  const kurulus = new Date().getTime()- kullanıcı.createdAt.getTime();
  let prime;
  if (kurulus < 1296000000) prime = 'Güvenilir Değil!'
  if (kurulus > 1296000000) prime = 'Güvenilir!'
  

  const embed = new Discord.RichEmbed()
   .setColor('BLACK')
   .setImage(
      "https://cdn.discordapp.com/attachments/692422331800354887/693273274095894618/giphy_4.gif"
    )
   .setAuthor("Sunucuya Hoşgeldin!", guild.iconURL)
   .setDescription(
      `**Hoşgeldin** <@${member.user.id}> **Seninle Beraber** **__${guild.memberCount}__** **Kişiyiz!**`
    )
   .addField(`Bu Kullanıcı Güvenilirmi?:`, prime)
   .setFooter("Cerberus Roleplay", guild.iconURL);
  channel.sendEmbed(embed);
   });
client.on("message", msg => {
  if(msg.author.bot == true) return
        const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party",];
        if (reklam.some(küfür => msg.content.includes(küfür))) {
        
            if (!msg.member.hasPermission("ADMINISTRATOR")) {
                  msg.delete();
                           msg.channel.send(`${msg.author} Reklam Yapıyor Terbiyesiz! <@&708686078894145546> <@&708687355048886273> Arkadaşla İlgilenelim Lütfen.`)
            }
        }
    

          }) 