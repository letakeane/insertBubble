const { bubbleSort, insertionSort } = require('../index.js');
const chai = require('chai');
const expect = chai.expect;

describe('bubbleSort tests', () => {

  let newArray;
  const randomGenerator = (count) => {
    let numbers = [];
    let max = 1000;

    for (let i = 0; i < count; i++) {
      let randomNumber = Math.floor(Math.random() * max);

      numbers.push(randomNumber);
    }

    return numbers;
  }

  beforeEach(() => {
    newArray = randomGenerator(5000);
  })

  it('should sort a small array', () => {
    let smallArray = [9, 3];
    let sortedArray = bubbleSort(smallArray);

    expect(sortedArray).to.deep.equal([3, 9]);
  })

  it('should sort a large array', () => {
    let sortedArray = bubbleSort(newArray);
    let reliablySortedArray = newArray.sort((a, b) => {
      return a - b;
    })

    expect(reliablySortedArray).to.deep.equal(sortedArray);
  })
})

describe('insertionSort tests', () => {

  let newArray;
  const randomGenerator = (count) => {
    let numbers = [];
    let max = 1000;

    for (let i = 0; i < count; i++) {
      let randomNumber = Math.floor(Math.random() * max);

      numbers.push(randomNumber);
    }

    return numbers;
  }

  beforeEach(() => {
    newArray = randomGenerator(5000);
  })

  it('should sort a small array', () => {
    let smallArray = [9, 3];
    let sortedArray = insertionSort(smallArray);

    expect(sortedArray).to.deep.equal([3, 9]);
  })

  it('should sort a large array', () => {
    let sortedArray = insertionSort(newArray);
    let reliablySortedArray = newArray.sort((a, b) => {
      return a - b;
    })

    expect(reliablySortedArray).to.deep.equal(sortedArray);
  })
})
