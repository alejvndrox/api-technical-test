const getUserInfo = async () => {
  const apiURL = 'https://torre.bio/api/bios/ajf';
  try {
      const response = await fetch(apiURL);
      const data = await response.json();
      const userStrengths = data.strengths;
      console.log(userStrengths);
      const view = `
            ${userStrengths.map(strength => `
                <li>
                  ${strength.name}
                </li>
            `).join('')}
    `;
      //console.log(data.strengths)
      return view;
  } catch (e) {
      console.log('There was a fetch error: ' + e);
  }
}

/* const Strengths = () => {
  const view = `
    <li>Strength 1</li>
  `;
  return view;
} */

export default getUserInfo;
