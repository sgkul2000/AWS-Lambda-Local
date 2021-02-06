# AWS Lambda Local
This is a small node.js app which can be used to run and test AWS Lambda functions locally. The index file in /src/lambda is the main function file with must export handler function like in AWS Lambda. This app can also export a zip file incase you want to upload it directly to AWS.


## Project setup
npm and node are pre-requisites. Dependencies can be installed by running `npm i`. To run the app with hotreload, use `npm run dev`, similarly you can also run without hot reload by using `npm run start`.
By default the app runs on port 5000 but you can set the environment variable `PORT` to run it on another port.

## Exporting .zip file
The lambda function can be easily exported by running `npm run build`. This creates and stores the zip file in a folder called `dist` in the root of the project directory.

## Endpoints
- [`GET /`](#get)
- [`ANY /`](#any)


### `GET /`
> This endpoint can be used to test the working if the server. This does not necessarily mean that the lambda function is working.

### `ANY /`
> This end point is the endpoint for the lambda function that you write. As by default AWS API Gateway allows any type of request, this endpoint also supports any type of request. This api returns the response directly from the lambda function.

_Feel free to contribute._