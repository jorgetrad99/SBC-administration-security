const callApi = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Something went wrong when calling API');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('Something went wrong: ' + error);
  }
};

export { callApi };
