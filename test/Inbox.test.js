const assert = require('assert');
const ganache = require('ganache-cli');
const { it } = require('mocha');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());


class Car {
    park() {
        return 'parked';
    }

    drive() {
        return 'driving';
    }
}

let car;
beforeEach(() => {
    car = new Car();

})

describe('Car', () => {
    it('can park', () => {
        assert.equal(car.park(), 'parked');
    })

    it('can drive', () => {
        assert.equal(car.drive(), 'driving');
    })
})