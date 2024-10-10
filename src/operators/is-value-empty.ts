export function isValueEmpty<T>(value: T | null | undefined): boolean {
  return (
    typeof asOptional(value) === 'undefined' ||
    (typeof value === 'string' && value === '') ||
    (Array.isArray(value) && !value.length)
  );
}

function asOptional<T>(value: T | null | undefined): T | undefined {
  return value == null ? undefined : value;
}
