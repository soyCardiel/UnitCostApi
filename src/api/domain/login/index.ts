import LoginDao from './../../dao/login';

function getSession() {
    return LoginDao.getSession();
}

const loginDomain = {
    getSession
};

export default loginDomain;