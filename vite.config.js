import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        avisoLegal: resolve(__dirname, "aviso-legal.html"),
        blog: resolve(__dirname, "blog.html"),
        contacto: resolve(__dirname, "contacto.html"),
        cursos: resolve(__dirname, "cursos.html"),
        login: resolve(__dirname, "login.html"),
        quienesSomos: resolve(__dirname, "quienessomos.html"),
        registro: resolve(__dirname, "registro.html"),
        cursoBlockchain: resolve(__dirname, "cursos/curso-blockchain.html"),
        cursoFullStack: resolve(__dirname, "cursos/curso-full-stack.html"),
      },
    },
  },
});
