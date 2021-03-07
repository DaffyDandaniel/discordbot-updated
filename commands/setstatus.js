module.exports = {
    name: 'setstatus',
    description: "Sets the Status of the bot",
    execute(message, args, client){
        if(!args.length) return;

        if(args.length !== '1') return;

        if(args === 'online'){
            return client.setStatus('online');
        }

        if(args === 'idle'){
            return client.setStatus('idle');
        }

        if(args === 'dnd'){
            return client.setStatus('dnd');
        }

        if(args === 'invisible'){
            return;
        }
    }
}