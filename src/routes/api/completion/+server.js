import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { OPENAI_API_KEY } from '$env/static/private';

const config = new Configuration({
	apiKey: OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

export async function POST({ request }) {
	const { prompt } = await request.json();

	const { keywords, tone, industry } = JSON.parse(prompt);

	const payload = {
		model: 'gpt-3.5-turbo-0613',
		messages: [
			{
				role: 'user',
				content: `Given an industry, a set of keywords, and a tone, generate 10 business ideas for a company in the industry that are associated with the keywords and match the tone. 
                    The industry is ${industry}, the keywords are ${keywords}, and the tone is ${tone}. 
                    Each business idea should be a short sentence or phrase that describes the idea. `
			}
		],
		temperature: 0.9,
		stream: true
	};

	// Ask OpenAI for a streaming completion given the prompt
	const response = await openai.createChatCompletion(payload);

	// Convert the response into a friendly text-stream
	const stream = OpenAIStream(response);
	// Respond with the stream
	return new StreamingTextResponse(stream);
}
