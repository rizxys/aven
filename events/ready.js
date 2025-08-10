const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`✅ ${client.user.tag} is now online!`);
        console.log(`📊 Serving ${client.guilds.cache.size} guilds`);
        console.log(`👥 Serving ${client.users.cache.size} users`);
        
        // Set bot status
        client.user.setPresence({
            activities: [{ 
                name: `${client.config.prefix}help | ${client.guilds.cache.size} servers`, 
                type: ActivityType.Watching 
            }],
            status: 'online'
        });
        
        // Update status every 5 minutes
        setInterval(() => {
            const activities = [
                `${client.config.prefix}help | ${client.guilds.cache.size} servers`,
                `${client.config.prefix}help | ${client.users.cache.size} users`,
                `${client.config.prefix}help | Bleed Bot Clone`,
                `${client.config.prefix}help | Made with ❤️`
            ];
            
            const randomActivity = activities[Math.floor(Math.random() * activities.length)];
            
            client.user.setPresence({
                activities: [{ 
                    name: randomActivity, 
                    type: ActivityType.Watching 
                }],
                status: 'online'
            });
        }, 300000); // 5 minutes
    }
};
