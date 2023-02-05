// const E = 57800; // освітленість прям біля розсіювача світильника впритул [lx]

// const radius = 0.0275; // радіус поверхні фотоприймача
// const Π = 3.14; // Пі
// const area = P * (r ^ 2); // Площа приймача люксметра
// console.log(S);

// const F = (E / (S ^ 2)) / (4 * P); // світловий потік (приблизний) [lm]
// console.log(F);

let illuminance = prompt("Введіть значення освітленості");
if (illuminance) {
    const radius = 0.0275; // радіус поверхні фотоприймача
    const Pi = 3.14; // Пі
    const area = Pi * (radius ^ 2); // Площа приймача люксметра
    const totalFlux = (illuminance / (area ^ 2)) / (4 * Pi);
    alert(`Приблизний світловий потік світильника = ${Math.round(totalFlux)} lm`);

} else {
    alert("Операція скасована");
}