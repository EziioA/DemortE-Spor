const Discord = require('discord.js');
exports.run = function (client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Yetersiz İzin Hatası. Bu Komut İçin Mesajları Yönet Yetkim Olması Gerekiyor");
  if (!args[0]) return message.channel.send(":white_check_mark: :point_right: Beni Yazan Kişi Mustafa Güdücü :point_left: :white_check_mark:");
  message()
  message.channel(args[0]).then(() => {
    message.channel.send(`:white_check_mark: :point_right: Beni Yazan Kişi Mustafa Güdücü :point_left: :white_check_mark:`)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yazan'],
  permLevel: 1
};

exports.help = {
  name: 'yazan',
  description: 'Beni Yazan Kişiyi Gösterir.',
  usage: 'yazan '
};