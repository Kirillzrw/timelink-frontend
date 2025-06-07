export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

export const capitalizeWords = (str: string): string => {
  return str.replace(/(^|\P{L}+)(\p{L})/gu, (_, before, letter) => before + letter.toUpperCase())
}
