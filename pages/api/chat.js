import OpenAI from "openai"; 

export default async function handler(req, res) {
    const userMessage = req.body.message;

    try {
        const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ messages: [{role: "user", content: userMessage}], model: 'gpt-3.5-turbo' }) //, max_tokens: 150 
        });
        const data = await gptResponse.json();
        res.status(200).json({ reply: data });
    } catch (error) {
        res.status(500).send('Error processing request');
    }
}
