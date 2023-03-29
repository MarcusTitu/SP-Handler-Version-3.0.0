module.exports = {
  name: 'say',
  description: 'Repeats what you say',
  emoji: '🎱',
  run: async (client, message, args, Discord) => {

if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send("**You Do Not Have Sufficient Permissions! - [MANAGE_GUILD]**");

    const sayM = args.join(' ');
    message.delete().catch(err => console.log(err))
    message.channel.send({ content: sayM})
  }
}