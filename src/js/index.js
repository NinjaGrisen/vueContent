const contentful = require('contentful');

const client = contentful.createClient({
    space: 'eyl63nxyj988',
    accessToken: '985c4f3711f8c93802f8d08aed270376ea3b21a72834403d1f0d1bf91c065a86'
  });

// client.getEntry('1KUkRDMZdyouiSeU2KagS4')
//     .then(function (entry) {
//   // logs the entry metadata
//     console.log(entry.fields.title)
// })

// client.getEntries()
// .then(function (entries) {
//   // log the title for all the entries that have it
//   entries.items.forEach(function (entry) {
//     if(entry.fields.title) {
//       console.log(entry.fields.title)
//     }
//   })
// })

// client.getEntries()
//     .then(function (entries) {
//         entries.items.forEach(function (entry) {
//             if(entry.fields.similarShoes) {
//                 entry.fields.similarShoes.forEach((similar) => {
//                     if(similar.fields.productImage) {
//                         console.log(similar.fields.productImage.fields.file.url);
//                     }
//                 })
//             }
//         })
//     })

// client.getEntries({include: 0})
//     .then(function (entries) {
//         entries.items.forEach(function (entry) {
//             if(entry.fields.similarShoes) {
//                 entry.fields.similarShoes.forEach((similar) => {
//                     if(similar.fields) {
//                         console.log(similar);
//                     }
//                 })
//             }
//         })
//     })


client.getEntries( {
    'content_type': 'shirts'

})
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.title) {
      console.log(entry.fields.title)
    }
  })
})
