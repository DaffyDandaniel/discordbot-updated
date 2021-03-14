module.exports = {
    name: 'iupdate',
    description: "Updates another person's nickname to the correct nickname.",
    execute(message, args){
        let Member = message.mentions.members.first()

        if(Member.roles.cache.has('800465139727990794')){
            console.log('authorized')
        } else {
            return message.channel.send('*You do not have permission to run this command!*')
        }

        if(!Member){
            return message.channel.send('`The user you specified does not exist or you did not ping anyone to update.`')
        }

        if(Member.user.bot){
            return message.channel.send('`You cannot update me!`')
        }

        if(Member.roles.cache.has('800460004683415594')){
            message.channel.send('`I cannot update this person as their rank is too high!`')
        }

        if(Member.roles.cache.has('808438330995245116')){
            message.channel.send('`I cannot update this person as their rank is too high!`')
        }

        if(Member.roles.cache.has('804371535246000179')){
            message.channel.send('`I cannot update this person as their rank is too high!`')
        }

        if(Member.roles.cache.has('800465139727990794')){
            message.channel.send('`I cannot update this person as their rank is too high!`')
        }

        if(Member.roles.cache.has('800465357374488628')){
            Member.setNickname(`MOD | ${message.author.username}`)
            return message.delete();
        }

        if(Member.roles.cache.has('820637264203087903')){
            Member.setNickname(`MIT | ${message.author.username}`)
            return message.delete();
        }


        if(Member.roles.cache.has('800468137870360636')){
            Member.setNickname(`SB | ${message.author.username}`)
            return message.delete();
        }

        if(Member.roles.cache.has('800467563846696960')){
            Member.setNickname(`MEMBER | ${message.author.username}`)
            return message.delete();
        }
    }
}