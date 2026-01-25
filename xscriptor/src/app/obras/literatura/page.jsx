import ImageTrail from '@/app/components/ImageTrail';
import styles from './LiteraturaPage.module.css';



export default function librosPage() {
    return (
        <div>
            <h1>Literatura</h1>
            <div>
            <div className={styles.imageTrailContainer}>
                <ImageTrail
                    items={[
                        "/images/colecciones/trail/trail1.jpg",
                        "/images/colecciones/trail/trail2.jpg",
                        "/images/colecciones/trail/trail3.jpg",
                        "/images/colecciones/trail/trail4.jpg",
                        "/images/colecciones/trail/trail5.jpg",
                        "/images/colecciones/trail/trail6.jpg",
                        "/images/colecciones/trail/trail7.jpg",
                        "/images/colecciones/trail/trail8.jpg",
                        "/images/colecciones/trail/trail0.jpg",
                        "/images/colecciones/trail/trail11.jpg",
                        "/images/colecciones/trail/trail12.jpg",
                        "/images/colecciones/trail/trail13.jpg",
                        "/images/colecciones/trail/trail14.jpg",
                        "/images/colecciones/trail/trail15.jpg",
                        "/images/colecciones/trail/trail16.jpg",
                        "/images/colecciones/trail/trail17.jpg",
                        "/images/colecciones/trail/trail18.jpg",
                        "/images/colecciones/trail/trail19.jpg",
                        "/images/colecciones/trail/trail20.jpg",
                        "/images/colecciones/trail/trail21.jpg",
                        "/images/colecciones/trail/trail22.jpg",
                        "/images/colecciones/trail/trail23.jpg",
                    ]}
                    variant={1}
                />
            </div>
            </div>
            <div className={styles.relatedResources}>
            <h2>
                Otros recursos relacionados
            </h2>
            <ul>
                <li>
                    <a href="https://www.instagram.com/xliterato">
                        @Xliterato
                    </a>| página de divulgación literaria.
                </li>
                <li>
                    <a href="https://www.xscriptor.com/blog">
                        Blog
                    </a>| desarrollos literarios paralelos.
                </li>
                <li>
                    <a href="https://www.instagram.com/xscriptorde">
                        @Xscriptorde
                    </a>| Divulgación de contenidos literarios en alemán.
                </li>
                <li>
                    <a href="https://www.instagram.com/xscriptorcode">
                        @Xscriptorcode
                    </a>| Desarrollo de proyectos tecnológicos y literarios.
                </li>
                <li>
                    <a href="https://dev.xscriptor.com/">
                        dev
                    </a>| Página de portafolio de desarrollos tecnológicos y literarios.
                </li>
            </ul>
            </div>
        </div>
    );
}
