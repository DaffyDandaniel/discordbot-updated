module.exports = {
  name: 'rank',
  description: 'Ranks a player in the assigned group.',
  async execute(message, args, noblox){
    const robloxusername = args[0]
    const robloxid = await noblox.getIdFromUsername(robloxusername)
    .then((robloxid) => {

      const rank = parseInt(args[1])
      await noblox.setRank({ group: 4085307, target: robloxid, rank: rank })
      const rankname = noblox.getRankNameInGroup(4085307, robloxid)
      .then(() => message.reply(`${robloxusername} has successfully been ranked to ${rankname}.`))
      .catch((err) => {
      message.reply(`**Failed to rank user ${robloxusername}. Please try again later or contact DaffyDandaniel#3632.**`)
      console.log(err)
      })
    })
    .catch((err) => {
      message.reply('I Couldnt find the username provided. Please re-attempt.\n\n**If you are legit entering the correct username and it still provides error, Please contact DaffyDandaniel#3632.')
      console.log(err)
    })
  }
}