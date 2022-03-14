<code>
# **Artem Puzik**
===
## **email: ar_puz@mail.ru phone:+375292208977**
===
## **github: 1999artem**
===
## About Myself:
## I am the chief specialist in a company that is a developer of security systems in the market of the Republic of Belarus. The desire to develop led me to the courses. 
===
### human_list.html
'''
< function Human (firstName, lastName, age, id){
    this.firstName= firstName;
    this.lastName = lastName;
    this.age = age;
    this.id = id;
}
Human.prototype.toString = function toString(){
    var ret = "Привет, меня зовут"+this.firstName+" "+this.lastName+", мне "+this.age+" лет))<br>";
    return ret;
}
var arrayHuman = new Array();
// Добавляем в массив объекты и переводим объекты тоже в массив (теряем свойства объекта)
/*function arrPush (human){
var humanMass = Object.values (human); 
   arrayHuman.push(humanMass);
   return arrayHuman;
}*/
// Добавляем в массив объекты
function arrPush (human){
   arrayHuman.push(human);
   return arrayHuman;
}
// Сортировка массивов методом пузырька
/*function sortMassByAge (arr){
    var buble =0;
    for (var i = 0, j=0; i<arr.length-1; i++){
        if (arr[i][j]>arr[i+1][j]){
            buble = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=buble;
        }
    }
    return arr;
}
*/
// Сортировка массивов методом пузырька с сохранением свойств объекта
function sortMassByAge (arr){
    var obj = Human();
    for (var j = 0; j<arr.length+1; j++){
        for (var i = 0; i<arr.length-1; i++){
        if (arr[i].age>arr[i+1].age){
            obj = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=obj;
    }
    }
}
    return arr;
}

for (var j = 0; j<2; j++){
    human = new Human (
        prompt ("Введите имя","Ivan"), prompt("Введите фамилию","Ivanov"), prompt("Введите возраст","30"),j
    )
    arrPush (human);
}
arrayHuman.sort(function(a, b){
  return a.age-b.age;
});
   // sortMassByAge (arrayHuman);
    for (var i = 0; i<arrayHuman.length; i++){
    document.write ("ID: "+arrayHuman[i].id+" - Age: "+arrayHuman[i].age+" Name: "+arrayHuman[i].firstName+" "+arrayHuman[i].lastName+"<br>");

} >
'''
===
## Graduated from the Belarusian National Technical University. 
## English - Basic
</code>