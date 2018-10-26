const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");


client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('bcall')){
if(!message.author.id === '474573718967025665') return;
message.channel.sendMessage('#DONE')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

A7MD.login('MzczMTc3MTc0MDM3MTAyNjAz.DrTL6g.QsYozZB_BAHCH2Bnjp4kalA6spQ');
