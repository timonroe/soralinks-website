export async function getNews() {
  // Fetch the data from the server
  let response;
  try {
    response = await fetch('https://okujd3wb7e.execute-api.us-east-1.amazonaws.com/v1/news', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
      method: 'get',
    });
  }
  catch (error) {
    console.error(`fetch() failed with error: ${error.message}`);
    throw error;
  }

  if (!response.ok) {
    const errMsg = `fetch() failed with response.ok: ${response.ok}`;
    console.error(errMsg);
    throw new Error(errMsg);
  }
  const { status } = response;
  if (status !== 200) {
    const errMsg = `fetch() failed with status: ${status}`;
    console.error(errMsg);
    throw new Error(errMsg);
  }

  // Convert the response to JSON
  let result;
  try {
    result = await response.json();
  }
  catch (error) {
    console.log(`Could not convert response to JSON: ${error.message}`);
    throw error;
  }
  try {
    result = JSON.parse(result.body);
  }
  catch (error) {
    console.log(`Could not parse result.body: ${error.message}`);
    throw error;
  }

  return result;
}

