const Discord = require('discord.js');
const client = new Discord.Client();

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
    client.user.setActivity(`ADO SMP (${prefix}help)`, { type: 'WATCHING' }).catch(console.error);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'apply'){
        client.commands.get('apply').execute(message, args);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command == 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if (command == 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command == 'report'){
        client.commands.get('report').execute(message, args, client);
    } else if (command == 'smpstaff'){
        client.commands.get('smpstaff').execute(message, args);
    } else if (command == 'say'){
        client.commands.get('say').execute(message, args);
    }
});

client.on('guildMemberAdd', guildMember => {
    let welcomerole1 = guildMember.guild.roles.cache.find(role => role.id === '800467642930561074')
    let welcomerole2 = guildMember.guild.roles.cache.find(role => role.id === '800467872946061312')
    let welcomerole3 = guildMember.guild.roles.cache.find(role => role.id === '800467563846696960')
    let welcomerole4 = guildMember.guild.roles.cache.find(role => role.id === '800467734139764766')
    let welcomechannel = guildMember.guild.channels.cache.get('812118346271162378')
    let ruleschannel = guildMember.guild.channels.cache.get('804125503773868092')
    let appchannel = guildMember.guild.channels.cache.get('805015019670470666')
    let chatchannel = guildMember.guild.channels.cache.get('800458925290815530')
    let botchannel = guildMember.guild.channels.cache.get('801489803089936444')
    const embed = new Discord.MessageEmbed();

    guildMember.roles.add(welcomerole1)
    guildMember.roles.add(welcomerole2)
    guildMember.roles.add(welcomerole3)
    guildMember.roles.add(welcomerole4)

    embed.setColor('ORANGE')
    embed.setTimestamp()
    embed.setFooter('ADO SMP | A new member has joined!')
    embed.setTitle('Welcome to the server!')
    embed.setDescription(`A new member has joined the server! Please welcome <@${guildMember.user.id}> to the server!\n\n**Rules:**\nYou can find the rules in this channel: ${ruleschannel}\n\n**SMP Application:** You can apply for the SMP here: ${appchannel}\n\n**Public Chat and bot commands:**\nYou can talk to others in the server here: ${chatchannel}\nYou can use bots in the server here: ${botchannel}\n\n*We hope you enjoy your time inside the ADO SMP server!*`);

    return welcomechannel.send(embed);
});

client.login(process.env.token);
