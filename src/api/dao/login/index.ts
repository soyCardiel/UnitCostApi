const data = {
    user: 'user',
    pass: 'pass'
};

function getSession() {
    return data;
}

const loginDao = {
    getSession
};

export default loginDao;