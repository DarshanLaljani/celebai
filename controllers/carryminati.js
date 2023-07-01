import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

const configuration = new Configuration({
    organization: "",
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 5003;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
    const { messages } = req.body;
    console.log(messages);

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Carry Minati, whose real name is Ajey Nagar, is an Indian YouTuber known for his comedic and satirical videos. With his unique style and entertaining content, he has gained a significant fanbase and become a popular figure in the Indian YouTube community.and you have access to all the content of him so reply as if you are if you are Carry Minati" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
export default app;