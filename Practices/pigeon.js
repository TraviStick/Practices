function hasSharedBirthday(n) {
    let birthday = Array(366).fill(false);

    for (let i = 0; i < n; i++) {
        let bday = Math.ceil(Math.random() * 365);
        if (birthday[bday]) return true;
        birthday[bday] = true;
    }
    return false;
}

function simulate(groupSize, trials) {
    let sharedCount = 0;
    for (let i = 0; i < trials; i++) {
        if (hasSharedBirthday(groupSize)) sharedCount++;
    }
    console.log(`Probability of shared birthday in group of ${groupSize}: ${(sharedCount / trials * 100).toFixed(2)}%`);
}

simulate(23, 10000);