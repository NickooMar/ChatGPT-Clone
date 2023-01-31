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
  try {
    const apiResponse = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: prompt,
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    const codeCompletion = apiResponse.data.choices[0].text;

    res.status(200).json({ data: codeCompletion });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error?.response.data.error });
  }
});

export default router;
