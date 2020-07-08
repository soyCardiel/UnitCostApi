import { SingletonConnectionFactory } from "../ConnectionFactory";
import { DbHandlerEnum } from "../DbHandlersEnum";


const data = {
    user: 'user',
    pass: 'pass'
};

function getSession() {

    const conn = SingletonConnectionFactory.getInstance(DbHandlerEnum.Mysql);

    console.log(conn);

    return data;
}

const loginDao = {
    getSession
};

export default loginDao;