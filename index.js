const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client();

bot.on('ready', () => { 
	console.log('BOT ONLINE');
});


bot.on('message', msg => {
	if (msg.content === `${prefix}ping`) {
		msg.channel.send('Pong.');
	} else if (msg.content === `${prefix}`) {
		msg.channel.send('Boop.');
	} else if (msg.content === `${prefix}server`) {
		msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
	} else if (msg.content === `${prefix}user-info`) {
		msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
	}
});


bot.login(token);
