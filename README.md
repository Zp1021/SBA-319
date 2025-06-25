# SBA-319
For this project the focus was on using an express server to create rest api's that would interact with a mongoDB database. A starting page was created with links to subsequent pages that would offer easier traversal from the browser. The code in this project will automatically create a database labeled 'SBA319', the collections made inside the database were labeled as characters, items, and networks.

There are routes that exist for each of the respective collections and their CRUD operations.


1.  GET /
    GET /api/characters
    GET /api/items
    GET /api/networks

Get allows users to retrieve data from the database

2. 
    POST /api/characters
    POST /api/items
    POST /api/networks

Post allows users to write data to the database. Some example data is as follows (Use only the curly brackets and their contents when testing)

Characters: 
{
    "charFirstName": "Finn",
    "charCodeName": "The Human",
    "charLastName": "Mertens"
}

Items: 
{
    "armor": "Chainmail",
    "weapon": "Great Sword",
    "potions": "Health"
}

Networks:
{
    "netName": "Cartoon Network",
    "netRating": "8.5"
}

Remember: Once you post data to the database the browser should show a visual representation of that data with the respective links provided

3. 
    PATCH /api/characters/:id
    PATCH /api/items/:id
    PATCH /api/networks/:id

Patch allows the user to make updates to each data entry, by the entry's respective ID

4. 
    DELETE /api/characters/:id
    DELETE /api/items/:id
    DELETE /api/networks/:id

Delete allows the user to remove a data entry, by the entry's respective ID


NOTE: THE FOLLOWING ROUTES WERE CHECKED THROUGH THUNDERCLIENT WHICH IS A VS CODE EXTENSION FOR ACCURACY AND CONSISTENCY IT IS RECOMMENDED THAT THIS HOW THE ROUTES ARE CHECKED