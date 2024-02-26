const CHATGPT_API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const CHATGPT_API_KEY = process.env.REACT_APP_API_KEY;
const message_template = process.env.REACT_APP_MESSAGE_TEMPLATE;

export async function getChatGPTResponse (question:any):Promise<string> {
  try {
        if(!CHATGPT_API_KEY){
          throw new Error("chatgpt api key is not defined")
        }
        const response = await fetch(CHATGPT_API_ENDPOINT, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${CHATGPT_API_KEY}`,
      },
          body: JSON.stringify({
            model:"gpt-3.5-turbo",
            "messages": [{"role": "user", "content": `${message_template}${question}`}],
            max_tokens: 20,
            temperature: 0.7,
          }),
    });
      
    const data = await response.json();
    console.log("chatgpt answer: ", data);

    const content = data.choices && data.choices.length > 0 ? data.choices[0].message.content: "";
    console.log("content:", content);
    return content;
  } catch(error) {
    console.log("error fetching chatgpt answer: ", error);
    throw error;
  }
}