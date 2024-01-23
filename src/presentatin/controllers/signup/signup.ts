import { MissingParamError } from "../../errors";
import { badRequest } from "../../helpers/http-helper";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class SignUpController implements Controller {
    handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const requiredFields = [
                'name',
                'email',
                'password',
                'passwordConfirmation'
            ];

            for (const field of requiredFields) {
                if(!httpRequest.body[field]) {
                    return new Promise(resolve => resolve(badRequest(new MissingParamError(field))))
                }
            }

            let response: HttpResponse = { statusCode: 200, body: {} }
            if(!httpRequest.body?.nome) {
                response.body = new MissingParamError('nome')
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