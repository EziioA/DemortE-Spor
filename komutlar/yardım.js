const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
    if(args[0] === "Genel" || args[0] === "genel" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Genel', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Destek Sunucusu](https://discord.gg/RgKSxgHQbx)` + "** | **" + `[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=842863050381852733&scope=bot&permissions=805314622)`  + "** | **" + `[Altyapı Sunucusu](https://discord.gg/ugRPf2B7xq)`  + "** | **" + `[İnstagram](https://www.instagram.com/mustafaguducugs/?hl=tr)  `, false)
              return message.channel.send(Genel)
         
       
       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Sunucu" || args[0] === "sunucu") {
              let Sunucu = new Discord.MessageEmbed()
  .setAuthor('Sunucu', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Destek Sunucusu](https://discord.gg/RgKSxgHQbx)` + "** | **" + `[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=842863050381852733&scope=bot&permissions=805314622)`  + "** | **" + `[Altyapı Sunucusu](https://discord.gg/ugRPf2B7xq)`  + "** | **" + `[İnstagram](https://www.instagram.com/mustafaguducugs/?hl=tr)  `, false)
              return message.channel.send(Sunucu)
         
      

       return;
    }
//EĞLENCE KOMUTU
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Eğlence', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Destek Sunucusu](https://discord.gg/RgKSxgHQbx)` + "** | **" + `[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=842863050381852733&scope=bot&permissions=805314622)`  + "** | **" + `[Altyapı Sunucusu](https://discord.gg/ugRPf2B7xq)`  + "** | **" + `[İnstagram](https://www.instagram.com/mustafaguducugs/?hl=tr)  `, false)
   return message.channel.send(Eğlence)
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.MessageEmbed()
  .setAuthor('Moderasyon', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Destek Sunucusu](https://discord.gg/RgKSxgHQbx)` + "** | **" + `[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=842863050381852733&scope=bot&permissions=805314622)`  + "** | **" + `[Altyapı Sunucusu](https://discord.gg/ugRPf2B7xq)`  + "** | **" + `[İnstagram](https://www.instagram.com/mustafaguducugs/?hl=tr)  `, false)
   return message.channel.send(Moderasyon)
             
       
               return;
  }
     //SAHİP KOMUTU
  if(args[0] === "Sahip" || args[0] === "sahip" ) {
    let Sahip = new Discord.MessageEmbed()
   .setAuthor('Moderasyon', message.author.displayAvatarURL())
   .setColor('#2667FF')
   .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
         .addField("» Linkler", ` [Destek Sunucusu](https://discord.gg/RgKSxgHQbx)` + "** | **" + `[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=842863050381852733&scope=bot&permissions=805314622)`  + "** | **" + `[Altyapı Sunucusu](https://discord.gg/ugRPf2B7xq)`  + "** | **" + `[İnstagram](https://www.instagram.com/mustafaguducugs/?hl=tr)  `, false)
    return message.channel.send(Sahip)
              
        
                return;
   }
//TEMİZLE / SİL Komutu
  if(args[0] === "temizle" || args[0] === "temizle" ) {
    let Sahip = new Discord.MessageEmbed()
   .setAuthor('Moderasyon', message.author.displayAvatarURL())
   .setColor('#2667FF')
   .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'temizle').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
         .addField("» Linkler", ` [Destek Sunucusu](https://discord.gg/RgKSxgHQbx)` + "** | **" + `[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=842863050381852733&scope=bot&permissions=805314622)`  + "** | **" + `[Altyapı Sunucusu](https://discord.gg/ugRPf2B7xq)`  + "** | **" + `[İnstagram](https://www.instagram.com/mustafaguducugs/?hl=tr)  `, false)
    return message.channel.send(Sahip)
              
        
                return;
   }
  

//Botu Yazan KOMUTU
  if(args[0] === "yazan" || args[0] === "yazan" ) {
    let Sahip = new Discord.MessageEmbed()
   .setAuthor('Moderasyon', message.author.displayAvatarURL())
   .setColor('#2667FF')
   .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'yazan').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
         .addField("» Linkler", ` [Destek Sunucusu](https://discord.gg/RgKSxgHQbx)` + "** | **" + `[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=842863050381852733&scope=bot&permissions=805314622)`  + "** | **" + `[Altyapı Sunucusu](https://discord.gg/ugRPf2B7xq)`  + "** | **" + `[İnstagram](https://www.instagram.com/mustafaguducugs/?hl=tr)  `, false)
    return message.channel.send(Sahip)
              
        
                return;
   }
//8ball KOMUTU
  if(args[0] === "8ball" || args[0] === "8ball" ) {
    let Sahip = new Discord.MessageEmbed()
   .setAuthor('Moderasyon', message.author.displayAvatarURL())
   .setColor('#2667FF')
   .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === '8ball').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
         .addField("» Linkler", ` [Destek Sunucusu](https://discord.gg/RgKSxgHQbx)` + "** | **" + `[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=842863050381852733&scope=bot&permissions=805314622)`  + "** | **" + `[Altyapı Sunucusu](https://discord.gg/ugRPf2B7xq)`  + "** | **" + `[İnstagram](https://www.instagram.com/mustafaguducugs/?hl=tr)  `, false)
    return message.channel.send(Sahip)
              
        
                return;
   }
  
//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('RANDOM')
  .setDescription(`**Prefix:** \`${prefix}\` \n **Örnek:** \`${prefix}yardım Genel\``)
  .addField('Kategoriler:', `
  **[${prefix}kayıt dinle](https://discord.gg/BXYcF2qzWH)**
  **[${prefix}ses kayıt başlat](https://discord.gg/BXYcF2qzWH)**
  **[${prefix}ascii](https://discord.gg/BXYcF2qzWH)**
  **[${prefix}vakit](https://discord.gg/BXYcF2qzWH)**
  **[${prefix}korona](https://discord.gg/BXYcF2qzWH)**
  **[${prefix}kapı oyunu](https://discord.gg/BXYcF2qzWH)**
  **[${prefix}şişe cevir](https://discord.gg/BXYcF2qzWH)**
  **[${prefix}yazan](https://discord.gg/BXYcF2qzWH)**
  **[${prefix}sil](https://discord.gg/BXYcF2qzWH)** 
  **[${prefix}8ball](https://discord.gg/BXYcF2qzWH)**
  **[${prefix}avatar](https://discord.gg/BXYcF2qzWH)**
  **[${prefix}rolver](https://discord.gg/BXYcF2qzWH)**
  **[${prefix}rolal](https://discord.gg/BXYcF2qzWH)**
  `)
  .addField("» Linkler", ` [Destek Sunucusu](https://discord.gg/RgKSxgHQbx)` + "** | **" + `[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=842863050381852733&scope=bot&permissions=805314622)`  + "** | **" + `[Altyapı Sunucusu](https://discord.gg/ugRPf2B7xq)`  + "** | **" + `[İnstagram](https://www.instagram.com/mustafaguducugs/?hl=tr)  `, false)

  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    
//Mustafa Güdücü TARAFINDAN YAPILMIŞTIR 2021 DE YENİLENMİŞTİR!

  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "Genel" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'yardım',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
    usage: 'yardım', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };
