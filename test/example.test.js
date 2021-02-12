// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, sub, times, div } from '../utilities.js';
const test = QUnit.test;

test('time to test add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    const x = 4;
    const y = 5;
    const sum = 9;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, sum);
});

test('time to test sub', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    const x = 4;
    const y = 2;
    const sum = 2;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = sub(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, sum);
});

test('time to test times', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    const x = 2;
    const y = 4;
    const sum = 8;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = times(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, sum);
});

test('time to test div', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    const x = 8;
    const y = 4;
    const sum = 2;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = div(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, sum);
});

test('add button test', (expect) => {
    const expected = true;
    const x = 2;
    const y = 1;
    const z = 1;
    const actual = onClick(x = add(y, z));
    expect.equal(actual, sum);
});