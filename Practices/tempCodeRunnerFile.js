//---------------------------------------------BaiCode---------------------------------------

// function kung naa bay kapareho na birthday
function hasSharedBirthday(n) {
    // himo siya og 366 slots, naka 367 na kay ang arrays naka start sa 0; nya wala may 0 sa calendar,
    // nya every slot kay naka false. Ang 366 kay mao nang days sa isa ka year including na ang leap year
    let birthday = Array(367).fill(false);
    // loop     
    for (let i = 0; i < n; i++) {
        // e randomize niya nang 366 days
        let bday = Math.floor(Math.random() * 366) + 1; // ang random kay mag generate og 0.0 to 1.0. unya e times nato na sa 366 nato na days, gina round down mana sa math.floor mao mag add ta og + 1
        // e check niya daan kung naa nabay nag birthday ani na adlaw, kung naa mag return siya og true
        if (birthday[bday]) 
            return true;
        // unya kung wala e occupy niya ni na adlaw
        birthday[bday] = true;
    }
    // mag return siya og false kung tanan sa array kay walay kapareha. or kani na trial kay tanan lahi lahi og birthday, wlay mag kaparehas
    return false;
}

function simulate(people, trials) {
    let sharedCount = 0;
    for (let i = 0; i < trials; i++) {
        if (hasSharedBirthday(people)) sharedCount++;
    }
    console.log(`Probability of shared birthday in group of ${people}: ${(sharedCount / trials * 100).toFixed(2)}%`);
}

simulate(2, 1);