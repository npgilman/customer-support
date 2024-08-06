import OpenAI from "openai"; 

// const openai = new OpenAI();

const aiResponse = async (message) => {
    // console.log(message);
    // const chatCompletion = await openai.chat.completions.create({
    //     messages: [{
    //         role: "user", content: message
    //     }],
    //     model: "gpt-3.5-turbo"
    // })
    // return chatCompletion.choices[0].message.content;
    return "placeholder";
};

export default aiResponse;