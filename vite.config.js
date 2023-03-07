import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
    mode: 'production',
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
    },
    build: {
        base: process.env.NODE_ENV === 'production' ? '/memory-card/' : '/',
    },
});
