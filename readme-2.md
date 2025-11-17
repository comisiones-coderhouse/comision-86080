# 🛒 Ecommerce App

Aplicación de comercio electrónico desarrollada con React y Vite, que permite a los usuarios explorar productos, agregarlos al carrito de compras y realizar compras. La aplicación utiliza Firebase Firestore como base de datos para gestionar el catálogo de productos.

## 📋 Descripción

Esta es una aplicación de ecommerce completa que incluye funcionalidades como:
- Catálogo de productos con búsqueda y filtrado por categorías
- Vista detallada de cada producto
- Carrito de compras con gestión de cantidades
- Proceso de checkout
- Página de contacto
- Interfaz de usuario moderna y responsive usando Ant Design

## 🚀 Tech Stack

### Frontend
- **React 19.1.1** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite 7.1.7** - Herramienta de construcción y desarrollo rápida
- **React Router DOM 7.9.4** - Enrutamiento para aplicaciones React

### UI/UX
- **Ant Design 5.27.4** - Biblioteca de componentes UI
- **Lucide React 0.544.0** - Iconos modernos y ligeros
- **React Hot Toast 2.6.0** - Notificaciones toast elegantes
- **SASS** - Preprocesador CSS para estilos

### Backend & Base de Datos
- **Firebase 12.5.0** - Plataforma de Google para servicios backend
- **Firestore** - Base de datos NoSQL en tiempo real

### Utilidades
- **Validator 13.15.15** - Validación de datos

### Desarrollo
- **ESLint 9.36.0** - Linter para mantener calidad de código
- **TypeScript Types** - Tipos para React y React DOM

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 18 o superior recomendada)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd ecommerce-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   VITE_API_KEY=tu_api_key_de_firebase
   ```
   
   > **Nota:** Asegúrate de obtener las credenciales de Firebase desde tu proyecto en la consola de Firebase.

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   
   La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne)

## 🎯 Uso

### Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo con hot-reload
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

### Navegación

La aplicación incluye las siguientes rutas:

- `/` - Página principal con catálogo de productos
- `/category/:id` - Vista de productos filtrados por categoría
- `/detalle-producto/:id` - Vista detallada de un producto específico
- `/cart` - Carrito de compras
- `/checkout` - Proceso de finalización de compra
- `/contacto` - Página de contacto

## 🏗️ Estructura del Proyecto

```
ecommerce-app/
├── public/                 # Archivos estáticos
│   ├── fondo.jpg
│   └── vite.svg
├── src/
│   ├── components/         # Componentes React
│   │   ├── pages/         # Páginas de la aplicación
│   │   │   ├── HomePage.jsx
│   │   │   ├── ProductsPage.jsx
│   │   │   ├── DetalleProductoPage.jsx
│   │   │   ├── CategoryPage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── CheckoutPage.jsx
│   │   │   └── ContactoPage.jsx
│   │   ├── App.jsx         # Componente principal
│   │   ├── Header.jsx      # Encabezado con navegación
│   │   ├── Footer.jsx      # Pie de página
│   │   ├── Main.jsx        # Contenedor de rutas
│   │   ├── Nav.jsx         # Barra de navegación
│   │   ├── ProductosCard.jsx      # Tarjeta de producto
│   │   ├── ProductosContainer.jsx # Contenedor de productos
│   │   ├── DetalleProducto.jsx    # Detalle de producto
│   │   ├── CartWidget.jsx         # Widget del carrito
│   │   ├── SearchBar.jsx          # Barra de búsqueda
│   │   └── ...
│   ├── hooks/              # Custom hooks
│   │   └── useProducts.jsx # Hook para consumir contexto de productos
│   ├── constants/          # Constantes y configuraciones
│   │   └── index.jsx       # Configuración del tema de Ant Design
│   ├── utils/              # Utilidades
│   │   ├── firebaseConfig.js # Configuración de Firebase
│   │   └── index.jsx
│   ├── ProductContext.jsx  # Context API para gestión del carrito
│   ├── main.jsx            # Punto de entrada de la aplicación
│   └── index.scss          # Estilos globales
├── .env                    # Variables de entorno (no incluido en git)
├── package.json           # Dependencias y scripts
├── vite.config.js         # Configuración de Vite
└── README.md              # Este archivo
```

## 🔧 Detalles de Implementación

### Gestión de Estado

La aplicación utiliza **Context API** de React para gestionar el estado global del carrito de compras:

- **ProductContext**: Contexto que proporciona funciones y estado relacionados con el carrito
  - `cant_productos`: Cantidad total de productos en el carrito
  - `addProducts()`: Función para agregar productos al carrito
  - `resetCart()`: Función para vaciar el carrito

- **useProducts**: Custom hook que facilita el consumo del contexto en los componentes

### Integración con Firebase

La aplicación se conecta a Firebase Firestore para:
- Obtener el catálogo de productos
- Consultar productos por categoría
- Obtener detalles de productos individuales

La configuración de Firebase se encuentra en `src/utils/firebaseConfig.js` y utiliza variables de entorno para las credenciales.

### Componentes Principales

- **App.jsx**: Componente raíz que envuelve la aplicación con providers necesarios (ProductContext, ConfigProvider de Ant Design, Toaster)
- **Main.jsx**: Contenedor de rutas que define la estructura de navegación
- **ProductosContainer**: Componente contenedor que maneja la lógica de obtención y filtrado de productos
- **ProductosCard**: Componente presentacional que muestra la información de un producto

### Funcionalidades Clave

1. **Búsqueda de productos**: Implementada mediante SearchBar
2. **Filtrado por categorías**: Navegación dinámica usando React Router
3. **Carrito de compras**: Gestión de estado con Context API
4. **Notificaciones**: Uso de react-hot-toast para feedback al usuario
5. **Validación**: Uso de validator para validar datos de formularios

## 🌐 Variables de Entorno

Asegúrate de configurar las siguientes variables en tu archivo `.env`:

```env
VITE_API_KEY=tu_api_key_de_firebase
```

## 📝 Notas de Desarrollo

- La aplicación sigue el patrón de diseño **Container/Presentational** para separar lógica de presentación
- Se utiliza **State Uplifting** para compartir estado entre componentes
- Los componentes están organizados siguiendo convenciones de React moderno
- El código está preparado para producción con linting configurado

## 🤝 Contribuciones

Este proyecto es parte del curso de React de Coderhouse (Comisión 86080). Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de uso educativo como parte del curso de React de Coderhouse.

## 👨‍💻 Autor

Desarrollado como proyecto del curso de React - Coderhouse Comisión 86080

---

**Nota**: Asegúrate de tener configurado correctamente Firebase y las variables de entorno antes de ejecutar la aplicación en producción.

