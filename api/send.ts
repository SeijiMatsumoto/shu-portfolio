import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers to support local testing and secure remote requests
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return res.status(500).json({ error: 'Resend API key is not configured' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>', // Resend onboarding email
        to: 'shu96wang@gmail.com', // Shu's recipient address
        reply_to: email,
        subject: `[Portfolio Contact] ${subject}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #2b7a3e; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 0;">New Portfolio Message</h2>
            <p style="margin: 15px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 15px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2b7a3e; text-decoration: none;">${email}</a></p>
            <p style="margin: 15px 0;"><strong>Subject:</strong> ${subject}</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #2b7a3e; margin: 20px 0;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="font-size: 0.8rem; color: #888; margin-top: 25px; border-top: 1px solid #eee; padding-top: 15px; text-align: center;">
              This email was routed through the Vercel Serverless Resend API integration.
            </p>
          </div>
        `,
      }),
    });

    let data: { error?: string; message?: string } = {};
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      data = { message: text || 'Empty response from email provider' };
    }

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Failed to send email' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    return res.status(500).json({ error: message });
  }
}
