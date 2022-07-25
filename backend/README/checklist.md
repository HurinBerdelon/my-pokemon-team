# API Specifications

## Users

**Functional Requirements**

- [x] Should be able to create user with 3rd part providerId
- [x] Should be able to authenticate user with 3rd part providerId
- [x] Should be able to find information of authenticated user
- [x] Should be able to add/update user's avatar
- [x] Should be able to logout user
- [x] Should be able to refresh user's tokens when expired
- [x] Should be able to delete a user

**Business Rules**

- [x] Should not be able to authenticate a non-existent user
- [x] Should not be able to update an non-existent user
- [x] Should not be able to update a non authenticated user
- [x] Should not be able to delete a non-existent user

**Non Functional Requirements**

- [x] Authenticate user using a access token
- [x] Should have a documentation
- [x] Should have CORS configuration
- [x] Should delete expired tokens when user auhenticate

## Teams

**Functional Requirements**

- [x] Should be able to create a pokemon when user add it to his team
- [x] Should be able to add pokemons to user's team
- [x] Should be able to remove pokemons from user's team
- [ ] Should be able to list all teams

**Business Rules**

- [x] Should not be able to add the same pokemon to the team
- [x] Should not be able to add a pokemon to a team with 6 pokemons