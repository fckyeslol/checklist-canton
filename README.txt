CHECKLIST FERIA DE CANTÓN 2026
================================
Rafael Deulofeut · 17 abr – 8 may 2026
Guangzhou (广州) + Yiwu (义乌)

USO OFFLINE (iPhone / iPad)
---------------------------
La app ya no depende de Google Fonts: tipografía del sistema (se ve bien en iOS).

Opción A — Desde la web (GitHub Pages u otro HTTPS)
  1. Abre la página una vez con Wi‑Fi o datos (para que se guarde en caché).
  2. Safari → botón compartir → «Añadir a pantalla de inicio».
  3. Ábrela desde el icono: debería funcionar sin internet (service worker).

Opción B — Archivo en el teléfono (sin publicar web)
  1. Envía index.html por AirDrop, correo o súbelo a iCloud Drive / Archivos.
  2. En Archivos, pulsa index.html → se abre en Safari.
  3. Funciona offline. El progreso sigue guardándose en localStorage.
  Nota: con archivo local el «service worker» no aplica; igualmente todo el contenido va dentro del HTML.

CÓMO USAR
---------
1. Abre index.html en el navegador (o el acceso en pantalla de inicio).

2. Listas / categorías:
   - En el móvil: botón «Lista» (panel inferior).
   - En pantalla ancha: chips horizontales.

3. Pulsa cada ítem (o el círculo) para marcarlo ✓

4. El progreso se guarda en el dispositivo (localStorage).

5. Etiquetas:
   Importación · Fotografía · Café

ARCHIVOS DEL PROYECTO
---------------------
- index.html      → aplicación completa
- manifest.webmanifest → para «añadir a inicio» / PWA
- sw.js           → caché offline (solo con HTTPS, p. ej. GitHub Pages)
- icon.svg        → icono de la app

NOTAS IMPORTANTES
-----------------
- Instalar VPN ANTES de salir de Colombia
- Configurar WeChat Pay ANTES del viaje
- Llevar dirección del hotel en chino impresa
- Cambiar pesos a Yuan (CNY) antes de salir

Hotel en Guangzhou:
广东省广州市海珠区沙园街道
工业大道北110号海珠新天地13楼1314房
