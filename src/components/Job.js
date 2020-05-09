const Job = async () => {
  const apiURL = 'https://torre.co/api/opportunities/2W11EaWq';
  try {
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
  } catch (e) {
      console.log('There was a fetch error: ' + e);
  }
}

export default Job;