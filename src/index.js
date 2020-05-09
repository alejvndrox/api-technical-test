import 'core-js/stable';
import "regenerator-runtime/runtime";
import Strengths from './components/Strengths';
import getUserInfo from './components/Strengths';

const strengths = document.getElementById('strengths');


const render = async () => {
  strengths.innerHTML = await getUserInfo();
}
render();

/* const getJobInfo = async () => {
  const apiURL = 'https://torre.co/api/opportunities/2W11EaWq';
  try {
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
  } catch (e) {
      console.log('There was a fetch error: ' + e);
  }
}
getJobInfo(); */