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

client.login('"NTA1NzgzNzI5MDk3Mjc3NDcy.DrY0WA.vcgo4-pu5hGxo-QCjj1iOAF27rw"');


