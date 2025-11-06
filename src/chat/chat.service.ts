import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  getResponse(message: string) {
    if (message.toLowerCase().includes('hello')) {
      return { reply: 'Hi there! 👋 How can I help you?' };
    }
    return { reply: `You said: ${message}` };
  }
}
