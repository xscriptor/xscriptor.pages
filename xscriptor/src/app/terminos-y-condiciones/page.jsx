import styles from './TermsConditionsCookiesPage.module.css';

export const metadata = {
  title: "Términos y condiciones - Xscriptor",
  description: "Términos y condiciones de uso del sitio web xscriptor.com",
};

export default function TermsConditionsCookiesPage () {
  return (
      <div>
        <h1>Términos, Condiciones y Política de Cookies</h1>
        <section>
          <h2>1. Términos y Condiciones</h2>
          <h3>Introducción</h3>
          <p>Bienvenido a xscriptor.com al utilizar nuestro sitio web, aceptas cumplir y estar sujeto a los siguientes términos y condiciones.</p>
          
          <h3>Uso del Sitio</h3>
          <p>Está prohibido el uso indebido del sitio web, incluyendo pero no limitado a, cometer o facilitar actos delictivos, transmitir virus, malware, o cualquier otro material malicioso o tecnológicamente dañino.</p>
          
          <h3>Cuenta de Usuario</h3>
          <p>Para acceder a ciertos servicios, es posible que necesites crear una cuenta. Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y de todas las actividades que ocurran bajo tu cuenta.</p>
          
          <h3>Productos y Servicios</h3>
          <p>Nos reservamos el derecho de modificar los productos y servicios ofrecidos en nuestro sitio en cualquier momento sin previo aviso.</p>
          
          <h3>Propiedad Intelectual</h3>
          <p>Todo el contenido del sitio web, incluyendo textos, gráficos, logotipos, y software, es propiedad de xscriptor.com o sus proveedores de contenido y está protegido por las leyes de propiedad intelectual.</p>
          
          <h3>Limitación de Responsabilidad</h3>
          <p>En la máxima medida permitida por la ley, xscriptor.com no será responsable de ninguna pérdida o daño que resulte del uso del sitio web.</p>
          
          <h3>Modificaciones de los Términos</h3>
          <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor en el momento de su publicación en el sitio web.</p>
          
          <h3>Contacto</h3>
          <p>
            Si tienes alguna pregunta sobre estos términos y condiciones, contáctanos en 
            <a href="mailto:x@xscriptor.com"> x@xscriptor.com</a>.
          </p>
        </section>
        
        <section>
          <h2>2. Política de Privacidad</h2>
          <h3>Introducción</h3>
          <p>Tu privacidad es muy importante para nosotros. Esta política de privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información personal.</p>
          
          <h3>Información Recopilada</h3>
          <p>Recopilamos información personal y no personal cuando interactúas con nuestro sitio web. Esto incluye la dirección de protocolo de Internet (IP), datos de inicio de sesión, dirección de correo electrónico, contraseña, información de la computadora y la conexión, y el historial de compras.</p>
          
          <h3>Uso de la Información</h3>
          <p>Usamos la información recopilada para proporcionar y operar nuestros servicios, brindar asistencia al cliente, contactar a los usuarios con avisos personalizados, crear datos estadísticos agregados y cumplir con las leyes y regulaciones aplicables.</p>
          
          <h3>Almacenamiento y Seguridad de Datos</h3>
          <p>Tus datos se almacenan a través de los sistemas de Hostinger en servidores seguros protegidos por un firewall.</p>
          
          <h3>Modificaciones a la Política de Privacidad</h3>
          <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios tendrán efecto inmediato tras su publicación en la página web.</p>
          
          <h3>Contacto</h3>
          <p>
            Si deseas acceder, corregir, modificar o eliminar cualquier información personal que tengamos sobre ti, envíanos un correo a 
            <a href="mailto:x@xscriptor.com"> x@xscriptor.com</a>.
          </p>
        </section>

        <section>
          <h2>3. Política de Cookies</h2>
          <p>En xscriptor.com, recibimos, recopilamos y almacenamos cualquier información que ingreses en nuestro sitio web o nos proporciones de otra manera...</p>
          
          <h3>Propósitos de la Recopilación de Información</h3>
          <ul className={styles.ul}>
            <li>Proporcionar y operar nuestros servicios de manera eficiente.</li>
            <li>Brindar asistencia continua al cliente y soporte técnico especializado.</li>
            <li>Contactar a nuestros usuarios con avisos personalizados...</li>
          </ul>
          
          <h3>Almacenamiento y Seguridad de Datos</h3>
          <p>Nuestro sitio web y tienda en línea están alojados en la plataforma Hostinger, que nos proporciona la infraestructura segura para venderte nuestros productos y servicios...</p>
          
          <h3>Comunicaciones</h3>
          <p>Podemos comunicarnos contigo para notificarte sobre tu cuenta, resolver problemas, gestionar disputas...</p>
        </section>     
      </div>
  );
};
