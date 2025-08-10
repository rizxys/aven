module.exports = {
    name: 'guildCreate',
    execute(guild) {
        console.log(`🎉 Joined new guild: ${guild.name} (id: ${guild.id})`);
        
        // Try to send welcome message to system channel or first available channel
        const welcomeChannel = guild.systemChannel || 
                             guild.channels.cache.find(channel => 
                                 channel.type === 0 && channel.permissionsFor(guild.members.me).has('SendMessages')
                             );
        
        if (welcomeChannel) {
            const welcomeEmbed = {
                color: 0xFF6B6B,
                title: '🎉 Thanks for adding me!',
                description: `Hello **${guild.name}**! I'm a Bleed Bot clone with many useful features.\n\n**Quick Start:**\n• Use \`${guild.client.config.prefix}help\` to see all commands\n• Use \`${guild.client.config.prefix}setup\` to configure the bot\n• Use \`${guild.client.config.prefix}info\` to learn more about me\n\n**Key Features:**\n• 🛡️ Moderation commands\n• 🛠️ Utility tools\n• 📝 Tag system\n• 📊 Server statistics\n• 😴 AFK status management\n\n**Support:**\nIf you need help, use \`${guild.client.config.prefix}support\` for assistance.`,
                thumbnail: {
                    url: guild.client.user.displayAvatarURL()
                },
                footer: {
                    text: 'Bleed Bot Clone | Made with ❤️'
                },
                timestamp: new Date()
            };
            
            welcomeChannel.send({ embeds: [welcomeEmbed] }).catch(console.error);
        }
    }
};
