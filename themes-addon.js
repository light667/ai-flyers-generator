// Insérez ce code juste après la ligne 188 (après `const theme = currentFlyer.theme || 'moderne';`)

    // Configuration des thèmes
    const themes = {
        'moderne': {
            useShadows: true,
            useGradients: true,
            borderStyle: 'gradient',
            fontStyle: 'bold',
            cardOpacity: 0.95,
            patternIntensity: 0.15
        },
        'classique': {
            useShadows: true,
            useGradients: false,
            borderStyle: 'double',
            fontStyle: 'serif',
            cardOpacity: 0.98,
            patternIntensity: 0.08,
            backgroundColor: '#f8f9fa',
            solid: true
        },
        'festif': {
            useShadows: true,
            useGradients: true,
            borderStyle: 'thick',
            fontStyle: 'bold',
            cardOpacity: 0.92,
            patternIntensity: 0.25,
            extraEmojis: true
        },
        'minimaliste': {
            useShadows: false,
            useGradients: false,
            borderStyle: 'thin',
            fontStyle: 'light',
            cardOpacity: 0.98,
            patternIntensity: 0.05,
            backgroundColor: '#ffffff',
            solid: true
        },
        'vintage': {
            useShadows: true,
            useGradients: false,
            borderStyle: 'ornate',
            fontStyle: 'serif',
            cardOpacity: 0.95,
            patternIntensity: 0.12,
            sepia: true,
            solid: true
        },
        'neon': {
            useShadows: true,
            useGradients: true,
            borderStyle: 'glow',
            fontStyle: 'bold',
            cardOpacity: 0.85,
            patternIntensity: 0.3,
            glowEffect: true
        }
    };
    
    const currentTheme = themes[theme];

    // Ajouter des couleurs solides pour les thèmes non-gradient
    backgrounds['nouvel an'].solid = ['#e74c3c', '#3498db', '#9b59b6'];
    backgrounds['noel'].solid = ['#c0392b', '#27ae60', '#f39c12'];
    backgrounds['anniversaire'].solid = ['#e91e63', '#9c27b0', '#2196f3'];
    backgrounds['pro'].solid = ['#34495e', '#2c3e50', '#7f8c8d'];
    backgrounds['amour'].solid = ['#e91e63', '#f06292', '#f8bbd0'];
