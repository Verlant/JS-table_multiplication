//création des éléments

let new_main = document.createElement("main"), // crée un élément <main>
  new_button = document.createElement("button"), // crée un élément <button>
  new_table = document.createElement("table"); // crée un élément <table>
// new_tr = document.createElement("tr"), // crée un élément <tr> (row)
// new_td = document.createElement("td"); // crée un élément <tr> (colunm)

// ajout des éléments dans le DOM

document.body.prepend(new_main); // ajoute l'élément new_main au body en premier enfant
new_main.prepend(new_button); // ajoute l'élément new_button au main en premier enfant
new_main.append(new_table); // ajoute l'élément new_table au body en dernier enfant

// création et ajout des élément tr et td dans l'élément new_table s'il est vide, sinon supprime les enfants de new_table pour en créer de nouveaux

function table_creation(row, column) {
  if (!new_table.hasChildNodes()) {
    for (let index = 0; index < row; index++) {
      let new_tr = document.createElement("tr");
      new_table.append(new_tr);
      for (let index = 0; index < column; index++) {
        let new_td = document.createElement("td");
        new_tr.append(new_td);
      }
    }
  } else {
    while (new_table.hasChildNodes()) {
      new_table.removeChild(new_table.lastChild);
    }
    table_creation(row, column);
  }
}

// ajout de lignes
function table_add_row(row) {
  let table_width_cells = new_table.rows[0].cells.length;
  for (let index = 0; index < row; index++) {
    let new_tr = document.createElement("tr");
    new_table.append(new_tr);
    for (let index = 0; index < table_width_cells; index++) {
      let new_td = document.createElement("td");
      new_tr.append(new_td);
    }
  }
}

// ajout de colonnes
function table_add_column(column) {
  for (let index = 0; index < new_table.rows.length; index++) {
    let this_row = new_table.rows[index];
    for (let index = 0; index < column; index++) {
      let new_td = document.createElement("td");
      this_row.append(new_td);
    }
  }
}

// suppression de lignes
function table_del_row(row) {
  for (let index = 0; index < row; index++) {
    new_table.removeChild(new_table.lastChild);
  }
}

//ajout de colonnes
function table_del_column(column) {
  for (let index = 0; index < new_table.rows.length; index++) {
    let this_row = new_table.rows[index];
    for (let index = 0; index < column; index++) {
      this_row.removeChild(this_row.lastChild);
    }
  }
}

// fonction qui calcule une table de multiplication et l'ajoute au tableau
function multiplication(number, row) {
  let last_row_index = new_table.rows.length - 1,
    length_row = new_table.rows[0].cells.length - 2;
  for (let index = 1; index <= length_row + 1; index++) {
    let row_index = index - 1;
    new_table.rows[index - 1].cells[0].textContent = "Table de " + index;
    new_table.rows[row - 1].cells[index].textContent = index * number;
  }
}

// fonction qui ajoute une table de multiplication au tableau -> ne fonctionne pas / sert a rien
function add_multiplication(number) {
  table_add_row(1);
  let last_row_index = new_table.rows.length - 1;
  new_table.rows[last_row_index].cells[0].textContent = "Table de " + number;
  multiplication(number, new_table.rows.length);
}

// fonction qui créé un tableau, calcule les n tables de multiplication et les places dans le tableau
function multiplication_table(number) {
  number++;
  table_creation(number, number);
  new_table.rows[0].cells[0].textContent = "Tables";
  for (let index = 1; index < number; index++) {
    new_table.rows[0].cells[index].textContent = index;
    new_table.rows[index].cells[0].textContent = index;
  }
  for (let index = 1; index < number; index++) {
    let row_number = new_table.rows[index];
    for (let index = 1; index < number; index++) {
      row_number.cells[index].textContent =
        index * row_number.cells[0].innerHTML;
    }
  }
}

new_button.textContent = "Cliquez ici pour générer la table de multiplication";

new_button.addEventListener("click", (e) => {
  let number;
  do {
    number = Number(
      prompt(
        "Choisissez le nombre de tables de multiplication que vous voulez affichez : "
      )
    );
  } while (isNaN(number) || number % 1 !== 0 || number <= 0);
  // multiplication_table(number);
  table_creation(number, number + 1);
  for (let index = 1; index <= number; index++) {
    multiplication(index, index);
  }
});

// table_creation(2, 11);
// multiplication(1, 1);
// multiplication(2, 2);
