export const decodeHtml = (text: string) =>
    text
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/&rsquo;/g, "’");
