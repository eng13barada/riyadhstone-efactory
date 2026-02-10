export function makeRequestId(prefix = "RSQ", date = new Date(), seq = 1) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const n = String(seq).padStart(4, "0");
  return `${prefix}-${y}${m}${d}-${n}`;
}
