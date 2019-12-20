export default function () {
  if (typeof document !== 'object') return false
  const ua = navigator.userAgent;
  return /Safari/.test(ua) && !/Chrome/.test(ua);
}