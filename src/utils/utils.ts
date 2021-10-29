/** 
 * Cleans up multiple CSS class names into one CSS class string
*/
export const cls = (input: string) =>
    input
        .replace(/\s+/gm, " ")
        .split(" ")
        .filter((cond) => typeof cond === "string" && cond !== "undefined")
        .join(" ")
        .trim();