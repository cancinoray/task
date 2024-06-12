### Task 2
---
1. The website should have one website page on the root “/” endpoint
   1. This page should display a number count and a button.
   2. The count should start at 0 and persist across page reloads.
   3. The button should increment the count by one.
2. The website should have a post route on the “/increment” endpoint
   1. This route should increment the count by a value that is passed to the endpoint in the body of the request
   2. It should then return what the new count is
   3. This route should be what the button uses to increment the count
   4. This route should validate the body and return an error when the body is invalid
3. The website should have a get route on the “/count” endpoint
   1. This route should return the current count
4. DO NOT use any UI framework like react or vue, use only vanilla javascript(or typescript), html,
and css.
The only required set up to start the server should be “npm install” and “npm start”