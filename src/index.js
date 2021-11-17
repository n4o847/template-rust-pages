import './style.css';

(async () => {
  const crate = await import('../crate/pkg');
  crate.greet('world');
})();
