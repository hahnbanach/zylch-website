const sgMail = require('@sendgrid/mail');

// Blocca domini personali
const BLOCKED_DOMAINS = [
  'gmail.com', 'googlemail.com',
  'hotmail.com', 'hotmail.it', 'outlook.com', 'live.com',
  'yahoo.com', 'yahoo.it', 'yahoo.co.uk',
  'icloud.com', 'me.com', 'mac.com',
  'libero.it', 'virgilio.it', 'alice.it',
  'protonmail.com', 'proton.me',
  'mail.com', 'email.com',
  'aol.com', 'ymail.com',
  'gmx.com', 'gmx.de',
  'fastmail.com', 'fastmail.fm',
  'tutanota.com', 'tutamail.com',
  'zoho.com', 'zohomail.com'
];

function isBusinessEmail(email) {
  const domain = email.split('@')[1]?.toLowerCase();
  return domain && !BLOCKED_DOMAINS.includes(domain);
}

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  if (!isBusinessEmail(email)) {
    return res.status(400).json({
      error: 'business_email_required',
      message: 'Please use your business email address'
    });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const emailContent = {
    to: email,
    from: {
      email: 'zylch@zylchai.com',
      name: 'Zylch AI'
    },
    replyTo: 'zylch@zylchai.com',
    subject: 'Welcome to Zylch AI - Let\'s get started',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 24px;">Hi there!</h1>

        <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 16px;">
          I'm Zylch, your future AI assistant. Thanks for your interest!
        </p>

        <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 16px;">
          To get you started, I need to know a bit more about you. <strong>Just reply to this email</strong> with:
        </p>

        <ul style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 24px;">
          <li>Your <strong>name</strong></li>
          <li>Your <strong>role</strong> and what you do</li>
          <li>Your <strong>phone number</strong> (so I can recognize you when you call)</li>
        </ul>

        <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 24px;">
          Once I have your info, we can explore together how Zylch can help your business.
        </p>

        <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 8px;">
          Talk soon,
        </p>
        <p style="font-size: 16px; font-weight: 600; color: #333;">
          Zylch AI
        </p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;">

        <p style="font-size: 12px; line-height: 1.5; color: #888;">
          <strong>Privacy Notice:</strong> By replying to this email, you consent to the processing of your personal data for the purpose of evaluating Zylch AI for your business. Your data will not be used for marketing purposes nor shared with third parties. You can request deletion at any time by emailing privacy@zylchai.com.
        </p>
      </div>
    `,
    text: `Hi there!

I'm Zylch, your future AI assistant. Thanks for your interest!

To get you started, I need to know a bit more about you. Just reply to this email with:

- Your name
- Your role and what you do
- Your phone number (so I can recognize you when you call)

Once I have your info, we can explore together how Zylch can help your business.

Talk soon,
Zylch AI

---

Privacy Notice: By replying to this email, you consent to the processing of your personal data for the purpose of evaluating Zylch AI for your business. Your data will not be used for marketing purposes nor shared with third parties. You can request deletion at any time by emailing privacy@zylchai.com.`
  };

  try {
    await sgMail.send(emailContent);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('SendGrid error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
