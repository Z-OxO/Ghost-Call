export function generateAccountId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  let id = ""
  for (let i = 0; i < 16; i++) {
    if (i > 0 && i % 4 === 0) id += "-"
    id += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return id
}

export function validateAccountId(id: string): boolean {
  const pattern = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/
  return pattern.test(id.toUpperCase())
}
