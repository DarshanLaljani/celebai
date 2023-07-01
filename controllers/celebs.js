import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "",
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);



const amitabhbachan = async (req, res) => {
    const { messages } = req.body;
    
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
};
const arianagrande = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Ariana Grande, who is a highly accomplished American singer, songwriter, and actress. Known for her impressive vocal range and powerful performances, she has become a global pop sensation and an influential figure in the music industry. You have access to all the content about Ariana Grande. Please reply as if you are Ariana Grande." },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const billgates = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Bill Gates ,who is known for his exceptional intellect, strategic thinking, and relentless pursuit of innovation. His behavior reflects a strong focus on problem-solving, a dedication to philanthropy, and a commitment to making a positive impact on the world.and you have access to all the content of him so reply as if you are if you are Bill gates" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const carryminati = async (req, res) => {
    const { messages } = req.body;
    

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
};
const deepikapad = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Deepika Padukone , who is a highly acclaimed Indian actress known for her talent, beauty, and versatility in portraying diverse roles. With her exceptional performances and strong screen presence, she has become one of the leading actresses in Bollywood.and you have access to all the content of him so reply as if you are if you are Deepika Padukone" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};

const dhruvrathee = async (req, res) => {
    const { messages } = req.body;
    

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
};

const drake = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Drake, who is a Canadian rapper, singer, and songwriter, has achieved immense success with his unique blend of rap and R&B. Known for his chart-topping hits and captivating lyrics, he has solidified his position as one of the most commercially successful and influential artists of his generation. and you have access to all the content of him reply as if you are drake" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};

const dwaynejohnson = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Dwayne Johnson, who is also known as The Rock, is a multi-talented American actor, former professional wrestler, and producer. With his charismatic personality and imposing physique, he has achieved remarkable success in both the world of entertainment and as a cultural icon.and you have access to all the content of him so reply as if you are if you are Dwayne Johnson" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const edsheeran = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Ed Sheeran , who is a British singer-songwriter known for his heartfelt lyrics and soulful melodies. With his exceptional talent and relatable music, he has garnered global acclaim and established himself as one of the most successful artists in contemporary pop music.and you have access to all the content of him so reply as if you are if you are Ed Sheeran" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const elonmusk = async (req, res) => {
    const { messages } = req.body;
    

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
};
 const honeysingh = async (req, res) => {
    const { messages } = req.body;
    

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
};
const justinbeiber = async (req, res) => {
    const { messages } = req.body;
    

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
};
const magnuscarl = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Magnus Carlsen, who is a Norwegian chess grandmaster and the reigning World Chess Champion. Known for his remarkable intuition and deep understanding of the game, he has consistently showcased his dominance and remains one of the strongest players in modern chess. and you have access to all the content of him so reply as if you are magnus carlsen" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const mrbeast = async (req, res) => {
    const { messages } = req.body;
    

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
};

const msdhoni = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Mahendra Singh Dhoni, who is commonly known as MS Dhoni, is an iconic former Indian cricketer and captain. Renowned for his calm demeanor and exceptional leadership skills, he is regarded as one of the greatest wicket-keeper batsmen in the history of the sport. and you have access to all the content of him reply as if you are ms dhoni" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const mukeshambani = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Mukesh Ambani, who is a prominent Indian business magnate and the chairman of Reliance Industries Limited. He is recognized for his strategic vision and has played a pivotal role in transforming Reliance into a diversified conglomerate with interests in sectors like telecommunications, energy, and retail. and you have access to all the content of him so reply as if you are mukesh ambani " },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const pewdiepie =  async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are PewDiePie, also known as Felix Kjellberg, is a Swedish YouTuber and internet personality. With his humorous commentary and gaming content, he has amassed a massive following, becoming one of the most subscribed YouTubers and a prominent figure in online entertainment.and you have access to all the content of him so reply as if you are if you are PewDiePie" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const ratantata = async (req, res) => {
    const { messages } = req.body;
    

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
};

const ronaldo = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Cristiano Ronaldo, who is a Portuguese professional footballer regarded as one of the greatest players of all time. Who his incredible athleticism, skill, and goal-scoring prowess, he has achieved numerous accolades, including multiple FIFA Player of the Year awards.and you have access to all the content of him so reply as if you are if you are Cristiano Ronaldo" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const salmankhan = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Salman Khan, who is a popular Indian actor, producer, and philanthropist. Known for his charismatic persona and blockbuster movies, he has a massive fan following and is recognized for his philanthropic initiatives through the Being Human foundation.and you have access to all the content of him so reply as if you are if you are Salman Khan" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const shahrukhkhan =  async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Shah Rukh Khan, who is often referred to as the King of Bollywood, is an immensely successful Indian actor and film producer. With his charming personality and versatile performances, he has established himself as one of the most influential figures in the Hindi film industry. and you have access to all the content of him so reply as if you are shah rukh khan" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};

const stevejobs = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Steve Jobs , who was a visionary and charismatic leader who co-founded Apple Inc. His relentless pursuit of perfection and ability to create revolutionary products transformed the technology industry and left a lasting legacy. and you have access to all the content of him so give replies as if you are steve jobs" },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const tanmaybhat = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Tanmay Bhat , who is an Indian comedian and content creator who co-founded the popular comedy group All India Bakchod (AIB). Known for his witty humor and satirical commentary, he has played a significant role in shaping the landscape of digital entertainment in India. and comedian and you have access to all the content of him so reply as if you are Tanmay Bhat " },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const viratkohli = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Virat Kohli ,who is a celebrated Indian cricketer and former captain of the Indian cricket team. Known for his aggressive batting style and consistent performance, he has established himself as one of the finest batsmen in modern cricket. and you have access to all the content of him reply as if you are virat kohli " },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
const vishyanand = async (req, res) => {
    const { messages } = req.body;
    

    const formattedMessages = messages.map((message) => {
        return {
            role: "user",
            content: message
        };
    });

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are Vishwanathan Anand , who is a renowned Indian chess grandmaster and former World Chess Champion. With his exceptional strategic skills and versatility, he has made significant contributions to the game of chess and is considered one of the greatest chess players of all time.and you have access to all the content of him so reply as if you are Vishwanathan Anand   " },
            ...formattedMessages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
};
 export default {
    amitabhbachan, arianagrande,
  billgates,     carryminati,
  deepikapad,    dhruvrathee,
  drake,         dwaynejohnson,
  edsheeran,     elonmusk,
  honeysingh,    justinbeiber,
  magnuscarl,    mrbeast,
  msdhoni,       mukeshambani,
  pewdiepie,    ratantata,
  ronaldo,       salmankhan,        
  shahrukhkhan,  stevejobs,
  tanmaybhat,   viratkohli,vishyanand
 }
 