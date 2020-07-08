import { IConnection } from "./IConnection";
import { DbHandlerEnum } from "./DbHandlersEnum";
import { MySqlConnection } from "./dbconnection/MySqlConnection";

export class SingletonConnectionFactory {
    private static connections: any = {};
    private constructor() {}

    public static getInstance(type: DbHandlerEnum) : IConnection {        

        if (!this.connections[type]) {
            let instance = undefined;
            console.log('...creando instancia');
            switch(type) {
                case DbHandlerEnum.Mysql:
                    instance = new MySqlConnection();
                    break;
            }


            this.connections[type] = instance;

        }
        return this.connections[type];
    }

}