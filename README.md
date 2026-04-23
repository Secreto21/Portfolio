# Portfolio Personal - Santiago Romero

Un portfolio personal moderno y responsive desarrollado con React, Vite y Framer Motion. Diseñado para mostrar mis proyectos, habilidades y experiencia como desarrollador frontend.

## 🚀 Características

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Animaciones Fluidas**: Implementadas con Framer Motion
- **Tema Oscuro Moderno**: Interfaz elegante y profesional
- **Navegación Suave**: Scroll suave entre secciones
- **Formulario de Contacto**: Funcional con validación
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **Vite** - Herramienta de construcción
- **Framer Motion** - Animaciones
- **React Icons** - Iconografía
- **CSS3** - Estilos personalizados
- **JavaScript ES6+** - Lógica de la aplicación

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/santiagoromero/portfolio.git
cd portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter ESLint

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección de presentación
│   ├── About.jsx       # Información personal
│   ├── Projects.jsx    # Portafolio de proyectos
│   ├── Skills.jsx      # Habilidades técnicas
│   ├── Contact.jsx     # Formulario de contacto
│   └── Footer.jsx      # Pie de página
├── data/
│   └── profile.js      # Datos del perfil
├── styles/             # Archivos CSS globales
└── assets/             # Recursos estáticos
```

## 🎨 Personalización

Para personalizar el portfolio con tu información:

1. Edita `src/data/profile.js` con tus datos
2. Actualiza las imágenes en `public/`
3. Modifica los estilos en los archivos CSS correspondientes
4. Agrega tus proyectos en `src/components/Projects.jsx`

## 📱 Responsive Design

El portfolio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio con Vercel
2. Configura el build command: `npm run build`
3. Deploy automático en cada push

### Netlify
1. Conecta tu repositorio con Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
npm install -g gh-pages
gh-pages -d dist
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Santiago Romero**
- GitHub: [@Secreto21](https://github.com/Secreto21)
- LinkedIn: [Santiago Romero](https://linkedin.com/in/santiago-romero-dev)
- Email: santiago.romero.dev@gmail.com

## 🙏 Agradecimientos

- React Team por la excelente biblioteca
- Vite por la herramienta de construcción rápida
- Framer Motion por las animaciones fluidas
- React Icons por la iconografía completa

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
