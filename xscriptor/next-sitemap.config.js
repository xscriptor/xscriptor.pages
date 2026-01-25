/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.xscriptor.com', // URL base de tu sitio web
  generateRobotsTxt: true, // Genera automáticamente el archivo robots.txt
  sitemapSize: 10000, // Tamaño máximo de cada sitemap
  exclude: ['/api/*'], // Excluye las rutas de la API del sitemap
};
