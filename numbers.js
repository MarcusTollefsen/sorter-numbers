/*
Denne funskjonaliteten er copy paste fra din codesandbox.
kan ikke javascript fordi jeg misforsto oblig 1 i UIN forrige semester
*/

const lis = document.querySelectorAll("li");
const ul = document.querySelector("ul");
const add = document.getElementById("add");
const sort = document.getElementById("sort");

const random = () => {
    return Math.floor(Math.random() * 9 + 1);
  };
  
  const addNumbers = () => {
    Array.from(lis).forEach((l) => (l.innerHTML = random()));
  };

const sortNumbers = () => {
    const numbers = Array.from(lis).map((li) => li.innerHTML);
    return numbers.sort((a, b) => a - b);
  };

  const updateView = () => {
    const sortedNumbers = sortNumbers();
    const lisAsArray = Array.from(lis);
    sortedNumbers.forEach(
      (number, index) => (lisAsArray[index].innerHTML = number)
    );
  };

add.addEventListener("click", addNumbers);
sort.addEventListener("click", updateView);