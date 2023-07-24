export const createURL = (path: string) =>
  window.location ? window.location.origin + path : ''
