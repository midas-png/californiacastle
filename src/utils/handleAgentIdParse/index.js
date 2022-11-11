import Cookies from 'js-cookie';

export const handleAgentIdParse = () => {
  const agentId = Cookies.get('aID');
  let agentName;

  switch (agentId) {
    case 1:
      agentName = 'Oleg';
    default:
      agentName = 'Yan Levin';
  }

  return agentName;
};
