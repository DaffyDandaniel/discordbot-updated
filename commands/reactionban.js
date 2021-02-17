module.exports = {
    name: 'reactionban',
    description: "Reactionban any users who need reactionbanning.",
    execute(message, args, client){
        if (message.member.roles.cache.has('800465139727990794')){
            const warningchannel = client.channels.cache.find(channel => channel.id === '809191563133583370');
            const member = message.mentions.users.first();
            if (member){
                const memberTarget = message.guild.members.cache.get(member.id);
                if (memberTarget.roles.cache.has('809483432505114645')){
                    message.channel.send('The user you attempted to reaction ban is already reaction banned. : /')
                }else{
                    if (args[2] === 'temp'){
                        memberTarget.roles.add('809483432505114645')
                        warningchannel.send(`Person punished: ${member} (${member.id})\nPerson who warned: ${message.author}\nDate and time of warn: The bot cannot specify the date and time of this warn.\nReason for punishment: ${args[1]}\nPunishment Given: Reaction Ban (Temporary)`)
                        message.channel.send(`The user specified has been reactionbanned. (${member})`)
                    }else if (args[2] === 'perm'){
                        memberTarget.roles.add('809483432505114645')
                        warningchannel.send(`Person punished: ${member} (${member.id})\nPerson who warned: ${message.author}\nDate and time of warn: The bot cannot specify the date and time of this warn.\nReason for punishment: ${args[1]}\nPunishment Given: Reaction Ban (Permament)`)
                        message.channel.send(`The user specified has been reactionbanned. (${member})`)
                    }else{
                        message.channel.send(`You have not specified a period to Reaction ban the user. (temp, perm)`)
                    }
                }
            }else{
                message.channel.send(`The person you tried to reactionban is not a valid user.`)
            }
        }
    }
}