module.exports = {
    name: 'ban',
    description: "Ban players with this command",
    execute(message, args){
        if (message.member.roles.cache.has('800465139727990794')){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send('User has been banned from the server.')
            }else{
                message.channel.send('The member mentioned isnt valid or you have not mentioned anyone to ban.')
            }
        }else{
            message.channel.send('You dont have the permissions to use this command!')
        }
    }
}