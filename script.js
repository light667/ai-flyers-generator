// État global
let currentFlyer = {
    type: '',
    recipient: '',
    tone: '',
    theme: 'moderne',
    message: ''
};

// Navigation
function showLanding() {
    document.getElementById('landingPage').classList.remove('hidden');
    document.getElementById('generatorPage').classList.add('hidden');
    document.getElementById('previewPage').classList.add('hidden');
}

function showGenerator() {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('generatorPage').classList.remove('hidden');
    document.getElementById('previewPage').classList.add('hidden');
}

function showPreview() {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('generatorPage').classList.add('hidden');
    document.getElementById('previewPage').classList.remove('hidden');
}

// Animation du compteur
let counter = 847;
setInterval(() => {
    counter += Math.floor(Math.random() * 3);
    document.getElementById('counter').textContent = counter;
}, 5000);

// Génération du message IA
async function generateMessage(type, recipient, tone) {
    // Essayer d'abord le backend sécurisé
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ type, recipient, tone })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.success && data.message) {
                return data.message;
            }
        }
    } catch (error) {
        console.log('Backend non disponible, utilisation des messages pré-générés');
    }

    // Fallback sur les messages pré-générés
    return getPreGeneratedMessage(type, recipient, tone);
}

// Messages pré-générés (fallback)
function getPreGeneratedMessage(type, recipient, tone) {
    const messages = {
        'nouvel an': {
            'fun': `Coucou ${recipient} ! 🎊✨\n\nQue 2025 t'apporte plein de bonheur, de réussite et de moments de folie ! Que cette nouvelle année soit remplie de rires, d'aventures incroyables et de projets qui déchirent ! 🚀🎉\n\nGros bisous et bonne année ! 🥳💖`,
            'sérieux': `Cher(e) ${recipient},\n\nEn cette nouvelle année 2025, je vous adresse mes meilleurs vœux de santé, de prospérité et de succès. Que cette année vous apporte satisfaction dans tous vos projets et moments précieux avec vos proches.\n\nMeilleurs vœux pour 2025.`,
            'chaleureux': `Mon cher ${recipient} 💝,\n\nJe te souhaite une merveilleuse année 2025 pleine de bonheur, de santé et de réussite. Que chaque jour t'apporte de belles surprises et que tes rêves deviennent réalité.\n\nAvec toute mon affection ! 🌟`
        },
        'noel': {
            'fun': `Hey ${recipient} ! 🎄🎅\n\nJoyeux Noël à toi ! Que le Père Noël te gâte comme jamais et que cette période soit magique ! Profite bien des fêtes, des bons plats et des moments en famille ! 🎁✨\n\nHo Ho Ho ! 🦌🔔`,
            'sérieux': `Cher(e) ${recipient},\n\nJe vous souhaite un très joyeux Noël entouré de vos proches. Que cette fête vous apporte paix, sérénité et moments de partage précieux.\n\nJoyeuses fêtes de fin d'année.`,
            'chaleureux': `Mon cher ${recipient} 🎄💖,\n\nJe te souhaite un Noël rempli de magie, de tendresse et de moments inoubliables. Que la chaleur des fêtes illumine ton cœur et celui de tes proches.\n\nGros câlins de Noël ! ⭐`
        },
        'anniversaire': {
            'fun': `JOYEUX ANNIVERSAIRE ${recipient} ! 🎉🎂🎈\n\nC'est ton jour spécial et tu mérites que ça déchire ! Profite à fond, fais la fête, mange du gâteau et surtout... amuse-toi comme un fou ! Que cette nouvelle année t'apporte tout ce que tu désires !\n\nBIG BISOUS ! 🎁🥳✨`,
            'sérieux': `Cher(e) ${recipient},\n\nEn ce jour spécial, je vous présente mes meilleurs vœux d'anniversaire. Que cette nouvelle année de votre vie soit marquée par la réussite, la santé et l'épanouissement personnel.\n\nJoyeux anniversaire.`,
            'chaleureux': `Joyeux anniversaire mon cher ${recipient} ! 🎂💖\n\nAujourd'hui, on célèbre ta présence dans nos vies ! Que cette journée soit remplie de joie, d'amour et de moments magiques. Tu es quelqu'un de spécial et tu mérites le meilleur !\n\nGros bisous et plein de bonheur ! 🎉✨`
        },
        'pro': {
            'fun': `Salut ${recipient} ! 💼🚀\n\nMerci pour cette super collaboration ! Que 2025 nous apporte encore plus de succès et de projets extraordinaires ensemble !\n\nBelle année à toute l'équipe ! 🎊`,
            'sérieux': `Cher(e) ${recipient},\n\nJe vous présente mes meilleurs vœux professionnels pour l'année 2025. Que cette nouvelle année soit synonyme de réussite, d'innovation et de croissance pour vous et votre entreprise.\n\nCordialement.`,
            'chaleureux': `Cher(e) ${recipient},\n\nMerci pour votre précieuse collaboration. Je vous souhaite une excellente année 2025 remplie de belles réussites professionnelles et personnelles.\n\nBien cordialement. 🌟`
        },
        'amour': {
            'fun': `Mon ${recipient} adoré ! 💕😍\n\nTu es ma personne préférée et je veux que 2025 soit notre meilleure année ! Plein d'amour, de fous rires et d'aventures ensemble !\n\nJe t'aime fort ! 💖🎊`,
            'sérieux': `Mon cher ${recipient},\n\nEn cette nouvelle année, je te renouvelle tout mon amour et mon engagement. Que 2025 renforce encore nos liens et nous apporte sérénité et bonheur partagé.\n\nAvec tout mon amour.`,
            'chaleureux': `Mon tendre ${recipient} 💝,\n\nJe te souhaite une merveilleuse année 2025 à mes côtés. Que notre amour grandisse chaque jour et que nous vivions mille et une belles choses ensemble.\n\nJe t'aime infiniment ! 💖✨`
        }
    };

    return messages[type]?.[tone] || `Cher(e) ${recipient},\n\nJe te souhaite une excellente année 2025 remplie de bonheur et de réussite !\n\nBien à toi.`;
}

// Gestion du formulaire
document.getElementById('flyerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const type = document.getElementById('type').value;
    const recipient = document.getElementById('recipient').value || 'toi';
    const tone = document.getElementById('tone').value;
    const theme = document.getElementById('theme').value;
    const customMessage = document.getElementById('customMessage').value.trim();
    
    // Afficher le loader
    document.getElementById('flyerForm').classList.add('hidden');
    document.getElementById('loader').classList.remove('hidden');
    
    // Générer le message (ou utiliser le message personnalisé)
    let message;
    if (customMessage) {
        message = customMessage;
    } else {
        message = await generateMessage(type, recipient, tone);
    }
    
    // Sauvegarder l'état
    currentFlyer = { type, recipient, tone, theme, message };
    
    // Créer le flyer
    await createFlyer(message, type, recipient);
    
    // Cacher le loader et afficher la prévisualisation
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('flyerForm').classList.remove('hidden');
    showPreview();
});

// Création du flyer avec Canvas
async function createFlyer(message, type, recipient) {
    const canvas = document.getElementById('flyerCanvas');
    const ctx = canvas.getContext('2d');
    const tone = currentFlyer.tone || 'chaleureux';
    
    // Configurations détaillées selon le type et le ton
    const backgrounds = {
        'nouvel an': { 
            gradient: ['#FF6B6B', '#4ECDC4', '#45B7D1'], 
            emoji: '🎊',
            decorEmojis: ['🎉', '🎆', '✨', '🥳', '🍾'],
            pattern: 'confetti',
            title: '✨ BONNE ANNÉE 2025 ✨'
        },
        'noel': { 
            gradient: ['#c92a2a', '#2f9e44', '#ffd700'], 
            emoji: '🎄',
            decorEmojis: ['🎅', '⛄', '🎁', '🔔', '⭐'],
            pattern: 'snow',
            title: '🎄 JOYEUX NOËL 🎄'
        },
        'anniversaire': { 
            gradient: ['#ff006e', '#8338ec', '#3a86ff'], 
            emoji: '🎂',
            decorEmojis: ['🎈', '🎁', '🎉', '🥳', '💝'],
            pattern: 'balloons',
            title: '🎂 JOYEUX ANNIVERSAIRE 🎂'
        },
        'pro': { 
            gradient: ['#1e3a8a', '#3b82f6', '#60a5fa'], 
            emoji: '💼',
            decorEmojis: ['🏆', '⭐', '📊', '🚀', '💡'],
            pattern: 'minimal',
            title: '💼 MEILLEURS VŒUX 💼'
        },
        'amour': { 
            gradient: ['#ff006e', '#ff6b9d', '#ffc2d1'], 
            emoji: '❤️',
            decorEmojis: ['💕', '💖', '💗', '💝', '🌹'],
            pattern: 'hearts',
            title: '💝 AVEC TOUT MON AMOUR 💝'
        }
    };
    
    const bg = backgrounds[type] || backgrounds['nouvel an'];
    
    // Créer le gradient de fond
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, bg.gradient[0]);
    gradient.addColorStop(0.5, bg.gradient[1]);
    gradient.addColorStop(1, bg.gradient[2]);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Ajouter un pattern selon le ton
    addBackgroundPattern(ctx, canvas, bg.pattern, tone);
    
    // Décorations d'angles avec emojis variés
    ctx.font = '80px Arial';
    // Coin supérieur gauche
    ctx.fillText(bg.decorEmojis[0], 30, 80);
    ctx.fillText(bg.decorEmojis[1], 120, 100);
    // Coin supérieur droit
    ctx.fillText(bg.decorEmojis[2], canvas.width - 120, 80);
    ctx.fillText(bg.decorEmojis[3], canvas.width - 210, 100);
    // Coins inférieurs
    ctx.fillText(bg.decorEmojis[4], 30, canvas.height - 30);
    ctx.fillText(bg.decorEmojis[0], canvas.width - 120, canvas.height - 30);
    
    // Emoji central grand
    if (tone === 'fun') {
        ctx.font = '150px Arial';
        ctx.fillText(bg.emoji, canvas.width / 2 - 75, 180);
    }
    
    // Zone de contenu avec effet de profondeur
    const contentY = tone === 'fun' ? 220 : 140;
    const contentHeight = canvas.height - contentY - 120;
    
    // Ombre portée
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 10;
    
    // Carte principale
    ctx.fillStyle = tone === 'sérieux' ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)';
    ctx.roundRect(50, contentY, canvas.width - 100, contentHeight, 25);
    ctx.fill();
    
    // Bordure décorative
    ctx.shadowColor = 'transparent';
    if (tone === 'fun') {
        ctx.strokeStyle = bg.gradient[0];
        ctx.lineWidth = 8;
        ctx.roundRect(50, contentY, canvas.width - 100, contentHeight, 25);
        ctx.stroke();
    } else if (tone === 'sérieux') {
        ctx.strokeStyle = bg.gradient[1];
        ctx.lineWidth = 3;
        ctx.roundRect(50, contentY, canvas.width - 100, contentHeight, 25);
        ctx.stroke();
    }
    
    // Titre si ton sérieux ou chaleureux
    if (tone !== 'fun') {
        ctx.font = 'bold 36px Arial';
        ctx.fillStyle = bg.gradient[0];
        ctx.textAlign = 'center';
        ctx.fillText(bg.title, canvas.width / 2, contentY + 60);
        
        // Ligne décorative sous le titre
        ctx.strokeStyle = bg.gradient[1];
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(150, contentY + 80);
        ctx.lineTo(canvas.width - 150, contentY + 80);
        ctx.stroke();
    }
    
    // Message principal
    ctx.fillStyle = '#2d3748';
    const fontSize = tone === 'sérieux' ? 28 : 32;
    ctx.font = `${tone === 'fun' ? 'bold' : ''} ${fontSize}px Arial`;
    ctx.textAlign = 'center';
    
    // Découper le message en lignes
    const lines = wrapText(ctx, message, canvas.width - 180);
    const lineHeight = fontSize + 12;
    let y = tone === 'fun' ? contentY + 60 : contentY + 120;
    
    lines.forEach((line, index) => {
        // Ajouter des emojis aléatoires pour le ton fun
        if (tone === 'fun' && Math.random() > 0.7 && line.length > 20) {
            const randomEmoji = bg.decorEmojis[Math.floor(Math.random() * bg.decorEmojis.length)];
            line = randomEmoji + ' ' + line;
        }
        ctx.fillText(line, canvas.width / 2, y);
        y += lineHeight;
    });
    
    // Nom du destinataire en grand si pas dans le message
    if (!message.toLowerCase().includes(recipient.toLowerCase()) && recipient !== 'toi') {
        y += 20;
        ctx.font = 'bold 40px Arial';
        const nameGradient = ctx.createLinearGradient(0, y - 40, 0, y);
        nameGradient.addColorStop(0, bg.gradient[0]);
        nameGradient.addColorStop(1, bg.gradient[1]);
        ctx.fillStyle = nameGradient;
        ctx.fillText(recipient, canvas.width / 2, y);
    }
    
    // Footer avec date et signature
    const footerY = contentY + contentHeight - 40;
    ctx.font = tone === 'sérieux' ? '20px Arial' : 'italic 22px Arial';
    ctx.fillStyle = '#718096';
    
    const today = new Date();
    const dateStr = today.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    ctx.fillText(dateStr, canvas.width / 2, footerY);
    
    // Signature personnalisée
    ctx.font = '18px Arial';
    ctx.fillStyle = '#a0aec0';
    ctx.fillText('✨ Créé avec amour sur ai-flyers.vercel.app ✨', canvas.width / 2, canvas.height - 25);
}

// Fonction pour ajouter des patterns de fond
function addBackgroundPattern(ctx, canvas, pattern, tone, intensity = 0.15) {
    ctx.globalAlpha = intensity;
    
    switch(pattern) {
        case 'confetti':
            // Confettis aléatoires
            for (let i = 0; i < 50; i++) {
                ctx.fillStyle = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffd700'][Math.floor(Math.random() * 4)];
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                ctx.fillRect(x, y, 8, 15);
            }
            break;
            
        case 'snow':
            // Flocons de neige
            ctx.fillStyle = '#ffffff';
            for (let i = 0; i < 40; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                ctx.beginPath();
                ctx.arc(x, y, Math.random() * 4 + 2, 0, Math.PI * 2);
                ctx.fill();
            }
            break;
            
        case 'balloons':
            // Ballons
            for (let i = 0; i < 15; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * 200 + 50;
                ctx.fillStyle = ['#ff006e', '#8338ec', '#3a86ff'][Math.floor(Math.random() * 3)];
                ctx.beginPath();
                ctx.ellipse(x, y, 20, 30, 0, 0, Math.PI * 2);
                ctx.fill();
            }
            break;
            
        case 'hearts':
            // Cœurs
            ctx.font = '40px Arial';
            for (let i = 0; i < 20; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                ctx.fillText(['💕', '💖', '💗'][Math.floor(Math.random() * 3)], x, y);
            }
            break;
            
        case 'minimal':
            // Lignes géométriques pour style pro
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            for (let i = 0; i < 10; i++) {
                ctx.beginPath();
                ctx.moveTo(0, Math.random() * canvas.height);
                ctx.lineTo(canvas.width, Math.random() * canvas.height);
                ctx.stroke();
            }
            break;
    }
    
    ctx.globalAlpha = 1.0;
}

// Fonction pour découper le texte en lignes
function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    
    words.forEach(word => {
        const testLine = currentLine + (currentLine ? ' ' : '') + word;
        const metrics = ctx.measureText(testLine);
        
        if (metrics.width > maxWidth && currentLine) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    });
    
    if (currentLine) {
        lines.push(currentLine);
    }
    
    return lines;
}

// Polyfill pour roundRect
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
        this.beginPath();
        this.moveTo(x + radius, y);
        this.lineTo(x + width - radius, y);
        this.arcTo(x + width, y, x + width, y + radius, radius);
        this.lineTo(x + width, y + height - radius);
        this.arcTo(x + width, y + height, x + width - radius, y + height, radius);
        this.lineTo(x + radius, y + height);
        this.arcTo(x, y + height, x, y + height - radius, radius);
        this.lineTo(x, y + radius);
        this.arcTo(x, y, x + radius, y, radius);
        this.closePath();
    };
}

// Régénérer
function regenerate() {
    document.getElementById('recipient').value = currentFlyer.recipient;
    document.getElementById('type').value = currentFlyer.type;
    document.getElementById('tone').value = currentFlyer.tone;
    showGenerator();
}

// Publicité forcée et téléchargement
function showAdAndDownload() {
    const modal = document.getElementById('adModal');
    modal.classList.remove('hidden');
    
    let countdown = 10;
    const countdownEl = document.getElementById('countdown');
    const progressBar = document.getElementById('progressBar');
    
    const interval = setInterval(() => {
        countdown--;
        countdownEl.textContent = countdown;
        progressBar.style.width = ((10 - countdown) / 10 * 100) + '%';
        
        if (countdown <= 0) {
            clearInterval(interval);
            downloadFlyer();
            modal.classList.add('hidden');
            
            // Afficher un message de succès
            alert('✅ Ton flyer a été téléchargé ! Partage-le sur WhatsApp ! 🎉');
        }
    }, 1000);
}

// Télécharger le flyer
function downloadFlyer() {
    const canvas = document.getElementById('flyerCanvas');
    const link = document.createElement('a');
    const filename = `voeux-2025-${currentFlyer.recipient.toLowerCase().replace(/\s+/g, '-')}.png`;
    
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    // Incrémenter le compteur
    counter++;
    document.getElementById('counter').textContent = counter;
}

// Partager sur WhatsApp
function shareOnWhatsApp() {
    const shareText = `🎉 Regarde la superbe carte ${currentFlyer.type} que j'ai créée avec l'IA !\n\n✨ Crée la tienne gratuitement sur : ${window.location.origin}\n\n#Vœux2025 #CartePersonnalisée`;
    const encodedText = encodeURIComponent(shareText);
    window.open(`https://wa.me/?text=${encodedText}`, '_blank');
}

// Fermer la barre de pub permanente
function closeAdBar() {
    const adBar = document.getElementById('sticky-ad-bar');
    adBar.classList.add('hidden');
    document.body.style.paddingBottom = '0';
}

// Auto-cacher la barre de pub après 10 secondes (moins intrusif)
setTimeout(() => {
    const adBar = document.getElementById('sticky-ad-bar');
    if (adBar && !adBar.classList.contains('hidden')) {
        adBar.style.opacity = '0.7';
        adBar.style.transform = 'translateY(60%)';
        adBar.style.transition = 'all 0.3s ease';
        
        // Afficher complètement au hover
        adBar.addEventListener('mouseenter', () => {
            adBar.style.opacity = '1';
            adBar.style.transform = 'translateY(0)';
        });
        
        adBar.addEventListener('mouseleave', () => {
            adBar.style.opacity = '0.7';
            adBar.style.transform = 'translateY(60%)';
        });
    }
}, 10000);
