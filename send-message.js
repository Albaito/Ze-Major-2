require('dotenv').config();
const {
    Client,
    IntentsBitField,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const roles = [
    {
        id: '1043387428322426980',
        label: 'Darktide',
    },
    {
        id: '1009261992038629386',
        label: 'SCP: Secret Lab',
    },
    {
        id: '1095960057730039830',
        label: 'VR Chat',
    },
    {
        id: '1058222783395541043',
        label: 'Watch Along'
    },
    {
        id: '1095462076610252882',
        label: 'Arma 3'
    }
];


client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('1058229816630972476')
        if (!channel) return;

        const row = new ActionRowBuilder();
        
        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder()
                .setCustomId(role.id)
                .setLabel(role.label)
                .setStyle(ButtonStyle.Primary)
            );
        });
    
        await channel.send({
            conent: 'Claim or remove a role below.',
            components: [row],
        });
        process.exit();
    } catch (error) {
        console.log(error);
    }
});

client.login(process.env.TOKEN)