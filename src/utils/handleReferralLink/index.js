import Cookies from 'js-cookie';

const POSSIBLE_AGENTS_ID = [0, 1];

export const handleRefferalLink = (agentId) => {
  const registeredAgent = Cookies.get('aID');

  if (registeredAgent) {
    return;
  }

  if (!isNaN(agentId) && POSSIBLE_AGENTS_ID.includes(Number(agentId))) {
    agentId = Number(agentId);
  } else {
    agentId = 0;
  }

  if (!registeredAgent) {
    Cookies.set('aID', agentId, { expires: 7, secure: true });
  }
};
