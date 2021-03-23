module.exports = {
    name: 'inviteleaderboard',
    description: "Shows the top 3 inviters on the server.",
    execute(message, args){
        const { guild } = message

        guild.fetchInvites().then((invites) => {
            const Counter = {}

            invites.forEach((invite) => {
                const { uses, inviter } = invite
                const { username, discriminator } = inviter

                const name = `${username}#${discriminator}`

                Counter[name] = (Counter[name] || 0) + uses
            })

            let reply = 'Top 3 Inviters on the ADO SMP:'

            const sort = Object.keys(Counter).sort(
                (a, b) => Counter[b] - Counter[a]
            )

            sort.length = 3

            for (const invite of sort) {
                const count = Counter[invite]
                reply += `/n/n${invite}: ${count} member(s)`
            }

            return message.channel.send(reply);
        })
    }
}