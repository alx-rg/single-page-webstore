import data from "./data.json"; 

const productCount = data.length

const allCategories = data.map(obj => obj.category)

// ABOVE is the same as BELOW
// const allCategories = data.map(item => {
//   return item.category
// })

new Set()
// Set is smart and will remove the duplicates from your array

const singleCategories = new Set(allCategories)
// not currently an array, but we need to have the set be an array
// or you could do Array.from(new Set(allCategories))

const categories = Array.from(singleCategories)

// const uniqueCategories = data.reduce()


// Array with objects
// [ { name: "Toys", count: 5}, { name: "Books", count: 1} ]

// const namesAndCategories = categories.map(name => {
//   return {
//     name, 
//     count: allCategories.filter(category => category === name).length
//   }
// })

// const countCategories = allCategories.reduce((category, n) => n )

const namesAndCategories = allCategories.reduce( (countObj, category) => {
  if (countObj[category]) {
    countObj[category] += 1;
  } else {
    countObj[category] = 1;
  }
  
  return countObj;
}, {});
//  { "Toys":5, "Books":2, "Kids":4}
// namesAndCategories["Toys"]
// namesAndCategories.Toys => 5
// Object.keys(namesAndCategories) => [ "Toys", "Books", "Kids"]
const catNameArray = Object.keys(namesAndCategories).map(cat => {
  return {
    name:cat,
    //namesAndCategories["Toys"] The Key is "Toys" the value is the number
    count:namesAndCategories[cat]
  }
} )
// [ "Toys", "Books", "Kids"]

catNameArray.push({ name: "All", count: data.length})

export {
  allCategories,
  productCount,
  categories,
  namesAndCategories,
  catNameArray
}

export default data