import snarkdown from "snarkdown";

// <p> tags aren't currentl supported by snarkdown, so this extends it
// see https://github.com/developit/snarkdown/issues/11
export function markdownToHtml(markdown: string) {
    return markdown
        .split(/(?:\r?\n){2,}/)
        .map((l) =>
            [" ", "\t", "#", "- ", "* ", "> "].some((char) => l.startsWith(char))
                ? snarkdown(l)
                : `<p>${snarkdown(l)}</p>`,
        )
        .join("\n");
}
