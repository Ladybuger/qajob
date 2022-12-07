//Ввод символов
function insert(num) {
  document.form.textview.value += num;
}
//Очистка
function clean() {
  document.form.textview.value = "";
}
//Назад
function back() {
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0,exp.length-1);
}
//Равно
function equal() {
  var exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = eval(exp);
  }
}