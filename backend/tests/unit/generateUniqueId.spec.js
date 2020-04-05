const generateUniqueTest = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an 8 characters unique ID', () =>{
        const id = generateUniqueTest();
        expect(id).toHaveLength(8);
        // expect(2 + 2).toBe(4);
    })
})