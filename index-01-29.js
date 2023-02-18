let obj = {
    name1: 152,
    name2: 258,
    name3: 300,
  }
  
  const sum = (obj) => {
    let total = 0;
    for (let key in obj) {
     total += obj[key];
    }
    return total;
  };
  
  console.log(sum(obj))