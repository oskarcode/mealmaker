const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() { },
    set appetizers(appetizerIn) { },

    get mains() { },
    set mains(mainsIn) { },

    get desserts() { },
    set desserts(dessertsIn) { },

    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        }
        this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName]
        const randomIndex = Math.floor(dishes.length * Math.random())
        return dishes[randomIndex]
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers')
        const main = this.getRandomDishFromCourse('mains')
        const dessert = this.getRandomDishFromCourse('desserts')
        const totalPrice = appetizer.price + main.price + dessert.price
        return `Your meal is ${dessert.name}, ${main.name},${dessert.name}, and total price is ${totalPrice}`
    }
}

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Stuffed Mushrooms', 5);
menu.addDishToCourse('appetizers', 'Fried Calamari', 6);

menu.addDishToCourse('mains', 'a', 7);
menu.addDishToCourse('mains', 'c', 8);
menu.addDishToCourse('mains', 'f', 9);

menu.addDishToCourse('desserts', 'h', 7);
menu.addDishToCourse('desserts', 'j', 8);
menu.addDishToCourse('desserts', 'z', 9);

const meal1 = () => {
    const mealDisplay = menu.generateRandomMeal()
    document.getElementById('demo').innerHTML = mealDisplay
}
