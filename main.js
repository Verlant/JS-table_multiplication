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
      // new_tr.setAttribute("class", "row-" + index);
      new_table.append(new_tr);
      for (let index = 0; index < column; index++) {
        let new_td = document.createElement("td");
        // new_td.setAttribute("class", "column-" + index);
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

// ajout de lignes et colonnes
function table_add_row(row) {
  let table_width_cells = new_table.rows[0].cells.length;
  for (let index = 0; index < row; index++) {
    let new_tr = document.createElement("tr");
    // new_tr.setAttribute("class", "row-" + index);
    new_table.append(new_tr);
    for (let index = 0; index < table_width_cells; index++) {
      let new_td = document.createElement("td");
      // new_td.setAttribute("class", "column-" + index);
      new_tr.append(new_td);
    }
  }
}

function table_add_column(column) {
  for (let index = 0; index < new_table.rows.length; index++) {
    let this_row = new_table.rows[index];
    // new_tr.setAttribute("class", "row-" + index);
    for (let index = 0; index < column; index++) {
      let new_td = document.createElement("td");
      // new_tr.setAttribute("class", "row-" + index);
      this_row.append(new_td);
    }
  }
}

// suppression de lignes et colonnes

function table_del_row(row) {
  for (let index = 0; index < row; index++) {
    new_table.removeChild(new_table.lastChild);
  }
}

function table_del_column(column) {
  for (let index = 0; index < new_table.rows.length; index++) {
    let this_row = new_table.rows[index];
    for (let index = 0; index < column; index++) {
      this_row.removeChild(this_row.lastChild);
    }
  }
}

function multiplication(number, row, column) {
  table_creation(row, column);
  new_table.rows[0].cells[0].textContent = "Table de " + number;
  for (let index = 1; index < table_size; index++) {
    new_table.rows[0].cells[index].textContent = index;
    new_table.rows[index].cells[0].textContent = index;
  }
  for (let index = 1; index < table_size; index++) {
    let row_number = new_table.rows[index];
    for (let index = 1; index < table_size; index++) {
      row_number.cells[index].textContent = index * number;
    }
  }
}

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
  let number = Number(
    prompt(
      "Choisissez le nombre de tables de multiplication que vous voulez affichez : "
    )
  );
  while (!Number.isInteger(number)) {
    number = prompt("Veuillez entrer un nombre entier");
  }
  multiplication_table(number);
});

// table_creation(1, 1);
// table_creation(2, 2);
// table_add_row(3);
// table_add_row(10);
// table_add_column(3);
// table_del_row(3);
// table_del_column(1);
// console.log(new_table.rows[0]);

// table_creation(1, 10);
// table_add(2, 20);
// console.log(new_table.rows.length);
// console.log(new_table.rows[new_table.rows.length - 1].cells.length);

// console.log(new_table.rows[0].cells[2].innerHTML);
// console.log(parseInt(new_table.rows[0].cells[1].innerHTML));
// console.log(2);

// table_creation(11, 11);
// new_table.rows[0].cells[0].textContent = "table de 5";

// console.log(new_table.rows[0].cells[0]);
