const demo = (a, b, c, d, e) => {
    let contMax = 0;
    let contMin = 0;
    n1 = a;
    n2 = b;
    n3 = c;
    n4 = d;
    n5 = e;
    // Determina mayor
    if ((n1 > n2) && (n1 > n3) && (n1 > n4) && (n1 > n5)) {
        contMax = n1;
    }
    if ((n2 > n1) && (n2 > n3) && (n2 > n4) && (n2 > n5)) {
        contMax = n2;
    }
    if ((n3 > n1) && (n3 > n3) && (n3 > n4) && (n3 > n5)) {
        contMax = n3;
    }
    if ((n4 > n1) && (n4 > n3) && (n4 > n4) && (n4 > n5)) {
        contMax = n4;
    }
    if ((n5 > n1) && (n5 > n3) && (n5 > n4) && (n5 > n2)) {
        contMax = n5;
    }

    console.log("Maximo: " + contMax);
    console.log("Minimo: " + contMin);
}


const demo2 = () => {
    let contMax = 0;
    let contMin = 0;
    datoInicial = prompt("meté un numero");
    contMax = -19999;
    contMin = 999999999999999999999;
    console.log(datoInicial);
    for (let i = 0; i < 6; i++) {
        datoDos = prompt("meté un numero");
        if (datoDos > datoInicial) {
            contMax = datoDos;

        } else if (datoDos < datoInicial) {
            contMax = datoInicial;

        }
        console.log(datoDos);
    }

    console.log("Maximo: " + contMax);
    console.log("Minimo: " + contMin);
}


// else if ((n1 < n2) && (n1 < n3) && (n1 < n4) && (n1 < n5)) {
//     contMin = n1;
// } else if ((n2 < n1) && (n2 < n3) && (n2 < n4) && (n2 < n5)) {
//     contMin = n2;
// } else if ((n3 < n1) && (n3 < n3) && (n3 < n4) && (n3 < n5)) {
//     contMin = n3;
// } else if ((n4 < n1) && (n4 < n3) && (n4 < n4) && (n4 < n5)) {
//     contMin = n4;
// } else if ((n5 < n1) && (n5 < n3) && (n5 < n4) && (n5 < n5)) {
//     contMin = n5;
// }