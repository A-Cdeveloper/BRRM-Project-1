export function formatPrice(amount: number): string {
  return `€ ${amount.toLocaleString("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}
