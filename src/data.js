
export const orderingBy = (data , key) =>{  

  return [... data].sort((a, b) => {                      
   return  b[key] - a[key]
  })  
}

export const filteringBy = (data , key)=>{
  return [...data].filter((film)=>{
    //  const result= /Hayao/i.test(film[key])
    //  const result2= /Isao/i.test(film[key])
    //  return result || result2
    const result = /Hayao/i.test(film[key])
    console.log(result)
     return result
  })
}








