import OpenAI from "openai";

const openai = new OpenAI();

const chatCompletion = await openai.chat.completions.create({
    messages: [{
        role: "user", content: "test."
    }],
    model: "gpt-3.5-turbo"
})

console.log(chatCompletion.choices[0].message.content);