const envstr = process.env.NODE_ENV || 'dev';
const envConf = require('./' + envstr);

const defConf = {
    env: envstr
};

export default {...defConf, ...envConf.default};

