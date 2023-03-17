function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const descending = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < descending.length; i++) {
    let swapped = false;
    for (let j = 0; j < descending.length - (i + 1); j++) {
      if (descending[j].year < descending[j + 1].year) {
        let temp = descending[j];
        descending[j] = descending[j + 1];
        descending[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return descending;
}
