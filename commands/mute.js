module.exports = {
    name: 'mute',
    description: "Mute players with this command",
    execute(message, args){
        if (message.member.roles.cache.has('800465139727990794')){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                if (memberTarget.roles.cache.has('808030085386993664')){
                    message.channel.send('The player you mentioned has already been muted!')
                }else{
                    memberTarget.roles.add('808030085386993664')
                    message.channel.send('The user you have mentioned has been muted!')
                }
            }else{
                message.channel.send('The member mentioned isnt valid or you have not mentioned anyone to mute.')
            }
        }else{
            message.channel.send('You dont have the permissions to use this command!')
        }
    }
}