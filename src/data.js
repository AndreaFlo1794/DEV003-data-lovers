export const orderingBy = (data, key, order = "desc") => {
  return [...data].sort((a, b) => {
    return order === "desc" ? b[key] - a[key] : a[key] - b[key]
  })
}

export const filteringBy = (data, key, target) => {
  return [...data].filter((film) => {
    const result = film[key] === target
    return result
  })
}

export const calculatePercent = (total, segment) => {
  const percent = Math.round((segment * 100) / total);
  return percent
}

export const searchingBy = (data, target) => {
  const searchResult = data.filter((film) => {
    const index = `${film.title} ${film.director}`
    return index.toLowerCase().includes(target.toLowerCase());
  })
  return searchResult;
}

