
export const orderingBy = (data, key) => {

  return [...data].sort((a, b) => {
    return b[key] - a[key]
  })
}

export const filteringBy = (data, key, target) => {

  return [...data].filter((film) => {
    const result = film[key].indexOf(target) !== -1
    return result
  })
}









