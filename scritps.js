function isValidDate(dateString){

    const date = new Date(dateString)

    return !isNaN(date.getTime());
}
console.log(isValidDate('2023-01-02'));

console.log(isValidDate('6548456464'));

function isValidDateRegex(dateString){
    const pattern =/^\d{2}\/\d{2}\/\d{4}$/;

    return pattern.test(dateString);
}
console.log(isValidDateRegex(12121212));

console.log(isValidDateRegex('29/07/2000'));
function validarData(){
    const inputData = document.getElementById('data').value;

    if(isValidDate(inputData) || isValidDateRegex(inputData)){
      alert('Data válida!');
    } else {
      alert('Data inválida!');
    }}