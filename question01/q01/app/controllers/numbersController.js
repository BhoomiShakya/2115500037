const { fetchNumbers } = require('../utils/apiUtils');
const CircularQueue = require('../models/CircularQueue');

const windowSize = 10;
let numbersQueue = new CircularQueue(windowSize);

async function getNumbers(req, res) {
    const start = Date.now();
    const { numberType } = req.body;
    let numbers = [];
    let windowPrevState = numbersQueue.toArray();

    try {
        numbers = await fetchNumbers(numberType);
        const newNumbers = numbers.filter(num => !numbersQueue.includes(num));

        newNumbers.forEach(num => {
            numbersQueue.enqueue(num);
        });

        const windowCurrState = numbersQueue.toArray();
        const avg = calculateAverage(windowCurrState);

        const elapsed = Date.now() - start;
        if (elapsed > 500) {
            throw new Error('Processing took too long');
        }

        const responseJson = {
            windowPrevState,
            windowCurrState,
            numbers,
            avg: avg.toFixed(2)
        };

        res.json(responseJson);
    } catch (error) {
        console.error('Error in getNumbers:', error.message);
        res.status(500).send('Error fetching numbers. Please try again later.');
    }
}

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

module.exports = {
    getNumbers
};
