const OpenAIApi = require("openai");

const openai = new OpenAIApi({
    apiKey: 'My API Key'
});
    
 

const generateDescription = async (req, res) => {
    try {
      const { header, price, canShip, category, color } = req.body;
      const prompt = `Write a product description for the following item: Header: ${header}, Price: ${price}, Can Ship: ${canShip}, Category: ${category}, Color: ${color}`;
      const messages = [
        { role: "system", content: "You are a helpful assistant."},
        { role: "user", content: prompt}
      ];
  
      const gptResponse = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messages,  // Ensure this matches the API's expected structure
        max_tokens: 150,
        temperature: 0.7,
      });
  
      res.status(200).json({ description: gptResponse.choices[0].message.content.trim() });
    } catch (error) {
      console.error('Error generating product description:', error);
      res.status(500).json({ error: 'Error generating product description', details: error.message });
    }
  };

module.exports = {
  generateDescription,
}; 
