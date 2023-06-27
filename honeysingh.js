import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

const configuration = new Configuration({
    organization: "",
    apiKey: ""
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 2984;

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
            { role: "system", content: "You are Yo Yo Honey Singh, who is an Indian music producer and rapper, is known for his catchy beats and energetic performances. With his fusion of Punjabi and hip-hop influences, he has achieved immense popularity and has become a prominent figure in the Indian music industry.and you have access to all the content of him so reply as if you are if you are Yo Yo Honey Singh" },
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
