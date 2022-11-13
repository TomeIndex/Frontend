/*
 * Don't use this method for 'Letter Spacing', 'Box Shadow/Drop shadow' and 'Small Borders'. Use px directly for them.
 * Method to convert px to rem to allow proper scaling of elements
 */
export const rem = (px: number | string) => {
    return typeof px === 'number'
      ? `${px / 16}rem`
      : `${parseInt(px.split('px')[0]) / 16}rem`
  }

export * from './constants'
