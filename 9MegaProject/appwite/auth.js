import conf from '../conf/conf'
import {ID , Client , Account} from 'appwrite'

export class AuthService{
    client = new Client;
    account;

    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl) 
                .setProject(conf.appwriteProjectId);

        this.account = new Account(Client);
    }

    async createAccount({email , password , name}){
        try {
            const UserAccount = await this.account.create(ID.unique(), email , password , name);
            if(UserAccount){
                // another method
                return this.login(email , password);
            }
            else{
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    async login(email , password){
        try {
           return await this.account.createSession(email ,password);
        } catch (error) {
            throw error;
        }

    }

    async createUserSession(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Application userSession Error ::" , error)
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions('current');
        } catch (error) {
            console.log("Application Session Logout Error ::" , error)
        }
    }


}

const authService = new AuthService;

export default authService;