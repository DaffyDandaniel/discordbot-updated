const Discord = require('discord.js');
const client = new Discord.Client();
var noblox = require('noblox.js')
const config = require('../rankingconfig.json')

const prefix = '?';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot Online');
    client.user.setActivity(`My owner Test me.`, { type: 'Watching'}).catch(console.error);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        return client.commands.get('help').execute(message, args);
    } else if (command == 'setrank'){
        return client.commands.get('setrank').execute(message, args, config)
    } else if (command !== ''){
        return;
        if (command.includes('?')) return;
        if (message.deletable) message.delete();

        const ReplyEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Unknown Command')
        .setDescription(`The command you have attempted to run (${message}) either does not exist or there was an error processing that command.\n\nIf this persists with a valid command, please contact the bot developer (DaffyDandaniel | <@347711540700512256>) ASAP.`)
        .setFooter('T&LSCP | Unknown Command Ran');

        return message.channel.send(ReplyEmbed).then(m => m.delete({ timeout: 4500 }));
    }
});

client.on("messageDelete", message => {
    return;
    if (message.author.id === '807936645377949706') return;
    const logchannel = message.guild.channels.cache.find(channel => channel.id === '819661989164744714')

    const embed = new Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTimestamp()
    .setTitle('Message Deleted')
    .setDescription(`A message has been deleted in the server!\n\n*Info:*\n**Message Author:** ${message.author}\n**Deleted in:** ${message.channel}\n\n**Message:** ${message}`)
    .setFooter('T&LSCP | Message Deleted')

    return logchannel.send(embed);
})

client.login(process.env.token);
