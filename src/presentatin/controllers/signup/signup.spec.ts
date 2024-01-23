import { SignUpController } from "./signup";

describe('SignUp Controller', () => {
    test('Should return 400 if no name is provided', async () => {
        const httpRequest = {
            body: {
                email: 'any_email@mail.com',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }

        const signUpController = new SignUpController
        const httpResponse = await signUpController.handle(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
    });
});