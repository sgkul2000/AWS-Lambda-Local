exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      message: "Hey,  the function id running."
    })
  }
  response.headers = {
    "Access-Control-Allow-Headers" : "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials" : true,
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    }
  return response
}
