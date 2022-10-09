import { AppDataSource } from "./data-source"


AppDataSource.initialize().then(async () => {

    console.log('Application is running');

}).catch(error => console.log(error))
