describe('Testa login', () => {
    test('should password has more than 5 char', () => {
        let password = '12345';

        expect(password.length).toBeGreaterThan(4);
    });
});