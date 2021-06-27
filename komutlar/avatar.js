const Discord = require("discord.js");
exports.run = async (client, message, args) => {
var kisi,yazi;
        if(!message.mentions.users.first()){
            kisi = message.author;
            yazi = ":arrow_down: Avatarınız :arrow_down:  ";
        }else{
            kisi = message.mentions.users.first();
            yazi = ":arrow_down: Avatarı :arrow_down:  ";
        }
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(yazi)
            .setImage(kisi.displayAvatarURL()));
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
}
exports.help = {
    name: 'avatar'
}