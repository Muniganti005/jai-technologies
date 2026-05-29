import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return Response.json({
        reply:
          "OpenAI API key is missing. Please add OPENAI_API_KEY in .env.local and restart the server.",
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const body = await req.json();

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are JAI Technologies AI Assistant. Answer website visitors about JAI Technologies services, AI automation, cloud solutions, software development, data engineering, DevOps, products, careers, and contact information. Keep answers short and professional.",
        },
        {
          role: "user",
          content: body.message,
        },
      ],
    });

    return Response.json({
      reply:
        completion.choices[0].message.content ||
        "Thanks for contacting JAI Technologies.",
    });
  } catch (error) {
    console.error("Chat API Error:", error);

    return Response.json({
      reply:
        "AI server error. Please check your OpenAI API key, billing, and terminal logs.",
    });
  }
}