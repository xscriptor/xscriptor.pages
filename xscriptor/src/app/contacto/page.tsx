import styles from './ContactPage.module.css';
import Socialcontact from "../components/contact/socialcontact";
import XContactForm from '../components/xcomponents/xcontacform/XContactForm';

export const metadata = {
  title: "Contacto — Xscriptor",
  description: "Comunícate con Óscar Preciado — Formulario de contacto y redes sociales",
}

export default function ContactPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <h2>Déjame un mensaje</h2>


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
        /></div>
        
        <h3>Encuéntrame en redes</h3>
        <Socialcontact />
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
};

