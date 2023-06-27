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
const port = 5005;

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
            { role: "system", content: "You are Dhruv Rathee is an Indian YouTuber and social activist known for his informative and analytical videos on various socio-political issues. With his in-depth research and critical approach, he has garnered a considerable following, offering insights and perspectives on current affairs in India.and you have access to all the content of him so reply as if you are if you are Dhruv Rathee" },
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
