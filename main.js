const dataset = [];
for (let i = 0; i < 30; i++) {
  const row = [
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 61) + 40,
    Math.floor(Math.random() * 61) + 40
  ];
  dataset.push(row);
}

const column_1 = dataset.map(row => row[0]);
const column_2 = dataset.map(row => row[1]);
const column_3 = dataset.map(row => row[2]);
const column_4 = dataset.map(row => row[3]);


const sum_1 = column_1.reduce((acc, val) => acc + val, 0);
const sum_2 = column_2.reduce((acc, val) => acc + val, 0);
const sum_3 = column_3.reduce((acc, val) => acc + val, 0);
const sum_4 = column_4.reduce((acc, val) => acc + val, 0);


const sums = [sum_1, sum_2, sum_3, sum_4];


const total_score = sums.reduce((acc, val) => acc + val, 0);


const results = {
  col1: column_1,
  col2: column_2,
  col3: column_3,
  col4: column_4,
  sums: sums,
  total_score: total_score
};


console.log(results);
