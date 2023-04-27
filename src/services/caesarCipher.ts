interface CaesarCipherOptions {
  shift?: number;
}

export function caesarCipherEncode(
  value: string,
  options: CaesarCipherOptions
): string {
  const shift = options.shift || 0;
  let result = '';
  for (let i = 0; i < value.length; i++) {
    const charCode = value.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letter.
      result += String.fromCharCode(((charCode + shift - 65) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letter.
      result += String.fromCharCode(((charCode + shift - 97) % 26) + 97);
    } else {
      // Other.
      result += value[i];
    }
  }
  return result;
}
