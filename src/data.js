
export const orderingBy = (data, key, order="desc") => {

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


// export const searchingBy = (data,key) =>{
//   return [...data].find((film) => {
//     const res=film[key]==="Hayao";
//     return res
// })
// }
  
export const calculatePercent= (total,segment)=>{
  const percent=Math.round((segment*100)/total);
  return percent
}






