import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class SignUpController implements Controller {
    handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            let response: HttpResponse = { statusCode: 200, body: {} }
            if(!httpRequest.body.nome) {
                response.body = {
                    message: 'O campo nome é obrigatório'
                }
                response.statusCode = 400
                return new Promise((resolve, reject) => {
                    resolve(response)
                })
            } 
            return new Promise((resolve, reject) => {
                resolve(response)
            })
        } catch (error) {
            return new Promise((resolve, reject) => {
                reject({statusCode: 500, body: {}})
            })
        }
    }
    

}