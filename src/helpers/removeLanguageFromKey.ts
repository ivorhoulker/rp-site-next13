/** Remove the En or Zh from the end of a string - used to normalise keys returned from NocoDB */
export function removeLanguageFromEndOfString(str: string) {
    return str.replace(/(En|Zh$)/, "");
}
