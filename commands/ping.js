module.exports = {
	name: 'ping',
	description: 'Pog command',
	execute(message) {
		message.channel.send('POG');
	},
};