// ==================================================
// 💝 VALENTINE WEBSITE CONFIGURATION 💝
// Dreamy Night Theme
// ==================================================

const VALENTINE_CONFIG = Object.freeze({

    // ----------------------------------
    // 💌 Basic Info
    // ----------------------------------
    valentineName: "Shanen Lycka",
    pageTitle: "Will You Be My Valentine? ✨🌙",

    // ----------------------------------
    // 🌌 Floating Background Emojis (NEW)
    // ----------------------------------
    floatingEmojis: {
        stars: ['✨', '🌟', '💫'],
        moons: ['🌙', '🌌'],
        sparkles: ['🔮', '⭐']
    },

    // ----------------------------------
    // ❓ Questions Flow
    // ----------------------------------
    questions: {
        first: {
            text: "Do you have feelings for me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I’ve been falling for you every night 🌙💜"
        },

        second: {
            text: "How deep does your love go?",
            startText: "This deep ✨",
            nextBtn: "Next 🌌"
        },

        third: {
            text: "Will you be my Valentine on February 14, 2026? 🌙",
            yesBtn: "Yes, always 💜",
            noBtn: "No"
        }
    },

    // ----------------------------------
    // 📊 Love Meter Messages
    // ----------------------------------
    loveMessages: {
        normal: "That glow feels just right ✨",
        high: "This love is shining bright 🌟💜",
        extreme: "WOAH—THIS LOVE JUST LIT UP THE NIGHT SKY 🌌💥"
    },

    // ----------------------------------
    // 🎉 Celebration Screen
    // ----------------------------------
    celebration: {
        title: "You’re my favorite star 💜✨",
        message: "Stay with me under the same sky tonight 🌙🤍",
        emojis: "✨🌙💜🌌"
    },

    // ----------------------------------
    // 🎨 Color Theme (COMPLETELY NEW)
    // ----------------------------------
    colors: {
        background: {
            start: "#2b1055",   // Deep violet
            end: "#0f2027"      // Midnight blue
        },
        buttons: {
            default: "#6c5ce7", // Soft neon purple
            hover: "#a29bfe"    // Lighter glow
        },
        text: "#f5f3ff"        // Soft off-white
    },

    // ----------------------------------
    // 🎬 Animation Settings
    // ----------------------------------
    animations: {
        float: {
            duration: "18s",
            distance: "60px"
        },
        bounceSpeed: "0.6s",
        heartExplosionScale: 1.4
    },

    // ----------------------------------
    // 🎵 Background Music
    // ----------------------------------
    music: {
        enabled: true,
        autoplay: true,
        url: "https://res.cloudinary.com/dunzzadhw/video/upload/v1770285585/Gigi_Perez_-_Sailor_Song_Lyrics_c83jbc.mp3",
        controls: {
            playText: "🎵 Play Music",
            stopText: "🔇 Stop Music"
        },
        volume: 0.35
    }
});

// Expose globally
window.VALENTINE_CONFIG = VALENTINE_CONFIG;
