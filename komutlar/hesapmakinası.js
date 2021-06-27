const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  var islem = eval(args.slice(0).join(""));
        if(!islem) return message.channel.send("Lütfen bir işlem girin.")
        message.channel.send(islem);
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
}
exports.help = {
    name: 'hesap makinası'
}