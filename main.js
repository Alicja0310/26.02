const liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//REVERSE dwraca kolejność elementów w tablicy
liczby.reverse()
console.log(liczby)


//stworzenie nowej tablicy od 110 do 1
const od100do1 = new Array ()
for(let i = 100; i > 0; i--) {
    od100do1.push(i)  
}
console.log(od100do1)


//SOME sprawdza czy jakikolwiek element tablicy spełnia podaną funkcję
const sprawdzenie1 = od100do1.some(item => item > 5)
console.log(sprawdzenie1)


//EVERY sprawdza czy wszystkie elementy w tablicy spełniają podany warunek
const sprawdzenie2 = od100do1.every(item => item > 5)
console.log(sprawdzenie2)


//FILTER tworzy nową tablicę z wszystkimi elementami, które spełniaja dany warunek
const liczod40do60 = od100do1.filter(item => {
    if(item > 40 && item < 60) {
        return item
    }
})
console.log(liczod40do60)


//FINDINDEX zwraca indeks pierwszego elementu tablicy, który spełnia warunek
let indexLiczby46
od100do1.find((item, index) => {
    if(item === 46) {
        indexLiczby46 = index
    }
})
console.log(indexLiczby46)


//FIND zwraca pierwszy element tablicy, który spełnia warunek podanej funkcji
const znajdz = od100do1.find(item => item < 10);
console.log(znajdz)

//FOREACH wykonuje dostarczoną funkcję jeden raz na każdy element tablicy
od100do1.forEach(item => {
    console.log("stara liczba", item)
    item = item * 3
    console.log("nowa liczba", item)
})


//MAP tworzy nową tablicę zawierającą wyniki wywoływania podanej funkcji dla każdego elementu wywołującej tablicy
const nowaTablica =  od100do1.map(item => item * 10)
console.log(nowaTablica)


//POP Usuwa ostatni element z tablicy zwracając go
const tablica = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
tablica.pop()
console.log(tablica)


//PUSH dodaje jeden lub więcej elementów na koniec tablicy i zwraca jej nową długość, metoda ta zmienia długość tablicy
tablica.push(21, 23, 25, 27, 29)
console.log(tablica)


//Shift usuwa pierwszy element z tablicy i zwraca go
tablica.shift()
console.log("", tablica)