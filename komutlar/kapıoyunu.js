const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 
    var kisid = message.author.id,s=0,ks=0,ss=0;
            message.channel.send(new Discord.MessageEmbed()
            .setImage("https://i.ytimg.com/vi/kEycGAayxiQ/0.jpg")).then(message=>{
                setTimeout(function(){
                    if(ks==0){
                        message.edit(new Discord.MessageEmbed()
                        .setTitle("Siz düşünürken arkadan bir Kaplan gelip sizi yedi ! Daha hızlı olmanız gerek"));
                        ss++;
                    }
                },10000)
                var mesajid=message.id;
                message.react("1️⃣");
                message.react("2️⃣");
                message.react("3️⃣");
                client.on("messageReactionAdd",async(reaction,user)=>{
                    if(ss==0){
                        if(s==0){
                            if(reaction.message.id==mesajid){
                                if(user.id==kisid){
                                    if(reaction.emoji.name=="1️⃣"){
                                        s++;
                                        var sayii = sayiliste[Math.floor(Math.random()*3)];
                                        if(sayii==1){
                                            ks++;
                                            message.edit(new Discord.MessageEmbed()
                                            .setTitle("Doğru kapıyı seçtiniz ve hazinenin sahibi oldunuz!"));
                                        }else{
                                            ks++;
                                            message.edit(new Discord.MessageEmbed()
                                            .setTitle("Yanlış kapıyı seçtiniz ve Aslanlara yem oldunuz!"));
                                        }
                                    }
                                    else if(reaction.emoji.name=="2️⃣"){
                                        s++;
                                        var sayii = sayiliste[Math.floor(Math.random()*3)];
                                        if(sayii==2){
                                            ks++;
                                            message.edit(new Discord.MessageEmbed()
                                            .setTitle("Doğru kapıyı seçtiniz ve hazinenin sahibi oldunuz!"));
                                        }else{
                                            ks++;
                                            message.edit(new Discord.MessageEmbed()
                                            .setTitle("Yanlış kapıyı seçtiniz ve dondurucu soğuktan öldünüz!"));
                                        }
                                    }
                                    else if(reaction.emoji.name=="3️⃣"){
                                        s++;
                                        var sayii = sayiliste[Math.floor(Math.random()*3)];
                                        if(sayii==3){
                                            ks++;
                                            message.edit(new Discord.MessageEmbed()
                                            .setTitle("Doğru kapıyı seçtiniz ve hazinenin sahibi oldunuz!"));
                                        }else{
                                            ks++;
                                            message.edit(new Discord.MessageEmbed()
                                            .setTitle("Yanlış kapıyı seçtiniz ve Yılanlar sizi zehirledi!"));
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        message.edit(new Discord.MessageEmbed()
                        .setTitle("İş işten geçti artık kapı seçemezsin :D"))
                    }
                })
            })
    }
    exports.conf = {
      enabled: false,
      guildOnly: false,
      aliases: [],
      permLevel: 0,
    }
    exports.help = {
        name: 'kapı oyunu'
    }