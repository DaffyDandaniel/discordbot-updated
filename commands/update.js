module.exports = {
    name: 'update',
    description: "Updates your Nickname to the correct nickname.",
    execute(message, args){
        if(message.author.roles.cache.has('800460004683415594')){
            return message.delete();
        }

        if(message.author.roles.cache.has('808438330995245116')){
            return message.delete();
        }

        if(message.author.roles.cache.has('804371535246000179')){
            return message.delete();
        }

        if(message.author.roles.cache.has('800465139727990794')){
            return message.delete();
        }

        if(message.author.roles.cache.has('800473969526308895')){
            return message.delete();
        }

        if(message.author.roles.cache.has('800465357374488628')){
            return message.author.setNickname(`MOD | ${message.author.username}`);
        }

        if(message.author.roles.cache.has('800468137870360636')){
            return message.author.setNickname(`SB | ${message.author.username}`);
        }

        if(message.author.roles.cache.has('800467563846696960')){
            return message.author.setNickname(`MEMBER | ${message.author.username}`);
        }
    }
}