export const parseHTML = (value: string) => {
  const parser = new DOMParser()
  const parsedContent = parser.parseFromString(value, 'text/html').body.textContent;
  return parsedContent ?? ""
}