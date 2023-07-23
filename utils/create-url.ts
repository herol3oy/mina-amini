export const createURL = (path: string) => {
  if (typeof window !== 'undefined' && window.location) {
    return window.location.origin + path
  } else {
    return ''
  }
}
