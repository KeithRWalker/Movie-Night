import util from '../../helpers/util';

const navBuild = () => {
  const navSt = '<a class="navbar-brand" href="#">Movie History</a>';
  util.printToDom('nav', navSt);
};

export default { navBuild };
