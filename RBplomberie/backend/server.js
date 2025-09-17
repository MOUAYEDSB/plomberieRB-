import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));

app.use(bodyParser.json());

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.log('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Ready to Send Emails');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message, urgency } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  // 1️⃣ Email to your inbox (admin)
  const mailToYou = {
    from: `"RBPlomberie Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: email,
    subject: `📩 Nouveau devis plomberie - ${service || 'Service Non Spécifié'}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #0d6efd;">Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
        <p><strong>Service:</strong> ${service || 'Non spécifié'}</p>
        <p><strong>Niveau d'urgence:</strong> ${urgency || 'Non spécifié'}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f8f9fa; padding: 10px; border-radius: 5px;">${message}</p>
      </div>
    `,
  };

  // 2️⃣ Confirmation email to user
  const mailToUser = {
    from: `"PlumbEasy" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `✅ Votre demande a été reçue - PlumbEasy`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #0d6efd;">Bonjour ${name},</h2>
        <p>Merci d’avoir contacté <strong>RBPlomberie</strong> !</p>
        <p>Nous avons bien reçu votre demande concernant <strong>${service || 'nos services'}</strong>.</p>
        <p>Nous reviendrons vers vous très prochainement pour confirmer votre devis.</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 5px;">
          <p><strong>Résumé de votre message:</strong></p>
          <p>${message}</p>
        </div>
        <p style="margin-top: 20px;">Cordialement,<br><strong>Équipe RBPlomberie</strong></p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(mailToUser);

    res.status(200).json({ message: 'Email sent successfully to you and confirmation sent to user!' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
