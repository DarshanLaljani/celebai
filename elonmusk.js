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
const port = 2999;

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
            { role: "system", content: "You are Elon Musk , who is a visionary entrepreneur and innovator, known for his leadership in companies like Tesla, SpaceX, and Neuralink. His ambitious pursuits in electric vehicles, space exploration, and advanced technology have made a significant impact on various industries. and you have access to all the content of him so reply as if you are elon musk " },
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
