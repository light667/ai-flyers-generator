// Fonctions de partage social pour viralité

// Générer l'URL avec les données de la carte
function generateShareUrl() {
    const params = new URLSearchParams({
        shared: '1',
        type: currentFlyer.type,
        recipient: currentFlyer.recipient,
        tone: currentFlyer.tone,
        theme: currentFlyer.theme || 'moderne',
        palette: currentFlyer.palette || 'parDefaut',
        fontStyle: currentFlyer.fontStyle || 'inter',
        message: currentFlyer.message || ''
    });
    
    // Ajouter la signature si présente
    if (currentFlyer.signature && currentFlyer.signature.enabled && currentFlyer.signature.senderName) {
        params.append('signatureEnabled', '1');
        params.append('senderName', currentFlyer.signature.senderName);
        if (currentFlyer.signature.relation) {
            params.append('senderRelation', currentFlyer.signature.relation);
        }
    }
    
    return `${window.location.origin}?${params.toString()}`;
}

// Partager sur Facebook
function shareOnFacebook() {
    const shareUrl = encodeURIComponent(generateShareUrl());
    const shareText = encodeURIComponent(`🎉 J'ai créé ma carte ${currentFlyer.type} personnalisée avec l'IA ! Regarde :`);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`, '_blank', 'width=600,height=400');
}

// Partager sur Twitter
function shareOnTwitter() {
    const shareUrl = generateShareUrl();
    const shareText = encodeURIComponent(`🎨 J'ai créé une superbe carte ${currentFlyer.type} avec l'IA!\n\n✨ Regarde-la ici:\n👉 ${shareUrl}\n\n#AI #CartePersonnalisée #Vœux2026`);
    window.open(`https://twitter.com/intent/tweet?text=${shareText}`, '_blank', 'width=600,height=400');
}

// Partager sur Instagram (copie le lien)
function shareOnInstagram() {
    const shareUrl = generateShareUrl();
    const shareText = `🎉 Regarde ma carte ${currentFlyer.type} personnalisée!\n👉 ${shareUrl}`;
    
    // Copier le lien dans le presse-papiers
    navigator.clipboard.writeText(shareText).then(() => {
        alert('✅ Lien copié! Colle-le dans ta story Instagram 📸\n\n' + shareText);
    }).catch(() => {
        alert(`📸 Partage sur Instagram:\n\n${shareText}\n\n(Copie ce message manuellement)`);
    });
}

// Nouveaux backgrounds pour les types ajoutés
const newBackgrounds = {
    'saint-valentin': {
        gradient: ['#ff1744', '#ff4081', '#f50057'],
        emoji: '💖',
        decorEmojis: ['💕', '💘', '💞', '🌹', '💋'],
        pattern: 'hearts',
        title: '💖 JOYEUSE SAINT-VALENTIN 💖'
    },
    'fete-meres': {
        gradient: ['#ec407a', '#f48fb1', '#fce4ec'],
        emoji: '🌸',
        decorEmojis: ['🌺', '🌼', '🌷', '💐', '❤️'],
        pattern: 'hearts',
        title: '🌸 BONNE FÊTE MAMAN 🌸'
    },
    'fete-peres': {
        gradient: ['#1976d2', '#42a5f5', '#90caf9'],
        emoji: '👨',
        decorEmojis: ['🏆', '⭐', '👊', '🚀', '🏅'],
        pattern: 'minimal',
        title: '👨 BONNE FÊTE PAPA 👨'
    },
    'mariage': {
        gradient: ['#ffffff', '#fce4ec', '#f8bbd0'],
        emoji: '💍',
        decorEmojis: ['💖', '🤵', '🤷', '🎉', '✨'],
        pattern: 'hearts',
        title: '💍 FÉLICITATIONS 💍'
    },
    'naissance': {
        gradient: ['#81c784', '#aed581', '#ffeb3b'],
        emoji: '👶',
        decorEmojis: ['🎈', '⭐', '🎀', '💛', '🌼'],
        pattern: 'balloons',
        title: '👶 BIENVENUE BÉBÉ 👶'
    },
    'diplome': {
        gradient: ['#0d47a1', '#1976d2', '#ffd700'],
        emoji: '🎓',
        decorEmojis: ['🏆', '⭐', '📚', '🏅', '🎉'],
        pattern: 'minimal',
        title: '🎓 FÉLICITATIONS 🎓'
    },
    'retraite': {
        gradient: ['#ff6f00', '#ff9100', '#ffc107'],
        emoji: '🎉',
        decorEmojis: ['🎈', '✨', '🎆', '🍾', '🏆'],
        pattern: 'confetti',
        title: '🎉 BONNE RETRAITE 🎉'
    },
    'merci': {
        gradient: ['#7cb342', '#9ccc65', '#fff9c4'],
        emoji: '🙏',
        decorEmojis: ['💚', '✨', '🌼', '⭐', '💖'],
        pattern: 'hearts',
        title: '🙏 MERCI BEAUCOUP 🙏'
    }
};

// Ajouter à la fin du fichier script.js existant
console.log('✅ Nouveaux types et partage social activés!');
