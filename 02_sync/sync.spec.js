const Lodash = require('./sync')

let _ = new Lodash()

describe('Lodash:compact', () => {
    let array = [false, 42, 0, '', true, null, 'Hello'];

    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'Hello'];
    })

    afterAll(() => {
        _ = new Lodash()
    })

    test('Should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })

    test('Should working array be editable', () => {
        array.push(...['one', 'two'])
        expect(array).toContain('one')
        expect(array).toContain('two')
    })

    test('Should not contain falsy values', () => {
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(null)
        expect(_.compact(array)).not.toContain(false)
    })

    test('should remove falsy values from array', () => {
        const result = [42, true, 'Hello']
        expect(_.compact(array)).toEqual(result)
    })
})

describe('Lodash:group by', () => {

    test('Should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })
    test('Should group array items by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }

        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })
    test('Should group array items by length', () => {
        const array = ['noe', 'two', 'three']
        const result = {
           5:['three'],
            3: ['noe', 'two']
        }

        expect(_.groupBy(array, 'length')).toEqual(result)
    })
    test('Should not return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })

})