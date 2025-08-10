# 🚀 Quick Setup Guide

This guide will help you get your Bleed Bot Clone up and running in minutes!

## 📋 Prerequisites

- **Node.js** 16.9.0 or higher
- **npm** or **yarn** package manager
- **Discord Account** and **Discord Bot Token**

## 🔧 Step-by-Step Setup

### 1. Create Discord Bot Application

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **"New Application"**
3. Give your application a name (e.g., "Bleed Bot Clone")
4. Go to the **"Bot"** section in the left sidebar
5. Click **"Add Bot"**
6. Under **"Privileged Gateway Intents"**, enable:
   - ✅ **Presence Intent**
   - ✅ **Server Members Intent**
   - ✅ **Message Content Intent**
7. Save your changes
8. Copy the **Bot Token** (you'll need this later)

### 2. Configure Bot Permissions

1. Go to the **"OAuth2"** → **"URL Generator"** section
2. Under **"Scopes"**, select:
   - ✅ **bot**
   - ✅ **applications.commands**
3. Under **"Bot Permissions"**, select:
   - ✅ **Send Messages**
   - ✅ **Embed Links**
   - ✅ **Use External Emojis**
   - ✅ **Add Reactions**
   - ✅ **Manage Messages**
   - ✅ **Kick Members**
   - ✅ **Ban Members**
   - ✅ **Manage Roles**
   - ✅ **Manage Channels**
   - ✅ **Read Message History**
4. Copy the generated URL and open it in your browser
5. Select your server and authorize the bot

### 3. Configure Environment Variables

1. Create a `.env` file in the bot's root directory
2. Add the following content:
```env
DISCORD_TOKEN=your_bot_token_here
PREFIX=,
```

**Replace `your_bot_token_here` with the token you copied from step 1.**

### 4. Install Dependencies

Run this command in the bot's directory:
```bash
npm install
```

### 5. Start the Bot

```bash
# Development mode (auto-restart on changes)
npm run dev

# Production mode
npm start
```

You should see output like:
```
✅ BotName#1234 is now online!
📊 Serving 1 guilds
👥 Serving 100 users
```

## 🎯 Testing Your Bot

Once the bot is running, test these commands in your Discord server:

### Basic Commands
- `,ping` - Check if the bot is responsive
- `,help` - See all available commands
- `,info` - Get bot information

### Utility Commands
- `,afk I'm away` - Set AFK status
- `,avatar @user` - Show user avatar
- `,uptime` - Show bot uptime

### Tag Commands
- `,tag create welcome Welcome to our server!` - Create a tag
- `,tag list` - List all tags
- `,tag welcome` - View a specific tag

### Moderation Commands (requires permissions)
- `,kick @user [reason]` - Kick a user
- `,ban @user [duration] [reason]` - Ban a user
- `,clear 10` - Delete 10 messages
- `,lock` - Lock the current channel
- `,unlock` - Unlock the current channel
- `,forcenickname @user NewName` - Force change nickname
- `,roleadd @user @role` - Add a role to a user

## 🔧 Customization

### Changing Bot Prefix
Edit the `.env` file:
```env
DISCORD_TOKEN=your_token_here
PREFIX=?
```

### Customizing Bot Appearance
Edit `config.example.js` and rename it to `config.js`:
```javascript
module.exports = {
    prefix: ',',
    embedColor: '#FF6B6B',
    footerText: 'My Custom Bot | Made with ❤️'
};
```

## 🚨 Troubleshooting

### Bot doesn't respond to commands
- ✅ Check if the bot token is correct
- ✅ Ensure the bot has the required permissions
- ✅ Verify the prefix is set correctly (default: `,`)
- ✅ Check if the bot is online

### Commands not working
- ✅ Check bot permissions in the server
- ✅ Ensure command files are in the correct folders
- ✅ Check the console for error messages

### Bot crashes on startup
- ✅ Verify all dependencies are installed (`npm install`)
- ✅ Check the `.env` file format
- ✅ Ensure Node.js version is 16.9.0 or higher

## 📞 Getting Help

If you encounter issues:

1. **Check the console output** for error messages
2. **Verify your setup** using the troubleshooting guide above
3. **Check the README.md** for detailed documentation
4. **Create an issue** on the GitHub repository

## 🎉 Congratulations!

Your Bleed Bot Clone is now ready to use! The bot includes:

- ✅ **15+ Commands** across multiple categories
- ✅ **Moderation Tools** for server management
- ✅ **Utility Features** for information and AFK status
- ✅ **Tag System** for custom server content
- ✅ **Event Handling** for server interactions
- ✅ **Professional Embeds** with rich formatting

Enjoy your new Discord bot! 🎊
