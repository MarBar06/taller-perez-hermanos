# 📸 Instrucciones para Agregar los Logos

## Ubicación de los Logos

Los logos que proporcionaste deben colocarse en la carpeta:
```
/Users/marbar/code/tph/assets/images/
```

## Archivos Necesarios

Necesitas colocar estos dos archivos de imagen en la carpeta `assets/images/`:

1. **logo-tph.png** - Logo de Taller Perez Hermanos (el logo con el pistón y las letras TPH)
2. **logo-cvv.png** - Logo de Centro de Verificación Vehicular Ira003 (el logo verde con la palomita)

## Pasos para Agregar los Logos

### Opción 1: Usando el Finder (macOS)

1. Abre el Finder
2. Navega a: `/Users/marbar/code/tph/assets/images/`
3. Arrastra y suelta los dos archivos de logo en esta carpeta
4. Asegúrate de que los nombres sean exactamente:
   - `logo-tph.png`
   - `logo-cvv.png`

### Opción 2: Usando la Terminal

```bash
# Navega a la carpeta del proyecto
cd /Users/marbar/code/tph

# Copia los logos desde donde los tengas guardados
# Reemplaza /ruta/a/tus/logos/ con la ubicación real de tus archivos
cp /ruta/a/tus/logos/logo-tph.png assets/images/logo-tph.png
cp /ruta/a/tus/logos/logo-cvv.png assets/images/logo-cvv.png
```

### Opción 3: Usando Visual Studio Code

1. Abre Visual Studio Code
2. En el explorador de archivos (panel izquierdo), navega a `assets/images/`
3. Arrastra y suelta los archivos de logo directamente en la carpeta
4. Renombra los archivos si es necesario para que coincidan con los nombres requeridos

## Verificación

Después de agregar los logos, verifica que estén en su lugar:

```bash
ls -la /Users/marbar/code/tph/assets/images/
```

Deberías ver:
```
logo-tph.png
logo-cvv.png
```

## Especificaciones de los Logos

### Logo TPH (logo-tph.png)
- **Formato:** PNG con fondo transparente
- **Tamaño recomendado:** 500x500 px o mayor
- **Uso:** Header, footer, sección "Sobre Nosotros"

### Logo CVV (logo-cvv.png)
- **Formato:** PNG con fondo transparente
- **Tamaño recomendado:** 500x500 px o mayor
- **Uso:** Header, hero section, favicon

## Importante

✅ **Los logos DEBEN tener fondo transparente** (formato PNG)
✅ **Los nombres de archivo deben ser exactamente como se indica** (minúsculas, sin espacios)
✅ **Ambos logos son necesarios para que el sitio se vea correctamente**

## ¿Dónde se Usan los Logos?

### logo-cvv.png se usa en:
- Navegación (header) - todas las páginas
- Hero section - página principal
- Favicon - todas las páginas

### logo-tph.png se usa en:
- Sección "Sobre Nosotros" - página principal
- Footer - todas las páginas

## Si los Logos No Aparecen

Si después de agregar los logos no aparecen en el sitio:

1. **Verifica los nombres de archivo:**
   - Deben ser exactamente `logo-tph.png` y `logo-cvv.png`
   - Todo en minúsculas
   - Sin espacios ni caracteres especiales

2. **Verifica la ubicación:**
   - Deben estar en `/Users/marbar/code/tph/assets/images/`
   - No en ninguna subcarpeta

3. **Verifica el formato:**
   - Deben ser archivos PNG
   - Con fondo transparente

4. **Refresca el navegador:**
   - Presiona Cmd+Shift+R (macOS) o Ctrl+Shift+R (Windows/Linux)
   - Esto fuerza una recarga completa

## Alternativa: Usar URLs Externas

Si prefieres usar URLs externas (por ejemplo, desde un CDN o servidor de imágenes), puedes editar los archivos HTML y cambiar las rutas:

En lugar de:
```html
<img src="assets/images/logo-cvv.png" alt="...">
```

Usa:
```html
<img src="https://tu-servidor.com/ruta/al/logo.png" alt="...">
```

---

**Nota:** Los logos que proporcionaste en la tarea original están listos para ser usados. Solo necesitas copiarlos a la carpeta `assets/images/` con los nombres correctos.
