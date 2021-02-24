module.exports = {
    name: 'test',
    description: "test",
    execute(message, args){
        if(!args.length){
            return message.channel.send("No args!")
        }

        return message.channel.send(args)
    }
}