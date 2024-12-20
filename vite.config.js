import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   plugins: [react()],
   server: {
      open: true, // Tự động mở trình duyệt
   },
   build: {
      outDir: 'build', // Đường dẫn thư mục build giống CRA
   },
});
