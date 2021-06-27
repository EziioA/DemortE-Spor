//MGCode....Rol Al Gelişmiş........................................................................Komutlar.

const Discord = require("discord.js");

exports.run = async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Yetkin yok");
        if (!message.member.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Yetkim yok");
        let rMember = message.guild.member(message.mentions.users.first());
        let role = message.mentions.roles.first();
        if(!role||!rMember) return message.channel.send("Doğru kullanım ``"+prefix+"rolkaldır <@kişi> <@rol>``");
        if(rMember.hasPermission("MANAGE_ROLES")) return message.channel.send("Bu kişinin rollerini değiştiremem.")
        if(!rMember.roles.cache.get(role.id)) return message.channel.send(new Discord.MessageEmbed().setTitle("Kullanıcı zaten bu rolde değil"))
        rMember.roles.remove(role.id);
        message.channel.send(new Discord.MessageEmbed().setTitle("Rol Kaldırma İşlemi").addField("Kaldıran ; ",message.author.username).addField("Kaldırılan ; ",message.mentions.users.first()).addField("Kaldırılan Rol ; ",message.mentions.roles.first()).setColor("GREEN"));
    
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
}
exports.help = {
    name: 'rolal'
}

//MGCode....Rol Al Gelişmiş son...................................................................................