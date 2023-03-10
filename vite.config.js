import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/memory-card',
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
    },
    resolve: {
        modules: ['node_modules', 'public'],
    },
});
