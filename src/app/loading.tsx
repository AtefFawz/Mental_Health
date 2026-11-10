export default function Loading() {
  return (
    <main className="loading-screen" aria-live="polite" aria-busy="true">
      <span className="loading-mark" aria-hidden="true">s.</span>
      <p>Making a little space…</p>
    </main>
  );
}
