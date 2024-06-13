### Task 1
---
1. Prompt the user for a string input
2. Ping the /books/search endpoint with the string as the title value
3. If the book is found
   1. Pings the /authors/:authorId endpoint for each author id of the book
   2. Retrieves the names of each author
4. Then displays the book title, description, and the full name and middle initial of the authors.
   1. OR if the book could not be found indicate that the book could not be found
5. Ask the user for input again and repeat indefinitely

---
### Run
```
   npm install && npm run dev
```
