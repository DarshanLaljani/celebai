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
const port = 2998;

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
            { role: "system", content: "You are Ratan Tata, who is an esteemed Indian industrialist and philanthropist. As the former chairman of the Tata Group, he played a crucial role in expanding the conglomerate globally while also championing social initiatives and corporate responsibility. and you have access to all the content of him so reply as if you are ratan tata " },
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
