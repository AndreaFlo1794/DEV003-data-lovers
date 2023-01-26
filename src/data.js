
export const orderingBy = (data , key) =>{  

  return [... data].sort((a, b) => {                      
   return  b[key] - a[key]
  })  
}

export const filteringBy = (data , key)=>{

  return [...data].filter((film)=>{

    const result = /female/i.test(film[key])
    // const result2 = /male/i.test(film[key])
    return result 
  })
 
}









