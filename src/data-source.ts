import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "oracle",
    
    username: process.env.DB_username,
    password: process.env.DB_password,
    logging: true,
    /*
    sid: "pdb",
    host: "localhost",
    port: 1521,
    */
    
    extra: {
        "connectString": process.env.DB_connectString
    },
    
    entities: ["src/entity/*.*"],
    synchronize: true

});

export { AppDataSource }