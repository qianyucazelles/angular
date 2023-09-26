// text-formatting.ts

export function upperLowerTxt(input: string): string {
    const trimmedText = input.trim();
  
    if (trimmedText.length === 0) {
      return '';
    }
  
    const formattedText =
      trimmedText.charAt(0).toUpperCase() +
      trimmedText.slice(1).toLowerCase();
  
    return formattedText;
  }
  