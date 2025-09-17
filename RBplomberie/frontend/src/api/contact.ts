import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  urgency: string;
}

// Configure nodemailer transporter
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: ContactFormData) {
  const { name, phone, email, service, message, urgency } = data;
  
  const urgencyEmoji = urgency === 'emergency' ? '🚨' : urgency === 'urgent' ? '⚡' : '📝';
  
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || 'info@proflowplomberie.com',
    subject: `${urgencyEmoji} RB Plomberie - Nouvelle Demande de Service - ${service || 'Général'} (${urgency.toUpperCase()})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0; display: flex; align-items: center;">
            💧 RB Plomberie - Nouvelle Demande de Service
          </h2>
        </div>
        
        <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0;">
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1e40af; margin-top: 0;">Informations Client</h3>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Téléphone:</strong> <a href="tel:${phone}" style="color: #ea580c;">${phone}</a></p>
            ${email ? `<p><strong>Email:</strong> <a href="mailto:${email}" style="color: #ea580c;">${email}</a></p>` : ''}
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1e40af; margin-top: 0;">Détails du Service</h3>
            <p><strong>Type de Service:</strong> ${service || 'Non spécifié'}</p>
            <p><strong>Niveau d'Urgence:</strong> 
              <span style="background: ${urgency === 'emergency' ? '#dc2626' : urgency === 'urgent' ? '#ea580c' : '#059669'}; 
                           color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;">
                ${urgency.toUpperCase()}
              </span>
            </p>
          </div>
          
          ${message ? `
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1e40af; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          ` : ''}
        </div>
        
        <div style="background: #1e40af; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px;">
          <p style="margin: 0; font-size: 14px;">
            ${urgency === 'emergency' ? '🚨 DEMANDE D\'URGENCE - Contactez immédiatement !' : 
              urgency === 'urgent' ? '⚡ DEMANDE URGENTE - Service le jour même requis' : 
              '📞 Veuillez contacter dans les 2 heures'}
          </p>
        </div>
      </div>
    `,
    text: `
Nouvelle Demande de Service depuis le Site RB Plomberie

Informations Client:
- Nom: ${name}
- Téléphone: ${phone}
${email ? `- Email: ${email}` : ''}

Détails du Service:
- Type de Service: ${service || 'Non spécifié'}
- Niveau d'Urgence: ${urgency.toUpperCase()}

${message ? `Message:\n${message}` : ''}

${urgency === 'emergency' ? 'DEMANDE D\'URGENCE - Contactez immédiatement !' : 
  urgency === 'urgent' ? 'DEMANDE URGENTE - Service le jour même requis' : 
  'Veuillez contacter dans les 2 heures'}
    `
  };

  // Send confirmation email to customer if email provided
  if (email) {
    const customerMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'RB Plomberie - Demande de Service Reçue',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">💧 RB Plomberie</h2>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <h3 style="color: #1e40af;">Merci d'avoir contacté RB Plomberie !</h3>
            <p>Bonjour ${name},</p>
            <p>Nous avons reçu votre demande de service et vous contacterons dans les 
               ${urgency === 'emergency' ? '15 minutes' : urgency === 'urgent' ? '30 minutes' : '2 heures'}.</p>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="margin-top: 0; color: #1e40af;">Détails de Votre Demande :</h4>
              <p><strong>Service:</strong> ${service || 'General inquiry'}</p>
              <p><strong>Urgence:</strong> ${urgency}</p>
              <p><strong>Téléphone:</strong> ${phone}</p>
            </div>
            
            <p><strong>Besoin d'une assistance immédiate ?</strong><br>
               Appelez notre ligne d'urgence 24/7 : <a href="tel:0625735747" style="color: #ea580c; font-weight: bold;">06 25 73 57 47</a></p>
            
            <p>Cordialement,<br>L'Équipe RB Plomberie</p>
          </div>
        </div>
      `
    };
    
    await transporter.sendMail(customerMailOptions);
  }

  return await transporter.sendMail(mailOptions);
}