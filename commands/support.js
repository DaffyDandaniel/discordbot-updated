const Discord = require('discord.js');

const ticketcag = '814229436052275201';

const ticketembed = new Discord.MessageEmbed();
const replyembed = new Discord.MessageEmbed();
const logembed = new Discord.MessageEmbed();

module.exports = {
    name: 'support',
    description: "Send a support ticket to the administration team.",
    execute(message, args){
        if (message.deletable) message.delete();

        const logchannel = message.guild.channels.cache.find(channel => channel.id === '813876800924942338');

        if(message.channel.id !== '814228291988619264'){
            replyembed.setColor('ORANGE')
            replyembed.setTitle('Command Error')
            replyembed.setDescription('You have attempted to contact support in the wrong channel. Please contact support inside the correct channel. (create-ticket)')
            replyembed.setFooter('ADO SMP Support Request Event || Command Error')

            message.channel.send(replyembed).then(m => m.delete({ timeout: 5500 }));

            logembed.setColor('YELLOW')
            logembed.setTitle('Command Logged || Support Request Event')
            logembed.setDescription(`User ${message.author} attempted to request support.\n\n**The command was unsuccessful.**\nError: User did not run the command in the correct channel.`)
            logembed.setFooter('ADO SMP || Bot Command was executed and logged successfully || Support')
            logembed.setTimestamp();

            return logchannel.send(logembed);
        }

        if(!args.length){
            replyembed.setColor('ORANGE')
            replyembed.setTitle('Command Error')
            replyembed.setDescription('You have attempted to contact support, but you didnt provide a reason why. Please provide a reason why you require support.')
            replyembed.setFooter('ADO SMP Support Request Event || Command Error')

            message.channel.send(replyembed).then(m => m.delete({ timeout: 5500 }));

            logembed.setColor('YELLOW')
            logembed.setTitle('Command Logged || Support Request Event')
            logembed.setDescription(`User ${message.author} attempted to request support.\n\n**The command was unsuccessful.**\nError: User did not provide a reason on why they need support.`)
            logembed.setFooter('ADO SMP || Bot Command was executed and logged successfully || Support')
            logembed.setTimestamp();

            return logchannel.send(logembed);
        }

        message.guild.channels.create('open-ticket', {
            type: 'text',
        })
        .then((channel) => {
            channel.setParent(ticketcag)
        })
    }
}