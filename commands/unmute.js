module.exports = {
    name: 'unmute',
    description: "Unmute players with this command",
    execute(message, args){
        if (message.member.roles.cache.has('800465139727990794')){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                if (memberTarget.roles.cache.has('808030085386993664')){
                    memberTarget.roles.remove('808030085386993664')
                    message.channel.send('The user you have mentioned has been unmuted!')
                }else{
                    message.channel.send('The player you mentioned is not muted currently! :flushed:')
                }
            }else{
                message.channel.send('The member mentioned isnt valid or you have not mentioned anyone to mute.')
            }
        }else{
            message.channel.send('You dont have the permissions to use this command!')
        }
    }
}