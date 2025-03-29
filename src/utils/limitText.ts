export const limitText = (text: string, maxChars = 400) => {
  return text.length > maxChars ? text.slice(0, maxChars - 3) + "..." : text;
};