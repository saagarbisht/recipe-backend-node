## Routes

- GET - /recipe/ - All recipes
- GET - /recipe/:id - Recipe with all details
- GET - /recipe/search - Search recipies from name or cuisine
- POST - /recipe/upload - Upload recipies
- DELETE - /recipe/:id - Delete recipies by id

## Responce

```
{
  message : "message related to responce",
  data : null || [{mongodb object}] || {mongodb object},
  error : null || error message,
  successfully : true || false
  }
```
