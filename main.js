const liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//REVERSE dwraca kolejność elementów w tablicy
console.log("reverse", liczby.reverse())


//stworzenie nowej tablicy od 110 do 1
const od50do1 = new Array ()
for(let i = 50; i > 0; i--) {
    od50do1.push(i)  
}
console.log(od50do1)


//SOME sprawdza czy jakikolwiek element tablicy spełnia podaną funkcję
const sprawdzenie1 = od50do1.some(item => item > 5)
console.log("some", sprawdzenie1)


//EVERY sprawdza czy wszystkie elementy w tablicy spełniają podany warunek
const sprawdzenie2 = od50do1.every(item => item > 5)
console.log("every", sprawdzenie2)


//FILTER tworzy nową tablicę z wszystkimi elementami, które spełniaja dany warunek
const liczod40do60 = od50do1.filter(item => {
    if(item > 40 && item < 60) {
        return item
    }
})
console.log("filter", liczod40do60)


//FIND
let indexLiczby46
od50do1.find((item, index) => {
    if(item === 46) {
        indexLiczby46 = index
    }
})
console.log("index liczby", indexLiczby46)


//FIND zwraca pierwszy element tablicy, który spełnia warunek podanej funkcji
const znajdz = od50do1.find(item => item < 10);
console.log("find", znajdz)


//FOREACH wykonuje dostarczoną funkcję jeden raz na każdy element tablicy
od50do1.forEach(item => {
    console.log("stara liczba", item)
    item = item * 3
    console.log("nowa liczba", item)
})


//MAP tworzy nową tablicę zawierającą wyniki wywoływania podanej funkcji dla każdego elementu wywołującej tablicy
const nowaTablica =  od50do1.map(item => item * 10)
console.log("map", nowaTablica)


//POP Usuwa ostatni element z tablicy zwracając go
const tablica = [3, 5, 7, 9, 11, 13, 15, 17, 19]
tablica.pop()
console.log("pop usuwa ostatni element z tablicy", tablica)


//PUSH dodaje jeden lub więcej elementów na koniec tablicy i zwraca jej nową długość, metoda ta zmienia długość tablicy
tablica.push(21, 23, 25, 27, 29)
console.log("push dodaje elementy na koniec tablicy" ,tablica)


//SHIFT usuwa pierwszy element z tablicy i zwraca go
tablica.shift()
console.log("shift usuwa 1 element", tablica)


//UNSHIFT Dodaje jeden lub więcej elementów na początek tablicy i zwraca jej nową długość
tablica.unshift(1, 3)
console.log("unshift dodaje elementy na poczatek tablicy", tablica)


const tablica2 = new Array(1, 13, 150, 1500)
console.log(tablica2)

//sprawdza długosc tablicy
console.log(tablica2.length)


tablica2.forEach(teb =>{
    if(teb === 150){
        console.log(teb)
    }
})


