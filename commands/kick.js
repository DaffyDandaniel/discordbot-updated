const Discord = require('discord.js');

const success = new Discord.MessageEmbed();
const notvalid = new Discord.MessageEmbed();
const denied = new Discord.MessageEmbed();

const logembed = new Discord.MessageEmbed();

module.exports = {
    name: 'kick',
    description: "Kick Players with this command",
    execute(message, args){
        const logchannel = message.guild.channels.cache.find(channel => channel.id === '813876800924942338')
        if (message.member.roles.cache.has('800465139727990794')){
            const member = message.mentions.users.first();
            if(member){
                if (member.id !== message.author.id){
                    notvalid.setColor('ORANGE')
                    notvalid.setTitle('User Kick Event')
                    notvalid.setDescription(`You cannot kick yourself. O_O`)
                    notvalid.setFooter('ADO SMP Kick System || Restricted to Server Admin+ || ERROR')
                    notvalid.setTimestamp();

                    message.channel.send(notvalid)

                    logembed.setColor('YELLOW')
                    logembed.setTitle('Command Logged || User Kick Event')
                    logembed.setDescription(`User ${message.author} sucessfully ran the kick command in channel ${message.channel}.\n\n**The command was unsuccessful.**\nInfo: The user attempted to kick themselves. O_O`)
                    logembed.setFooter('ADO SMP Bot Command was executed || Kick')
                    logembed.setTimestamp();

                    return logchannel.send(logembed);
                }

                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                success.setColor('GREEN')
                success.setTitle('User Kick Event')
                success.setDescription(`The user you have specified (${member.id}) has been kicked from the server.\n\n*The user wont be kicked if they have the same abilities as you!*`)
                success.setFooter('ADO SMP Kick System || Restricted to Server Admin+')
                success.setTimestamp();

                message.channel.send(success)

                logembed.setColor('YELLOW')
                logembed.setTitle('Command Logged || User Kick Event')
                logembed.setDescription(`User ${message.author} sucessfully ran the kick command in channel ${message.channel}.\n\n**The command was successful.**\nInfo: The user ${member} was kicked from the server.`)
                logembed.setFooter('ADO SMP Bot Command was executed || Kick')
                logembed.setTimestamp();

                return logchannel.send(logembed);
            }else{
                notvalid.setColor('ORANGE')
                notvalid.setTitle('User Kick Event')
                notvalid.setDescription(`The user you attempted to tag is not valid or there was no user tagged.`)
                notvalid.setFooter('ADO SMP Kick System || Restricted to Server Admin+ || ERROR')
                notvalid.setTimestamp();

                message.channel.send(notvalid)

                logembed.setColor('YELLOW')
                logembed.setTitle('Command Logged || User Kick Event')
                logembed.setDescription(`User ${message.author} sucessfully ran the kick command in channel ${message.channel}.\n\n**The command was unsuccessful.**\nError: User did not tag anyone or user tagged is not a valid user.`)
                logembed.setFooter('ADO SMP Bot Command was executed || Kick')
                logembed.setTimestamp();

                return logchannel.send(logembed);
            }
        }else{
            denied.setColor('RED')
            denied.setTitle('User Kick Event')
            denied.setDescription(`You are not allowed to run this command.`)
            denied.setFooter('ADO SMP Kick System || Restricted to Server Admin+ || ERROR')
            denied.setTimestamp();

            message.channel.send(denied)

            logembed.setColor('YELLOW')
            logembed.setTitle('Command Logged || User Kick Event')
            logembed.setDescription(`User ${message.author} attempted to run the kick command in channel ${message.channel}.\n\n**The command was unsuccessful.**\nError: The user did not have the correct permissions to run the command.`)
            logembed.setFooter('ADO SMP Bot Command was executed || Kick')
            logembed.setTimestamp();

            return logchannel.send(logembed);
        }
    }
}