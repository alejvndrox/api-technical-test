import 'core-js/stable';
import "regenerator-runtime/runtime";
import Strengths from './components/Strengths';
import getUserInfo from './components/Strengths';
import Job from './components/Job';

const strengths = document.getElementById('strengths');
const job = document.getElementById('job');


const render = async () => {
  strengths.innerHTML = await getUserInfo();
  job.innerHTML = await Job();
}
render();
