
let a = [321, 696, 234, 91];

console.log(a);

for (let i = 0; i < a.length; i++) {

    let data = a[i];

    console.log(data);

    let spl = data.toString().split('');

    console.log(spl);

    // Sort digits
    for (let j = 0; j < spl.length; j++) {

        for (let k = j + 1; k < spl.length; k++) {

            if (Number(spl[j]) > Number(spl[k])) {

                console.log(typeof(spl[j]));

                let temp = spl[j];
                spl[j] = spl[k];
                spl[k] = temp;
            }
        }
    }

    // Put sorted digits back into the array
    a[i] = Number(spl.join(''));

    console.log("Sorted number:", a[i]);
}

console.log("After digit sorting:", a);


// Sort the numbers in the array
for (let i = 0; i < a.length; i++) {

    for (let j = i + 1; j < a.length; j++) {

        if (a[i] > a[j]) {

            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}

console.log("Final array:", a);