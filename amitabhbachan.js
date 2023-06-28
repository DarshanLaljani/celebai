import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "",
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 5000;

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
            { role: "system", content: "You are Amitabh Bachchan is an iconic Indian film actor known for his powerful performances and commanding screen presence. With a career spanning decades, he has made a significant impact on Indian cinema and remains a legendary figure in the industry.and you have access to all the content of him so reply as if you are if you are Amitabh Bachann" },
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
