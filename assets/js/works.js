
// require('dotenv').config();

// console.log(process.env);

// var contentful = require('contentful')

// var client = contentful.createClient({
// 	space: process.env.CONTENTFUL_SPACE_ID,
// 	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
//   })


console.log("this is a test");

        const client = contentful.createClient({
// This is the space ID. A space is like a project folder in Contentful terms
space: "l0ha0gcvlb0b",
// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
accessToken: "jSueD6AQaA8k7sudAtzfPpJzJ3_qrfHZOZkbKm5tK4Y"
});


// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// client.getEntries({
//       'content_type': 'title'
//   })
//   .then(function (entries) {
//       entries.items.forEach(function (entry) {
//           let title = entry.fields.title;
//           let description = documentToHtmlString(entry.fields.shortDescription);
//           jQuery('#main_content_contentful').append('<div class="main_block"><h1>'+title+'</h1><p>'+description+'</p></div>');
//           console.log(entry);
//       })
//   })







console.log("this is a test");



// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntry("2r4ntVE4nLubWwYQoRpjT7")
  .then(entry => {
    console.log(entry);
        fieldsData(entry.fields)

        const rawRichTextField = entry.fields.longDescription;
        return documentToHtmlString(rawRichTextField);
    
  })
    .then(renderedHtml => {
        // do something with html, like write to a file
        console.log(renderedHtml);
        document.getElementById('description').innerHTML = renderedHtml;
      })
  .catch(err => console.log(err));

  function fieldsData(value) {

    jQuery('#title').html(value.title);
    jQuery('#shortDescription').html(value.shortDescription);
    jQuery('#longDescription').html(value.longDescription);

  }








  