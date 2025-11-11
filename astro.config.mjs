import { defineConfig } from 'astro/config';
import node from '@astrojs/node'; // Importa el adaptador

export default defineConfig({
    // ... otras configuraciones
    output: 'server', // Establece el modo de renderizado a servidor
    adapter: node({
        mode: 'standalone' // O 'middleware', según tu despliegue final
    })
});