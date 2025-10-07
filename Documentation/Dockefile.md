# The Dockerfile Explanation

## Two samples of the Dockerfile is given here
- Single stage build
- Multi stage build
- **NOTE**: In both the stages the application is exposed in **port 3000**

## Single Stage build
The single stage build has nothing special but it is similar to the sequential order of commands used to run the NextJS application on the local environment.
Also it consumes significant amount of storage, in order to sort it out the multi-stage build is done

## Multi-Stage build
Here the stages are divides into to the **Build and Run** two stages, both stages use separate base images *node:22-bullseye-slim* which is lighter and also for the sake of better optimization of the image.
This approach helps reduce the size of the final image