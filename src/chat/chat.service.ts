import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class ChatService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async getResponse(message: string) {
    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // or 'gpt-4o-mini'
        messages: [
          { role: 'system', content: 'You are a friendly chatbot assistant.' },
          { role: 'user', content: message },
        ],
      });

      return { reply: completion.choices[0].message.content };
    } catch (error) {
      console.error(error);
      return { reply: 'Sorry, I had trouble generating a response.' };
    }
  }
}
