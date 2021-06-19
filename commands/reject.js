module.exports = {
	name: 'reject',
	description: 'Reject member and ask them to apply at a later date.',
	execute(message, args) {
		const Discord = require('discord.js');
		const commandChannel = '854851072857079837';
		if (!message.guild) return;
		if (message.channel.id != commandChannel) {
			return message.member.send('Wrong channel browski!'), message.delete({
				timeout: 500,
			});
		}
		if (!message.member.hasPermission('ADMINISTRATOR')) return;
		if (!message.guild.me.hasPermission('ADMINISTRATOR')) return;

		const member = message.mentions.members.first();
		if (!member) return message.channel.send('Please mention a member to reject and kick!');
		message.channel.send(args);
		const embed = new Discord.MessageEmbed()
			.setColor('a80000')
			.setTitle('Rejected')
			.setDescription(`
					We are sorry to inform you that you have been rejected at this time.
					You are welcome to apply at a later date.

					Thanks for applying, and hope you find great adventures!
					`)
			.setTimestamp()
			.setFooter('Welcome to: Invicta');
		member.send(embed);
		// member.kick();

	},
};