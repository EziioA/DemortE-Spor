const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
 
  message.channel.send("Unutma soru evet / hayır cevaplanabilir olsun.").then(m => m.delete(({ timeout: 500})));
   //!8ball question
   if(!args[1]) return message.reply("Soru 2 kelimeden fazla olsun!");
   let replies = ["Evet", "Hayır.", "Bilemem", "Tekrar sor!", "🤦🏼", "Emin Değilim!", "Bence Yapma", "Sen söyle", "Şüphesiz", "Şimdi tahmin edemem", "Şüpheliyim." ]; //bu kısımdan cevapları değiştirebilirsiniz.

  let result = Math.floor((Math.random() * replies.length));
  let question = args.join(" ");

  let ballembed = new Discord.MessageEmbed()

  .setAuthor(message.author.username)
  .setColor("#00ff00")
  .addField("Soru", question)
  .addField("Cevap", replies[result]);

 

  message.channel.send(`**${message.author}** Sorunuz düşünülüyor.`).then(async msg => {//Tırnak içindeki alanlarda değişiklik yapıp oluşan animasyon üzerinde istediğiniz gibi oynayabilirsiniz.
      setTimeout(() => {
          msg.edit('Düşünüyorum 😕');
      }, 1000);
      setTimeout(() => {
          msg.edit('Düşünüyorum.. 😏');
      }, 1500);
      setTimeout(() => {
          msg.edit('Düşünüyorum...😣');
      }, 2000);
      setTimeout(() => {
          msg.edit('Düşünüyorum..😫 ');
      }, 2000);
      setTimeout(() => {
          msg.edit('Düşünüyorum.....😯');
      }, 2500);
      setTimeout(() => {
          msg.edit('Düşünüyorum......😵');
      }, 3000);
      setTimeout(() => {
          msg.edit('Düşünüyorum.........😓');
      }, 3500);
      setTimeout(() => {
          msg.edit('🤓Buldum!').then(m => m.delete(({ timeout: 1000})));
      }, 4000);
      setTimeout(() => {
        message.channel.send(ballembed);
    }, 6000);
    });

    //...MGCode....








}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: '8ball'
};