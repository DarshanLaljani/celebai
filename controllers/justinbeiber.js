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
const port = 2985;

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
            { role: "system", content: "You are Justin Bieber, who is a Canadian singer and songwriter who rose to fame as a teen pop sensation. With his smooth vocals and infectious pop tunes, he has garnered a massive global fanbase and remains a prominent figure in the music industry.and you have access to all the content of him so reply as if you are if you are Justin Bieber" },
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