import styles from './ContactPage.module.css';
import XContactForm from '../components/xcomponents/xcontacform/XContactForm';
import XSocialContact from '../components/xcomponents/xsocialcontact/XSocialContact';
import {
  TelegramIcon,
  InstagramIcon,
  WhatsappIcon,
  EmailIcon,
} from '../components/xcomponents/xsocialcontact/SocialIcons';

export const metadata = {
  title: "Contacto — Xscriptor",
  description: "Comunícate con Óscar Preciado — Formulario de contacto y redes sociales",
}

export default function ContactPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <h1>Déjame un mensaje</h1>


        <div className='flex flex-center align-center'>
        <XContactForm 
        showName={true} 
        showEmail={true} 
        showPhone={false} 
        showSubject={true} 
        showMessage={true}  
        size='medium' 
        buttonTextColor='var(--bg)'
        buttonColor='var(--accent)'
        wrapperBorderRadius='rounded'
        fieldBorderColor='var(--accent)'
        wrapperBorderColor='var(--accent)'
        wrapperBorderWidth='1px'
        buttonAlignment='right'
        buttonBorderStyle='dashed'
        fieldBorderStyle='dashed'
        wrapperBorderStyle='dashed'
        decorativeX={true}
        decorativeXColor='var(--accent)'
        /></div>
        
        <h2>Encuéntrame en redes</h2>
        <XSocialContact
          items={[
            {
              id: "telegram",
              href: "https://t.me/xscriptor",
              label: "Telegram",
              icon: <TelegramIcon size="32" />,
              text: "Telegram",
            },
            {
              id: "instagram",
              href: "https://instagram.com/xscriptor",
              label: "Instagram",
              icon: <InstagramIcon size="32" />,
              text: "Instagram",
            },
            {
              id: "whatsapp",
              href: "https://wa.me/34666938748?text=Hello!",
              label: "WhatsApp",
              icon: <WhatsappIcon size="32" />,
              text: "WhatsApp",
            },
            {
              id: "email",
              href: "mailto:x@xscriptor.com",
              label: "Email",
              icon: <EmailIcon size="32" />,
              text: "Email",
            },
          ]}
          columns={1}
          size="small"
          alignment="center"
          textAlign="center"
          iconDefaultColor="var(--accent)"
          iconDefaultHoverColor="var(--text)"
          textColor="var(--text)"
        />

      </div>
      <div className={styles.spacer}></div>
    </div>
  );
};

