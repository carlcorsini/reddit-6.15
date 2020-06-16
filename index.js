// Note the new "async" and "await" keywords.
window.onload = async function () {
  // Fetch is built in, just like window and document.
  // await indicates that we have to wait for the request
  // to finish.
  let r = await fetch('https://www.reddit.com/r/all/.json');

  // Processing this response into a an Object from the
  // JSON response is also asynchronous
  let responseJSON = await r.json();

  // Now that we have the data and it's in a format
  // that we can easily use, we'll create links of
  // our own.
  let redditTable = document.querySelector('#reddit-table')

  for (post of responseJSON.data.children) {
    // destructuring :)
    let { thumbnail, url, title } = post.data;
    let row = document.createElement('tr')
    let cell1 = document.createElement('td')
    let cell2 = document.createElement('td')
     cell1.innerText = title
     cell2.innerText = url

     row.appendChild(cell1)
     row.appendChild(cell2)

     redditTable.appendChild(row)
    // [x] fill in cell1 with title data
    // [x] fill in "" 2 with url data
    // [x] append cell 1 to row
    // [x] ""  ""  2 ""
    // [] append row to redditTable
  }
};

// Micro-exercise: add an img tag and extract the thumbnail url from the resonseJSON
// to use as the src. That is: display the appropriate thumbnail image for each post.
