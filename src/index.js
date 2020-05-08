const getUserInfo = async () => {
  const apiURL = 'https://torre.bio/api/bios/ajf';
  try {
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
  } catch (e) {
      console.log('There was a fetch error: ' + e);
  }
}
getUserInfo();