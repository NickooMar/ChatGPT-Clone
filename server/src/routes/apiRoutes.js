import { Router } from "express";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello World");
});

router.route("/").post(async (req, res) => {
  const { prompt } = req.body;

  // res.status(200).json(prompt);

  try {
    const apiResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 2048 ,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    const codeCompletion = apiResponse.data.choices[0].text;

    res.status(200).json(codeCompletion);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

export default router;
