function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const ascending = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < ascending.length; i++) {
    let swapped = false;
    for (let j = 0; j < ascending.length - (i + 1); j++) {
      if (ascending[j].year > ascending[j + 1].year) {
        let temp = ascending[j];
        ascending[j] = ascending[j + 1];
        ascending[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
return ascending;
}
