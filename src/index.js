import './style.css';

(async () => {
  const rust = await import('../pkg');
  rust.greet('world');
})();
