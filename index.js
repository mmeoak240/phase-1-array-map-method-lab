const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {let tutorial = tutorials.map(function(phrase) {
//   let words = phrase.split(" ")
//  words.map(word => {
//    word[0].toUpperCase()
//    return words.join(' ')
//   })
// })

// function titleCased() {
//    tutorials.map(function(word) {
//   let words = word.split(" "); 
//   return words.map(function(word){
//   return word.charAt(0).toUpperCase()+ word.substring(1)
//   }).join(" "); 

// });




// const titleCased = () => {
//   tutorials.map(function(phrase) {
//       let words = phrase.split(" ")
//       words.map(function(word) {
//         let correction = word.charAt(0)
//         return correction.toUpperCase()
//       })
//     })
// }


// const titleCased = tutorials.map(tutorial => {
//   return tutorial.split(' ')
//   .map((word) => word[0].toUpperCase() + word.slice(1))  /// this one supposedly worked but unsure how the methods aren't attached to anything.
//   .join(' ')
// })




//  function titleCased() {
//    tutorials.map(function(phrase) {
//   let words = phrase.split(" ")
//   words.map(word => {
//     let correction = word.charAt(0)
//     correction.toUpperCase()
//   })
//   return correction.join(' ')
// })

const titleCased = () => {
return tutorials.map(tutorial => {
  const splitTitle = tutorial.split(" ");    const upperCaseTitle = splitTitle.map(function (word) {
   word.charAt(0).toUpperCase() + word.slice(1)  
  return (`${word.charAt(0).toUpperCase()}${word.slice(1)}`)    })    
  return upperCaseTitle.join(" ");  })}



// .startsWith()
// .charAt(i)



// const titleCased = () => {
  
//   return tutorials
// }