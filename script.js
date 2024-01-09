let input_value, descision='Попробуй угадать число от 0 до 1000. Для этого введите число, и нажмите на кнопку "Оценить" или на клавишу "Enter"', randomized_count=getRandomInt(1000);
document.getElementById('exput_id').innerHTML='<h2>'+descision+'</h2>';
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function estimate(){
    let click_text = document.getElementById('exput_id'),
        input_value = document.getElementById('input_id').value;
    if (input_value > randomized_count){
        descision = 'Меньше';
    } else if (input_value<randomized_count){
        descision = 'Больше';
    } else if (input_value==randomized_count){
        descision = 'Вы выиграли! Нажмите кнопку "🔄" или клавишу "Enter", чтобы продолжить';
    } else{
        descision = 'Вы вводите что-то не то, попробуйте ввести число'
    }
    click_text.innerHTML='<h2>'+descision+'</h2>';
}
function rebootGame(){
    descision='Попробуй угадать число от 0 до 1000. Для этого введите число, и нажмите на кнопку "Оценить" или на клавишу "Enter"';
    randomized_count=getRandomInt(1000);
    var input= document.getElementById("input_id");
    input.value = "";
}

document.getElementById('input_id').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if(descision=='Вы выиграли! Нажмите кнопку "🔄" или клавишу "Enter", чтобы продолжить'){
            rebootGame();
        } else {
            estimate();
        }
    }
});
