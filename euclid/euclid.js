function gcd(a, b) {
  const remainder = a % b;
  if (remainder === 0) return b;
  return gcd(b, remainder);
}
