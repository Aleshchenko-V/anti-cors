# Not so corsy anymore.

Usage: just make a simple POST request with the following format:

```js
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ url: "You wanted api" }),
})
  .then((response) => response.json())
  .then((data) => {
    // do anything with data here
  });
```
