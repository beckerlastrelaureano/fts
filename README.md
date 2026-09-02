# Tomicoach

Panel para entrenadores personales. Cada entrenador que le compra a Becker gestiona a sus propios
alumnos: les arma la rutina, ve su asistencia y su progreso. Todo corre sobre un único proyecto
de Firebase compartido, con corte real de acceso por suscripción.

## Los tres roles

### 🔑 Superadmin (Becker)

Es Becker, identificado por su email (`beckerlastrelaureano@gmail.com`), hardcodeado en
`js/firebase-config.js`. No necesita registrarse: entra directamente con ese email y ve el panel
de administración general.

Desde ahí puede:

- **Generar códigos de invitación** de un solo uso para entrenadores nuevos (los códigos viven en
  la colección `codigosInvitacion`, con `tipo: 'entrenador'` y `usado: false` hasta que alguien
  los use para registrarse).
- **Ver la lista completa de entrenadores**, con su nombre de negocio y su estado de pago.
- **Suspender o reactivar** a cualquier entrenador con un botón. Suspender a un entrenador corta
  el acceso **a ese entrenador y a todos sus alumnos** de una sola vez, sin tocar a los demás
  entrenadores. Esto se logra guardando `estadoPago: 'suspendido'` en la ficha del entrenador; los
  alumnos, al iniciar sesión, leen el estado de su propio entrenador y ven la pantalla de cuenta
  suspendida si corresponde.

### 🏋️ Entrenador

Se registra usando el código que le pasó Becker. Al registrarse:

1. Se valida que el código exista, sea de `tipo: 'entrenador'` y no esté usado.
2. Se marca el código como `usado: true`.
3. Se crea su ficha en `usuarios/{uid}` con `rol: 'entrenador'`.

A partir de ahí, su propio **uid** funciona como su código personal para pasarles a sus alumnos
(no hace falta generar nada aparte). Desde su panel puede:

- Ver y administrar únicamente a **sus** alumnos (nunca a los de otro entrenador).
- Armarle la rutina a cada alumno, manualmente o por objetivo (reutiliza la misma base de 353
  ejercicios de Becker App).
- Ver el calendario de asistencia y el gráfico de progreso de cada alumno.

### 🧍 Alumno

Se registra con el código de su entrenador (su uid). Al registrarse queda vinculado mediante el
campo `entrenadorId` en su propia ficha de `usuarios/{uid}`.

Ve y entrena únicamente su propia rutina. Si su entrenador es suspendido por el superadmin, al
iniciar sesión ve una pantalla de "cuenta suspendida" en lugar de la app.

## Colecciones en Firestore

```
usuarios/{uid}          -> { rol, nombre, email, entrenadorId, objetivo, nivel,
                              estadoPago, nombreNegocio, fechaAlta }
codigosInvitacion/{cod} -> { tipo: 'entrenador', nombreNegocio, usado, fechaCreacion }
rutinas/{alumnoUid}     -> misma estructura que Becker App (días, ejercicios, calentamiento)
entrenamientos/{id}     -> historial append-only, con alumnoUid + entrenadorId
```

Las reglas de seguridad completas están en `firestore.rules`, ya adaptadas a este modelo de tres
roles (antes reflejaban un modelo viejo de un solo entrenador fijo por email).

## Estructura de archivos

```
BeckerCoach/
├── index.html
├── manifest.json
├── sw.js
├── firestore.rules
├── README.md
├── css/
│   └── style.css              (adaptado del de Becker App)
├── js/
│   ├── database.js             (los mismos 353 ejercicios de Becker App)
│   ├── firebase-config.js      (credenciales del proyecto de Firebase real — completar)
│   ├── firebase-service.js     (toda la comunicación con Firebase: auth, Firestore CRUD)
│   └── app.js                  (UI: login/registro, dashboards de los tres roles)
└── assets/
    └── iconos/                 (sprite de íconos, poses de ejercicios, logo)
```

## Stack técnico

HTML/CSS/JS vanilla, sin frameworks ni build step. Firebase **compat SDK** (namespaced API, vía
`<script>` tags normales) para que combine con el resto del código. Chart.js para los gráficos.
Mismo sistema de diseño (tema oscuro, tipografías Space Grotesk / Inter / JetBrains Mono) que
Becker App.

## Estado actual

Probado de punta a punta con un simulador de Firebase (mock en JS), porque todavía no existe el
proyecto de Firebase real: registro de superadmin, generación de código, registro de entrenador,
código propio del entrenador para sus alumnos, registro de alumno, generación de rutina por
objetivo, entrenamiento completo, ficha del alumno vista por su entrenador, y corte de acceso por
suspensión — todo confirmado funcionando en el simulador.

## Próximos pasos

1. Empaquetar y entregar el zip final de esta versión.
2. Crear el proyecto de Firebase real (Authentication con email/contraseña, Firestore, subir estas
   reglas de seguridad, completar `js/firebase-config.js` con las credenciales reales).
3. Definir la pasarela de pago y el flujo concreto de facturación mensual.
