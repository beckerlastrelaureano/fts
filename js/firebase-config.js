/**
 * firebase-config.js
 * -----------------------------------------------------------------------
 * Reemplazá estos valores por los de TU proyecto de Firebase.
 * Los vas a encontrar en: Firebase Console → ⚙️ Configuración del proyecto
 * → "Tus apps" → app web → "Configuración del SDK".
 *
 * Esto NO es un secreto que haya que esconder: es normal que la config de
 * Firebase quede visible en el código del lado del cliente. La seguridad
 * real la dan las "Reglas de seguridad" de Firestore (ver firestore.rules
 * en la raíz del proyecto), no ocultar esta config.
 */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAlK31P-kP4I2Ds64Wc89_L85fIEH2bN2I",
  authDomain: "tomicoach.firebaseapp.com",
  projectId: "tomicoach",
  storageBucket: "tomicoach.firebasestorage.app",
  messagingSenderId: "419702278394",
  appId: "1:419702278394:web:8fdfd8e739892eaa60e143"
};

// Email que la app reconoce automáticamente como el superadmin (Becker).
// Esa persona no necesita código de invitación: se le crea la cuenta de
// superadmin directamente. Cualquier otra persona necesita un código
// (de entrenador, generado por el superadmin, o el código propio de un
// entrenador para darle de alta a sus alumnos).
const EMAIL_SUPERADMIN = "beckerlastrelaureano@gmail.com";
