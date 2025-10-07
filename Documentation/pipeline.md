# Explanation of the pipeline
## Prerequisites
- Generate a Personal Access Token In GitHub
- Configure it in the secrets -> action of the current repo where the pipeline is going to be executed 

## Steps involved 
- The pipeline is triggered when there is a push on the main branch.
- First the code is checked out using the Github's own action.
- Then the Directory is switched where the application is located
- Now some basic docker commands are run to 
  - Build the image
  - Push the image to the ghcr (GitHub container registry)
 - Now confirm the successful push of the image to the ghcr.io 
-  Note: Before building and pushing of the image must be logged in to the docker
-  **Make use of the secrets** that had been configured