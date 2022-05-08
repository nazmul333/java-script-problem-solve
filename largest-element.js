// function largestElement(numbers) {
//     const largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         console.log(element);
//     }

// }
// const ages = [12, 30, 40, 4, 70];
// const oldest = largestElement(ages);

function largestElement(numbers) {
    const largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element
        }
    }
    return largest;
}
const ages = [12, 30, 40, 4, 70];
const oldest = largestElement(ages);
const oldest2 = largestElement([-2, -13, -17]);
console.log('oldest', oldest);