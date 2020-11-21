### About :grey_question: : 
It's about the source code of a **Medium** article that i wrote titled **Dockerize a MERN stack app**
You can find the article [here :page_with_curl:](https://baillahiamine.medium.com/)

### Tree :evergreen_tree: : 
- **client :** the frontend source code
- **server :** the backend source code

### Setup : 
- You'll need to create first a mongo database on Atlas from [here](https://account.mongodb.com/)  
- Choose a movies database provider and get your **api_key**
- Edit the file "server/access.json" with your crendentials :
  - change the api_key with yours
  - in the second line of "server/access.json" change <login> and <password> with your Atlas mongodb crendentials.
- Edit the file "client/src/services/index.js" :
  - in the line third line change baseURL with your docker machine ip :
    - on Windows : just type "docker-machine ip" and that will give you the ip address to put
    - on Linux/Mac : try with either "localhost" or try to get your docker machine ip by looking it up in your config file

### Demo :
[Check the prod version from here]()