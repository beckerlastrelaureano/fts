/**
 * timer.js
 * -----------------------------------------------------------------------
 * Cronómetro de descanso. Cuenta regresiva con presets (30s a 300s),
 * pausa, reinicio y una señal sonora sintetizada con la Web Audio API al
 * finalizar (así no depende de ningún archivo de audio externo).
 * Portado de Becker App / GymTracker.
 */

const RestTimer = (() => {

  let segundosRestantes = 90;
  let segundosIniciales = 90;
  let intervalo = null;
  let corriendo = false;
  let onTick = () => {};
  let onFin = () => {};
  let audioCtx = null;

  function inicializar({ tick, fin } = {}) {
    if (tick) onTick = tick;
    if (fin) onFin = fin;
  }

  function reproducirBeep() {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const ahora = audioCtx.currentTime;
      [0, 0.25, 0.5].forEach((offset, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.value = i === 2 ? 1046.5 : 880;
        gain.gain.setValueAtTime(0.0001, ahora + offset);
        gain.gain.exponentialRampToValueAtTime(0.3, ahora + offset + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ahora + offset + 0.22);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(ahora + offset);
        osc.stop(ahora + offset + 0.24);
      });
    } catch (err) {
      console.warn('[RestTimer] No se pudo reproducir el sonido:', err);
    }
  }

  function establecer(segundos) {
    detener();
    segundosIniciales = segundos;
    segundosRestantes = segundos;
    onTick(segundosRestantes, segundosIniciales);
  }

  function iniciar() {
    if (corriendo) return;
    corriendo = true;
    intervalo = setInterval(() => {
      segundosRestantes--;
      onTick(segundosRestantes, segundosIniciales);
      if (segundosRestantes <= 0) {
        detener();
        reproducirBeep();
        onFin();
      }
    }, 1000);
  }

  function pausar() {
    corriendo = false;
    clearInterval(intervalo);
  }

  function detener() {
    corriendo = false;
    clearInterval(intervalo);
    intervalo = null;
  }

  function reiniciar() {
    establecer(segundosIniciales);
  }

  function agregarSegundos(delta) {
    segundosRestantes = Math.max(0, segundosRestantes + delta);
    onTick(segundosRestantes, segundosIniciales);
  }

  function estaCorriendo() {
    return corriendo;
  }

  function getRestantes() {
    return segundosRestantes;
  }

  return {
    inicializar, establecer, iniciar, pausar, detener, reiniciar,
    agregarSegundos, estaCorriendo, getRestantes, reproducirBeep
  };
})();
