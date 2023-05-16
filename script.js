function shortenURL() {
  var input = document.getElementById("url-input").value;
  // Implement your logic here to shorten the URL and store it
  // You can use a service like Bitly API or create your own URL shortening algorithm
  var shortenedURL = "http://yourusername.github.io/your-shortened-url";
  document.getElementById("shortened-url").innerHTML = shortenedURL;
}
