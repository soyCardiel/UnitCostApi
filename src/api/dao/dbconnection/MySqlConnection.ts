import { createPool  } from 'mysql2/promise';
import dbConfig from '../../configs/dbconfig';
import { IConnection } from '../IConnection';
import { Pool } from 'mysql2';

export class MySqlConnection implements IConnection {
    constructor() {};

    doSomething(): void {
        console.log('mysqlconnection is doing something');
    }
}