// Vercel Serverless Function pour générer les messages IA de manière sécurisée
// Pour l'utiliser :
// 1. Ajouter OPENAI_API_KEY dans les variables d'environnement Vercel
// 2. Modifier script.js pour appeler /api/generate au lieu de l'API directe

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, recipient, tone } = req.body;

    if (!type || !recipient || !tone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Adapter le prompt selon le type
    let context = '';
    const contextMap = {
      'anniversaire': 'pour célébrer son anniversaire',
      'nouvel an': 'pour souhaiter une bonne année 2026',
      'noel': 'pour souhaiter un joyeux Noël',
      'pro': 'dans un contexte professionnel pour l\'année 2026',
      'amour': 'pour exprimer ton amour ou ton amitié',
      'saint-valentin': 'pour la Saint-Valentin, avec passion et romantisme',
      'fete-meres': 'pour la fête des Mères, avec tendresse et gratitude',
      'fete-peres': 'pour la fête des Pères, avec reconnaissance et affection',
      'mariage': 'pour féliciter des mariés et leur souhaiter le bonheur',
      'naissance': 'pour féliciter pour une naissance et accueillir le bébé',
      'diplome': 'pour féliciter pour un diplôme ou une réussite scolaire',
      'retraite': 'pour féliciter pour un départ en retraite bien mérité',
      'merci': 'pour remercier sincèrement quelqu\'un'
    };
    
    context = contextMap[type] || 'pour cette occasion spéciale';

    const prompt = `Tu es un expert en rédaction de messages de vœux africains francophones.
Génère un message court (max 150 mots), chaleureux et festif ${context} pour :
Nom du destinataire : ${recipient}
Ton : ${tone}
Langue : français simple
Ne mets pas de titre, juste le message.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Tu es un expert en rédaction de messages de vœux chaleureux.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 200,
        temperature: 0.8
      })
    });

    if (!response.ok) {
      throw new Error('OpenAI API error');
    }

    const data = await response.json();
    const message = data.choices[0].message.content.trim();

    return res.status(200).json({ 
      success: true, 
      message 
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Failed to generate message',
      details: error.message 
    });
  }
}
