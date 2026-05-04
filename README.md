# Centro de Verificación Vehicular Ira003
## Taller Perez Hermanos

Sitio web institucional profesional para verificación de empresa en Meta Business y autorización de app/chatbot.

---

## 📋 Descripción del Proyecto

Este sitio web ha sido diseñado específicamente para:
- Verificación de empresa en Meta Business
- Respaldar la autorización de una app/chatbot conectada a Meta
- Proporcionar información institucional clara y confiable
- Cumplir con requisitos de transparencia y políticas legales

**Razón Social:** Taller Perez Hermanos
**Nombre Comercial/Unidad Operativa:** Centro de Verificación Vehicular Ira003

---

## 🗂️ Estructura del Proyecto

```
/tph
├── index.html              # Página principal
├── privacy.html            # Aviso de Privacidad
├── terms.html              # Condiciones del Servicio
├── data-deletion.html      # Eliminación de Datos
├── README.md               # Este archivo
└── assets/
    ├── css/
    │   └── styles.css      # Estilos principales
    ├── js/
    │   └── main.js         # JavaScript principal
    └── images/
        ├── logo-tph.png    # Logo Taller Perez Hermanos
        └── logo-cvv.png    # Logo Centro de Verificación Vehicular
```

---

## 🚀 Características

### Diseño
- ✅ Responsive (mobile-first)
- ✅ Profesional e institucional
- ✅ Colores: Azul oscuro, blanco, gris claro, verde acento
- ✅ Navegación clara y accesible

### Páginas Incluidas

#### 1. **index.html** - Página Principal
- Hero section con título y CTA
- Sección "Sobre Nosotros"
- Servicios ofrecidos
- Uso del chatbot y notificaciones
- Relación comercial clara
- Información de contacto

#### 2. **privacy.html** - Aviso de Privacidad
- Responsable del tratamiento de datos
- Datos personales recopilados
- Finalidades del tratamiento
- Uso de canales digitales y chatbot
- Derechos ARCO
- Medidas de seguridad

#### 3. **terms.html** - Condiciones del Servicio
- Descripción del servicio
- Uso del sitio web y chatbot
- Responsabilidad del usuario
- Limitación de responsabilidad
- Jurisdicción y ley aplicable

#### 4. **data-deletion.html** - Eliminación de Datos
- Instrucciones claras para solicitar eliminación
- Proceso paso a paso
- Tiempo de respuesta
- Instrucciones para plataformas de Meta

### Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript vanilla (ES6+)
- Sin frameworks pesados
- Optimizado para SEO

---

## 📝 Configuración Inicial

### 1. Agregar Logos

Coloca los logos en la carpeta `assets/images/`:
- `logo-tph.png` - Logo de Taller Perez Hermanos
- `logo-cvv.png` - Logo de Centro de Verificación Vehicular Ira003

**Importante:** Asegúrate de que los logos tengan fondo transparente (formato PNG).

### 2. Completar Información de Contacto

Busca y reemplaza los siguientes placeholders en **todos los archivos HTML**:

- `[AGREGAR TELÉFONO]` → Tu número de teléfono (ej: 4771234567)
- `[AGREGAR CORREO]` → Tu correo electrónico (ej: contacto@tallerperezhermanos.com)
- `[AGREGAR DIRECCIÓN]` → Tu dirección completa
- `[AGREGAR CIUDAD]` → Tu ciudad
- `[AGREGAR HORARIO]` → Tu horario de atención (ej: Lunes a Viernes 8:00 AM - 6:00 PM)

**Archivos a editar:**
- `index.html`
- `privacy.html`
- `terms.html`
- `data-deletion.html`

### 3. Actualizar Schema.org

En `index.html`, actualiza el JSON-LD con tu información real:

```json
{
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "Centro de Verificación Vehicular Ira003",
  "legalName": "Taller Perez Hermanos",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tu Ciudad",
    "addressRegion": "Guanajuato",
    "addressCountry": "MX",
    "streetAddress": "Tu Dirección Completa"
  },
  "telephone": "+52XXXXXXXXXX",
  "email": "tu@correo.com"
}
```

---

## 🌐 Despliegue

### Opciones de Hosting Recomendadas

#### 1. **GitHub Pages** (Gratis)
```bash
# Crear repositorio en GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/tph.git
git push -u origin main

# Activar GitHub Pages en Settings → Pages → Source: main branch
```

#### 2. **Netlify** (Gratis)
1. Arrastra la carpeta del proyecto a netlify.com/drop
2. O conecta tu repositorio de GitHub
3. Configuración automática

#### 3. **Vercel** (Gratis)
```bash
npm i -g vercel
vercel
```

#### 4. **Hosting Tradicional**
Sube todos los archivos vía FTP a tu servidor web.

---

## ✅ Checklist Pre-Lanzamiento

Antes de publicar el sitio, verifica:

- [ ] Logos agregados en `assets/images/`
- [ ] Todos los placeholders `[AGREGAR ...]` reemplazados
- [ ] Información de contacto correcta en todas las páginas
- [ ] Schema.org actualizado con datos reales
- [ ] Enlaces del footer funcionando correctamente
- [ ] Navegación móvil funcionando
- [ ] Todas las páginas legales accesibles
- [ ] Prueba en diferentes dispositivos (móvil, tablet, desktop)
- [ ] Prueba en diferentes navegadores (Chrome, Firefox, Safari)

---

## 🔍 SEO y Meta Business

### Meta Tags Incluidos
- Title y Description optimizados
- Open Graph tags para redes sociales
- Schema.org LocalBusiness/AutomotiveBusiness
- Viewport para responsive design

### Para Verificación en Meta Business

1. **Dominio verificado:** Asegúrate de tener un dominio propio
2. **HTTPS:** Usa certificado SSL (la mayoría de hostings lo incluyen gratis)
3. **Páginas legales visibles:** Privacy, Terms, Data Deletion deben ser accesibles
4. **Información consistente:** Nombre del negocio debe coincidir en todas las páginas
5. **Contacto visible:** Email y teléfono deben estar claramente visibles

---

## 📱 Uso del Chatbot

El sitio explica claramente que el chatbot se utiliza para:
- Confirmar citas
- Enviar recordatorios
- Notificar cambios de horario
- Dar seguimiento al servicio
- Resolver dudas frecuentes

**Importante:** Se aclara que NO se solicita información financiera sensible ni contraseñas.

---

## 🔒 Privacidad y Cumplimiento

El sitio incluye:
- ✅ Aviso de Privacidad completo (LFPDPPP México)
- ✅ Condiciones del Servicio
- ✅ Política de Eliminación de Datos
- ✅ Instrucciones para ejercer derechos ARCO
- ✅ Información sobre uso de datos en plataformas Meta

---

## 🛠️ Personalización

### Cambiar Colores

Edita las variables CSS en `assets/css/styles.css`:

```css
:root {
    --color-primary: #1e3a8a;        /* Azul oscuro */
    --color-secondary: #22c55e;      /* Verde acento */
    /* Modifica según tu marca */
}
```

### Agregar Secciones

El código está bien comentado y estructurado. Puedes agregar nuevas secciones siguiendo el patrón existente.

---

## 📞 Soporte

Para dudas o modificaciones, contacta al desarrollador o consulta la documentación de:
- HTML: https://developer.mozilla.org/es/docs/Web/HTML
- CSS: https://developer.mozilla.org/es/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/es/docs/Web/JavaScript

---

## 📄 Licencia

Este proyecto ha sido desarrollado específicamente para **Taller Perez Hermanos / Centro de Verificación Vehicular Ira003**.

---

## 🎯 Notas Importantes

1. **No inventes información:** No agregues números de registro, permisos oficiales ni certificaciones que no tengas.
2. **No afirmes aprobación de Meta:** No digas que estás "aprobado por Meta" o "certificado por Facebook".
3. **Mantén consistencia:** El nombre "Taller Perez Hermanos" y "Centro de Verificación Vehicular Ira003" deben aparecer consistentemente.
4. **Actualiza fechas:** Revisa y actualiza las fechas de "última actualización" en las páginas legales periódicamente.

---

## 📊 Estructura de Navegación

```
Inicio (index.html)
├── Nosotros (#nosotros)
├── Servicios (#servicios)
├── Contacto (#contacto)
├── Privacidad (privacy.html)
├── Términos (terms.html)
└── Eliminación de Datos (data-deletion.html)
```

Todos los enlaces están en el header y footer para fácil acceso.

---

**Desarrollado con ❤️ para Taller Perez Hermanos**
**Centro de Verificación Vehicular Ira003**
**Guanajuato, México**
