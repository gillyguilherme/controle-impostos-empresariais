export function calculateTax(
  revenue: number,
  taxRate: number
): number {
  return revenue * (taxRate / 100);
}
