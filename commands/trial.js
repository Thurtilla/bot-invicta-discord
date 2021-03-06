module.exports = {
	name: 'trial',
	description: 'Remove initiate status and adds trial',
	execute(message) {
		const Discord = require('discord.js');
		const commandChannel = '854851072857079837';
		if (!message.guild) return;
		if (message.channel.id != commandChannel) { return message.member.send('Wrong channel browski!'), message.delete({ timeout: 500 }); }
		if (!message.member.hasPermission('ADMINISTRATOR')) return;
		if (!message.guild.me.hasPermission('ADMINISTRATOR')) return;

		const trialRoleId = '854990524649308190';
		const recruitRoleId = '854996742944325652';
		const member = message.mentions.members.first();
		if (!member) return message.channel.send('Please mention a member to give trial to!');
		const trialRole = message.guild.roles.cache.get(trialRoleId);
		const recruitRole = message.guild.roles.cache.get(recruitRoleId);
		member.roles.add(trialRole)
			.then(() => {
				const embed = new Discord.MessageEmbed()
					.setColor('38761D')
					.setTitle('Accepted')
					.setDescription(`
					You have been approved and have been awarded the rank: Trial
					Take a look at <#854851072857079828> to assign yourself the correct roles.

					Whisper any of us ingame/discord "Beachedwhale", "Fenixo" or "Thurtilla" to get an invite to <Invicta>
					`)
					.setTimestamp()
					.setFooter('Welcome to: Invicta');
				member.send(embed);
				message.channel.send(`Added role ${trialRole.name} to ${member.displayName}`);
				member.roles.remove(recruitRole)
					.then(() => {
						message.channel.send(`Removed role ${recruitRole.name} from ${member.displayName}`);
					})
					.catch(error => {
						message.channel.send(`Error: ${error}`);
					});
			})
			.catch(error => {
				message.channel.send(`Error: ${error}`);
			});
	},
};