import { history } from '../redux/store';

const show = async (path: string) => {
  try {
    await history.push(path);
    return true;
  } catch (error) {
    return false;
  }
};

const push = async (path: string) => {
  try {
    await history.push(path);
    return true;
  } catch (error) {
    return false;
  }
};

const dataExport = {
  push,
  show,
};

export default dataExport;
