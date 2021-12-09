// functional programming way

function strat_a() {
    console.log('a');
}

function strat_b() {
    console.log('b');
}

function process_some(strat: () => void) {
    strat();
}

process_some(strat_a);
process_some(strat_b);