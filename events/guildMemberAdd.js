module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        const guild = member.guild;
        const user = member.user;
        
        // Try to find a welcome channel
        const welcomeChannel = guild.systemChannel || 
                             guild.channels.cache.find(channel => 
                                 channel.type === 0 && 
                                 channel.name.toLowerCase().includes('welcome') &&
                                 channel.permissionsFor(guild.members.me).has('SendMessages')
                             ) ||
                             guild.channels.cache.find(channel => 
                                 channel.type === 0 && 
                                 channel.permissionsFor(guild.members.me).has('SendMessages')
                             );
        
        if (welcomeChannel) {
            const welcomeEmbed = {
                color: 0xFF6B6B,
                title: '🎉 Welcome!',
                description: `Welcome **${user.tag}** to **${guild.name}**!\n\nWe're glad to have you here! 🎊\n\n**Member Count:** ${guild.memberCount}`,
                thumbnail: {
                    url: user.displayAvatarURL({ dynamic: true })
                },
                footer: {
                    text: 'Bleed Bot Clone | Made with ❤️'
                },
                timestamp: new Date()
            };
            
            welcomeChannel.send({ embeds: [welcomeEmbed] }).catch(console.error);
        }
        
        console.log(`👋 ${user.tag} joined ${guild.name}`);
    }
};
