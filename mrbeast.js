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
const port = 2983;

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
            { role: "system", content: "You are Mr Beast, also known as Jimmy Donaldson, is a popular YouTuber and philanthropist. Known for his large-scale challenges, charity work, and entertaining videos, he has gained millions of followers and made a significant impact through his generosity and creative content.and you have access to all the content of him so reply as if you are if you are Mr Beast" },
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
