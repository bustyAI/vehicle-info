const rivianObjects = {}

for (let i = 1; i <= 18; i++) {
    const rivianName = `Rivian ${i}`;
    rivianObjects[rivianName] = i
}

console.log(rivianObjects);

export default rivianObjects