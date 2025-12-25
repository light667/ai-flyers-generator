// TEMPLATES EXPRESS - Bibliothèque complète

const templates = [
    // NOUVEL AN
    { id: 1, type: 'nouvel an', tone: 'fun', theme: 'festif', name: 'Party 2026', preview: '🎊🥳', message: 'Une année de folie nous attend ! 2026 va être INCROYABLE ! 🚀✨' },
    { id: 2, type: 'nouvel an', tone: 'sérieux', theme: 'classique', name: 'Élégant', preview: '✨🥂', message: 'Que 2026 vous apporte succès, santé et bonheur. Mes meilleurs vœux.' },
    { id: 3, type: 'nouvel an', tone: 'chaleureux', theme: 'moderne', name: 'Chaleureux', preview: '💝🌟', message: 'Je te souhaite une merveilleuse année 2026 remplie de moments magiques ! 🎉' },
    { id: 4, type: 'nouvel an', tone: 'fun', theme: 'neon', name: 'Flash', preview: '⚡🎆', message: '2026 arrive en mode TURBO ! Prêt(e) pour l\'aventure ? 🚀💥' },
    
    // NOËL
    { id: 5, type: 'noel', tone: 'fun', theme: 'festif', name: 'Père Noël', preview: '🎅🎄', message: 'Ho Ho Ho ! Le Père Noël t\'apporte plein de cadeaux ! Joyeux Noël ! 🎁✨' },
    { id: 6, type: 'noel', tone: 'chaleureux', theme: 'vintage', name: 'Tradition', preview: '🕯️🎄', message: 'Que la magie de Noël illumine ton cœur et celui de tes proches. 💝' },
    { id: 7, type: 'noel', tone: 'sérieux', theme: 'classique', name: 'Classique', preview: '🎄⭐', message: 'Joyeux Noël. Que cette fête vous apporte paix et sérénité.' },
    { id: 8, type: 'noel', tone: 'fun', theme: 'moderne', name: 'Bonhomme', preview: '⛄🎁', message: 'C\'est Noël, c\'est la fête ! Bisous et câlins sous le sapin ! 🌟' },
    
    // ANNIVERSAIRE
    { id: 9, type: 'anniversaire', tone: 'fun', theme: 'festif', name: 'Mega Fête', preview: '🎉🎂', message: 'JOYEUX ANNIV\' ! C\'est TON jour, profite à fond ! 🥳🎈🎁' },
    { id: 10, type: 'anniversaire', tone: 'chaleureux', theme: 'moderne', name: 'Tendresse', preview: '💝🎂', message: 'Bon anniversaire mon cœur ! Tu es quelqu\'un de spécial ! 🌟💖' },
    { id: 11, type: 'anniversaire', tone: 'sérieux', theme: 'minimaliste', name: 'Sobre', preview: '🎂✨', message: 'Joyeux anniversaire. Que cette année vous soit favorable.' },
    { id: 12, type: 'anniversaire', tone: 'fun', theme: 'neon', name: 'Délire', preview: '🤪🎉', message: 'T\'as encore vieilli ! Mais t\'es toujours aussi cool ! Happy birthday ! 🎊' },
    
    // PROFESSIONNEL
    { id: 13, type: 'pro', tone: 'sérieux', theme: 'classique', name: 'Corporate', preview: '💼🏆', message: 'Meilleurs vœux professionnels pour 2026. Succès et prospérité.' },
    { id: 14, type: 'pro', tone: 'chaleureux', theme: 'moderne', name: 'Cordial', preview: '🤝✨', message: 'Merci pour cette belle collaboration. Excellente année 2026 !' },
    { id: 15, type: 'pro', tone: 'fun', theme: 'minimaliste', name: 'Team', preview: '🚀💡', message: 'L\'équipe vous souhaite une super année 2026 pleine de réussites ! 🏆' },
    
    // AMOUR
    { id: 16, type: 'amour', tone: 'chaleureux', theme: 'moderne', name: 'Mon Amour', preview: '❤️💕', message: 'Tu es la personne la plus importante pour moi. Je t\'aime infiniment. 💖' },
    { id: 17, type: 'amour', tone: 'fun', theme: 'festif', name: 'Fou d\'amour', preview: '😍💘', message: 'T\'es mon crush, ma vie, mon tout ! Love you to the moon ! 🌙✨' },
    { id: 18, type: 'amour', tone: 'sérieux', theme: 'vintage', name: 'Romantique', preview: '🌹💝', message: 'Mon amour pour toi est éternel. Tu es mon trésor. 💍' },
    
    // SAINT-VALENTIN
    { id: 19, type: 'saint-valentin', tone: 'chaleureux', theme: 'moderne', name: 'Be Mine', preview: '💖💘', message: 'Joyeuse Saint-Valentin mon amour ! Tu fais battre mon cœur ! 💕' },
    { id: 20, type: 'saint-valentin', tone: 'fun', theme: 'festif', name: 'Love', preview: '😘💋', message: 'Happy Valentine\'s ! T\'es mon bae, mon crush éternel ! 💖🔥' },
    
    // FÊTE DES MÈRES
    { id: 21, type: 'fete-meres', tone: 'chaleureux', theme: 'moderne', name: 'Maman Chérie', preview: '🌸💝', message: 'Bonne fête Maman ! Tu es la meilleure du monde entier ! 💐❤️' },
    { id: 22, type: 'fete-meres', tone: 'sérieux', theme: 'classique', name: 'Élégant', preview: '🌹💐', message: 'Bonne fête Maman. Merci pour tout. Je vous aime. 💝' },
    
    // FÊTE DES PÈRES
    { id: 23, type: 'fete-peres', tone: 'fun', theme: 'moderne', name: 'Super Papa', preview: '🏆👨', message: 'Bonne fête Papa ! T\'es le meilleur dad du monde ! 💪🚀' },
    { id: 24, type: 'fete-peres', tone: 'chaleureux', theme: 'minimaliste', name: 'Merci Papa', preview: '❤️👔', message: 'Bonne fête Papa. Merci d\'être toujours là pour moi. 💙' },
    
    // MARIAGE
    { id: 25, type: 'mariage', tone: 'chaleureux', theme: 'moderne', name: 'Félicitations', preview: '💍👰', message: 'Félicitations pour votre mariage ! Tout le bonheur du monde ! 💖✨' },
    
    // NAISSANCE
    { id: 26, type: 'naissance', tone: 'chaleureux', theme: 'moderne', name: 'Bienvenue', preview: '👶🎈', message: 'Bienvenue petit ange ! Que ta vie soit remplie de bonheur ! 💛' },
    
    // DIPLÔME
    { id: 27, type: 'diplome', tone: 'fun', theme: 'festif', name: 'Bravo', preview: '🎓🏆', message: 'BRAVO ! Tu l\'as fait ! Tellement fier(ère) de toi ! 🎉📚' },
    
    // RETRAITE
    { id: 28, type: 'retraite', tone: 'chaleureux', theme: 'moderne', name: 'Repos', preview: '🎉🏖️', message: 'Bonne retraite ! Profite bien de ta liberté ! Tu l\'as mérité ! 🌴' },
    
    // MERCI
    { id: 29, type: 'merci', tone: 'chaleureux', theme: 'moderne', name: 'Gratitude', preview: '🙏💚', message: 'Merci infiniment pour tout ! Tu es vraiment adorable ! 💖✨' },
    { id: 30, type: 'merci', tone: 'sérieux', theme: 'minimaliste', name: 'Reconnaissance', preview: '🙏⭐', message: 'Merci beaucoup pour votre aide précieuse. Sincères remerciements.' }
];

// Générer la grille de templates
function generateTemplatesGrid() {
    const grid = document.getElementById('templatesGrid');
    if (!grid) return;
    
    grid.innerHTML = templates.map(template => `
        <div class="template-card bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/20 hover:border-white/50 cursor-pointer transform hover:scale-105 transition-all" 
             data-type="${template.type}"
             onclick="useTemplate(${template.id})">
            <div class="text-4xl mb-2">${template.preview}</div>
            <h4 class="text-white font-bold text-sm mb-1">${template.name}</h4>
            <p class="text-white/70 text-xs line-clamp-2">${template.message.substring(0, 50)}...</p>
            <button class="mt-3 bg-white/20 hover:bg-white/30 text-white text-xs px-3 py-1 rounded-full transition-all">
                Utiliser ⚡
            </button>
        </div>
    `).join('');
}

// Filtrer templates par catégorie
function filterTemplates(category) {
    const cards = document.querySelectorAll('.template-card');
    const filters = document.querySelectorAll('.template-filter');
    
    // Update active filter
    filters.forEach(filter => filter.classList.remove('active', 'bg-white/20'));
    filters.forEach(filter => filter.classList.add('bg-white/10'));
    event.target.classList.add('active', 'bg-white/20');
    event.target.classList.remove('bg-white/10');
    
    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.dataset.type === category) {
            card.style.display = 'block';
            card.classList.add('animate-fadeInUp');
        } else {
            card.style.display = 'none';
        }
    });
}

// Utiliser un template (pré-remplit le formulaire)
function useTemplate(templateId) {
    const template = templates.find(t => t.id === templateId);
    if (!template) return;
    
    // Pré-remplir le formulaire
    document.getElementById('type').value = template.type;
    document.getElementById('tone').value = template.tone;
    document.getElementById('theme').value = template.theme;
    document.getElementById('customMessage').value = template.message;
    
    // Aller au générateur
    showGenerator();
    
    // Scroll vers le haut du formulaire
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Feedback visuel
    const form = document.getElementById('flyerForm');
    form.classList.add('animate-pulse');
    setTimeout(() => form.classList.remove('animate-pulse'), 500);
}

// Initialiser templates au chargement
document.addEventListener('DOMContentLoaded', () => {
    generateTemplatesGrid();
});

console.log('✅ Templates Express activés! 30 templates disponibles');
