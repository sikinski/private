const calc = ({ main, dependent }) => {
    const result = [];
    const stepsCount = (main.finish - main.start) / main.step;
    const dependentStep = (dependent.finish - dependent.start) / stepsCount;
    for (let step = 0; step < stepsCount; step++) {
        result.push({
            main: main.start + main.step * step,
            dependent: dependent.start + dependentStep * step 
        });
    }
    return result;
};
console.log(calc({ main: { start: 1366, finish: 2560, step: 100 }, dependent: { start: 14, finish:  20}}));
// console.log(calc({ main: { start: 1366, finish: 2560, step: 100 }, dependent: { start: 10, finish: 30 }}));