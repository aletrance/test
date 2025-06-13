# NYC Travel Planner

¡Bienvenido/a!  
Este es un sitio web para planificar un itinerario de 3 días en Nueva York, con mapas interactivos, rutas optimizadas y transporte recomendado para cada atracción importante.

---

## ¿Qué incluye?

- **Itinerario sugerido** para 3 días en NYC.
- **Mapas interactivos diarios** con rutas a pie y transporte recomendado.
- **Selección personalizada de hotel** para optimizar tus recorridos.
- **Íconos personalizados** para cada tipo de destino en el mapa.
- **Información sobre tren DC-NYC**.

---

## Ver online

Accede a la web aquí (después de activar GitHub Pages):

```
https://aletrance.github.io/test/
```
> Cambia `/test/` si tu repositorio tiene otro nombre.

---

## Archivos principales

- `index.html` — Página principal y selección de hotel.
- `itinerario.html` — Itinerario de 3 días.
- `mapa-dia1.html` — Mapa de Día 1.
- `mapa-dia2.html` — Mapa de Día 2.
- `mapa-dia3.html` — Mapa de Día 3.
- `tren.html` — Info del tren DC-NYC.
- `main.js` — Lógica de mapas y rutas.
- `style.css` — Estilos.

---

## ¿Cómo publicar tu web?

1. **Sube todos los archivos al repositorio**.
2. Ve a **Settings > Pages** en GitHub.
3. Elige la rama `main` y la carpeta `/ (root)`.
4. Espera 1-2 minutos y abre el link que GitHub te da, o el de arriba.

---

## ¿Cómo editar tu API Key de Google Maps?

En cada `mapa-diaX.html` busca:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY_AQUI"></script>
```

Reemplaza `TU_API_KEY_AQUI` por tu clave real de Google Maps.

---

¡Listo!  
Tu web estará disponible online para ti o quien quieras.

---

¿Dudas o problemas?  
Abre un issue en el repo o pregunta a tu asistente 🤖.