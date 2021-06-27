const Discord = require('discord.js');
exports.run = async (client, message, args) => {
        var listee=["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];
        var secenekler=" ";
        var yazi = args.slice(0).join(' ');
        var baslik = yazi.split("+")[1];
        if(yazi.split("/").length>10) return message.channel.send("En fazla 9 seçenek olabilir");
        for(var i = 1;i<yazi.split("/").length;i++){
            var secenek = yazi.split("/")[i];
            secenekler+=i+"-"+secenek+"\n";
        }
        message.channel.send(new Discord.MessageEmbed().setTitle(baslik).setDescription(secenekler).setColor("RANDOM")).then(message=>{
            for(var ii=0;ii<yazi.split("/").length-1;ii++){
                message.react(listee[ii]);
            }
        })
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
}
exports.help = {
    name: 'anket'
}