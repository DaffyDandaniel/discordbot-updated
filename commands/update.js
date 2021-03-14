module.exports = {
    name: 'update',
    description: "Updates your Nickname to the correct nickname.",
    execute(message, args){
        if(message.member.roles.cache.has('800460004683415594')){
            return message.delete();
        }

        if(message.member.roles.cache.has('808438330995245116')){
            return message.delete();
        }

        if(message.member.roles.cache.has('804371535246000179')){
            return message.delete();
        }

        if(message.member.roles.cache.has('800465139727990794')){
            return message.delete();
        }

        if(message.member.roles.cache.has('800473969526308895')){
            return message.delete();
        }

        if(message.member.roles.cache.has('800465357374488628')){
            message.member.setNickname(`MOD | ${message.author.username}`)
            return message.delete();
        }

        if(message.member.roles.cache.has('820637264203087903')){
            message.member.setNickname(`MIT | ${message.author.username}`)
            return message.delete();
        }

        if(message.member.roles.cache.has('800468137870360636')){
            message.member.setNickname(`SB | ${message.author.username}`)
            return message.delete();
        }

        if(message.member.roles.cache.has('800467563846696960')){
            message.member.setNickname(`MEMBER | ${message.author.username}`)
            return message.delete();
        }
    }
}