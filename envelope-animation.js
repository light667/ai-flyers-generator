// ANIMATION D'ENVELOPPE POUR LE PARTAGE

// Fonction pour afficher l'animation d'enveloppe avant le partage
function showEnvelopeAnimation(shareFunction, platform, isReceiver = false) {
    // Créer le conteneur de l'animation
    const container = document.createElement('div');
    container.className = 'envelope-animation-container';
    container.id = 'envelopeAnimation';
    
    // Adapter le contenu selon le mode (partage ou réception)
    const buttonsHTML = isReceiver ? `
        <div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px;">
            <button class="envelope-share-btn" style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);" onclick="showGenerator()">
                ✨ Créer ma carte
            </button>
            <button class="envelope-share-btn close" onclick="closeEnvelopeAnimation()">
                Voir la carte
            </button>
        </div>
    ` : `
        <!-- Boutons de partage -->
        <div class="envelope-share-buttons">
            <button class="envelope-share-btn whatsapp ${platform === 'whatsapp' ? 'highlight' : ''}" onclick="shareFromEnvelope('whatsapp')">
                <span>💬</span> WhatsApp
            </button>
            <button class="envelope-share-btn facebook ${platform === 'facebook' ? 'highlight' : ''}" onclick="shareFromEnvelope('facebook')">
                <span>f</span> Facebook
            </button>
            <button class="envelope-share-btn twitter ${platform === 'twitter' ? 'highlight' : ''}" onclick="shareFromEnvelope('twitter')">
                <span>🐦</span> Twitter
            </button>
            <button class="envelope-share-btn instagram ${platform === 'instagram' ? 'highlight' : ''}" onclick="shareFromEnvelope('instagram')">
                <span>📷</span> Instagram
            </button>
        </div>
        
        <div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);">
            <button class="envelope-share-btn close" onclick="closeEnvelopeAnimation()">
                Fermer
            </button>
        </div>
    `;
    
    const textHTML = isReceiver ? `
        <div class="envelope-share-text">
            <p>🎁 Une carte spéciale pour toi !</p>
            <small>Ouvre l'enveloppe... ✨</small>
        </div>
    ` : `
        <div class="envelope-share-text">
            <p>✨ Ta carte est prête à être partagée !</p>
            <small>Choisis ta plateforme préférée 👇</small>
        </div>
    `;
    
    // Créer le HTML de l'enveloppe
    container.innerHTML = `
        <div class="envelope-wrapper">
            <!-- Confettis décoratifs -->
            <div class="envelope-confetti"></div>
            <div class="envelope-confetti"></div>
            <div class="envelope-confetti"></div>
            <div class="envelope-confetti"></div>
            <div class="envelope-confetti"></div>
            <div class="envelope-confetti"></div>
            <div class="envelope-confetti"></div>
            <div class="envelope-confetti"></div>
            <div class="envelope-confetti"></div>
            
            <!-- Corps de l'enveloppe -->
            <div class="envelope-body">
                <div class="envelope-shine"></div>
                <div class="envelope-stamp">✉️</div>
                <div class="envelope-decoration">💝</div>
            </div>
            
            <!-- Carte de vœux qui sort -->
            <div class="envelope-card">
                <canvas id="envelopeCardPreview" width="280" height="350"></canvas>
            </div>
            
            <!-- Rabat qui s'ouvre -->
            <div class="envelope-flap"></div>
        </div>
        
        <!-- Texte d'invitation -->
        ${textHTML}
        
        ${buttonsHTML}
    `;
    
    // Ajouter au body
    document.body.appendChild(container);
    
    // Copier la carte dans le canvas de l'enveloppe (après un court délai)
    setTimeout(() => {
        const mainCanvas = document.getElementById('flyerCanvas');
        const envelopeCanvas = document.getElementById('envelopeCardPreview');
        
        if (mainCanvas && envelopeCanvas) {
            const ctx = envelopeCanvas.getContext('2d');
            // Redimensionner et copier l'image
            ctx.drawImage(mainCanvas, 0, 0, 280, 350);
        }
    }, 100);
    
    // Auto-exécuter le partage après l'animation (si une plateforme spécifique)
    if (shareFunction && platform && !isReceiver) {
        setTimeout(() => {
            shareFunction();
        }, 3500); // Après que l'enveloppe s'ouvre et la carte sorte
    }
}

// Fermer l'animation d'enveloppe
function closeEnvelopeAnimation() {
    const container = document.getElementById('envelopeAnimation');
    if (container) {
        container.style.animation = 'fadeOutEnvelope 0.3s ease forwards';
        setTimeout(() => {
            container.remove();
        }, 300);
    }
}

// Style pour le fadeOut
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOutEnvelope {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(fadeOutStyle);

// Fonction de partage depuis l'enveloppe
function shareFromEnvelope(platform) {
    // Exécuter la fonction de partage correspondante
    switch(platform) {
        case 'whatsapp':
            shareOnWhatsApp();
            break;
        case 'facebook':
            shareOnFacebook();
            break;
        case 'twitter':
            shareOnTwitter();
            break;
        case 'instagram':
            shareOnInstagram();
            break;
    }
    
    // Fermer l'animation après un court délai
    setTimeout(() => {
        closeEnvelopeAnimation();
    }, 500);
}

// Modifier les fonctions de partage existantes pour utiliser l'animation
const originalShareOnWhatsApp = shareOnWhatsApp;
shareOnWhatsApp = function() {
    showEnvelopeAnimation(originalShareOnWhatsApp, 'whatsapp');
};

const originalShareOnFacebook = shareOnFacebook;
shareOnFacebook = function() {
    showEnvelopeAnimation(originalShareOnFacebook, 'facebook');
};

const originalShareOnTwitter = shareOnTwitter;
shareOnTwitter = function() {
    showEnvelopeAnimation(originalShareOnTwitter, 'twitter');
};

const originalShareOnInstagram = shareOnInstagram;
shareOnInstagram = function() {
    showEnvelopeAnimation(originalShareOnInstagram, 'instagram');
};

console.log('✅ Animation d\'enveloppe activée pour tous les partages!');
