export function safeJsonParse<T>(value: string): T {
  return JSON.parse(value) as T;
}
