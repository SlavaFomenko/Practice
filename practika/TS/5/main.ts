class Soda {
    private sodaType:string;
    constructor(sodaType:string=null){
        this.sodaType=sodaType;
    }

    show_my_drink(){                 //void за замовчуванням
        if(this.sodaType===null){
            console.log('Это обычная вода!!!')
            return
        }
        console.log(`Газована вода та ${this.sodaType}`)
    }
}

const cola = new Soda('cola')
const borjomi = new Soda()

cola.show_my_drink()
borjomi.show_my_drink()
class TriangleChecker {
    private side1: number;
    private side2: number;
    private side3: number;

    constructor(side1: number, side2: number, side3: number) {
        if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
            throw new Error("Всі сторони повинні бути позитивними числами");
        }

        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    is_triangle(): boolean {
        return (this.side1 + this.side2 > this.side3) &&
            (this.side1 + this.side3 > this.side2) &&
            (this.side2 + this.side3 > this.side1);
    }
}


const triangleChecker = new TriangleChecker(3, 4, 5);

if (triangleChecker.is_triangle()) {
    console.log('Ура, можна побудувати трикутник!');
} else {
    console.log('На жаль, з цього трикутник не зробити.');
}