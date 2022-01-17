// 1. Cоздать объект student, который содержит следующие свойства: имя, фамилию, пол (isMale), контактные данные, методы: вывод адреса, смена пола (на противоположный).

const student = {
    name: "Anton",
    lastName: "Chehov",
    sex: "isMale",
    contactDetails: "БЦ ECO TOWER. пр. Соборный, 160",
    addressOutput(){
        return this.contactDetails;
    },
    sexChange(){
        this.sex === "isMale" ? this.sex = "female" : this.sex = "isMale"
    }
}
console.log(student)
student.sexChange();
console.log(student)
console.log(student.addressOutput());

// 2. Cоздать объект, который содержит свойства о факультете и кафедре, методы: переименование факультета (метод должен принимать в качестве параметра новое название факультета).

const faculty = {
    facultyName: "foreignLanguages",
    department_1: "linguistics",
    department_2: "translationStudies",
    department_3: "slavicPhilology",
    facultyRenaming(newName){
        this.facultyName = newName;
    } 
}

console.log(faculty);
faculty.facultyRenaming("economic");
console.log(faculty);

// 3 Создать функции-конструкторы:
// - книга (автор, название, год издания, издательство)
//   * предусмотреть в прототипе метод, который будет возвращать возраст книги в годах.

function Book(author, title, yearOfPublishing, publishingHouse){
    this.author = author,
    this.title = title,
    this.yearOfPublishing = yearOfPublishing,
    this.publishingHouse = publishingHouse
}
/* method: Book::bookAge()
 * return book age in years 
 */
Book.prototype.bookAge = function(){
    return new Date().getFullYear() - this.yearOfPublishing;
};

const someBook1 = new Book("Антон Чехов", "ХАМЕЛЕОН", 1983, "Наука");
const someBook2 = new Book("Антон Чехов", "Студент", 1986, "Наука");
console.log("Возраст книги " + someBook1.title + " = " + someBook1.bookAge() + "лет");
console.log("Возраст книги " + someBook2.title + " = " + someBook2.bookAge() + "лет");
