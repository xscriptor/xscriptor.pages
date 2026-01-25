import DecryptedText from "../components/decrypttext/decrypttext";
import styles from './contacto.module.css';

export default function Page() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contacto</h1>

            <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                    <a href="mailto:x@xscriptor.com" className={styles.contactLink}>
                        <p className={styles.contactText}>
                            <DecryptedText
                                text="Email: x@xscriptor.com"
                                animateOn="view"
                                sequential
                                revealDirection="center"
                                speed={30}
                                maxIterations={30}
                                encryptedClassName="text-red-500 animate-pulse"
                                parentClassName="" />
                        </p>
                    </a>
                </div>
                
                <div className={styles.contactItem}>
                    <a href="https://api.whatsapp.com/send/?phone=34666938748&text=Hello%20Xscriptor" className={styles.contactLink}>
                        <p className={styles.contactText}>
                            <DecryptedText
                                text="whatsapp: +34 123 456 789"
                                animateOn="view"
                                sequential
                                revealDirection="center"
                                speed={30}
                                maxIterations={30}
                                encryptedClassName="text-blue-500 animate-pulse"
                                parentClassName="" />
                        </p>
                    </a>
                </div>
                
                <div className={styles.contactItem}>
                    <a href="https://instagram.com/xscriptor.art" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                        <p className={styles.contactText}>
                            <DecryptedText
                                text="Instagram: @xscriptor.art"
                                animateOn="view"
                                sequential
                                revealDirection="center"
                                speed={30}
                                maxIterations={30}
                                encryptedClassName="text-purple-500 animate-pulse"
                                parentClassName="" />
                        </p>
                    </a>
                </div>
                <div className={styles.contactItem}>
                    <a href="https://instagram.com/xscriptor" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                        <p className={styles.contactText}>
                            <DecryptedText
                                text="Main Ig: @xscriptor"
                                animateOn="view"
                                sequential
                                revealDirection="center"
                                speed={30}
                                maxIterations={30}
                                encryptedClassName="text-purple-500 animate-pulse"
                                parentClassName="" />
                        </p>
                    </a>
                </div>
                
                <div className={styles.contactItem}>
                    <a href="https://twitter.com/xscriptor" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                        <p className={styles.contactText}>
                            <DecryptedText
                                text="Twitter: @xscriptor"
                                animateOn="view"
                                sequential
                                revealDirection="center"
                                speed={30}
                                maxIterations={30}
                                encryptedClassName="text-cyan-500 animate-pulse"
                                parentClassName="" />
                        </p>
                    </a>
                </div>
                
                <div className={styles.contactItem}>
                    <a href="https://t.me/xscriptor" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    <p className={styles.contactText}>
                        <DecryptedText
                            text="Telegram: t.me/xscriptor"
                            animateOn="view"
                            sequential
                            revealDirection="center"
                            speed={30}
                            maxIterations={30}
                            encryptedClassName="text-indigo-500 animate-pulse"
                            parentClassName="" />
                    </p>
                    </a>
                </div>
                <div className={styles.contactItem}>
                    <a href="https://github.com/xscriptorcode" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                        <p className={styles.contactText}>
                            <DecryptedText
                                text="Github: /xscriptorcode"
                                animateOn="view"
                                sequential
                                revealDirection="center"
                                speed={30}
                                maxIterations={30}
                                encryptedClassName="text-indigo-500 animate-pulse"
                                parentClassName="" />
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}