var Soda = /** @class */ (function () {
    function Soda(sodaType) {
        if (sodaType === void 0) { sodaType = null; }
        this.sodaType = sodaType;
    }
    Soda.prototype.show_my_drink = function () {
        if (this.sodaType === null) {
            console.log('Это обычная вода!!!');
            return;
        }
        console.log("\u0413\u0430\u0437\u043E\u0432\u0430\u043D\u0430 \u0432\u043E\u0434\u0430 \u0442\u0430 ".concat(this.sodaType));
    };
    return Soda;
}());
var cola = new Soda('cola');
var borjomi = new Soda();
cola.show_my_drink();
borjomi.show_my_drink();
var TriangleChecker = /** @class */ (function () {
    function TriangleChecker(side1, side2, side3) {
        if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
            throw new Error("Всі сторони повинні бути позитивними числами");
        }
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    TriangleChecker.prototype.is_triangle = function () {
        return (this.side1 + this.side2 > this.side3) &&
            (this.side1 + this.side3 > this.side2) &&
            (this.side2 + this.side3 > this.side1);
    };
    return TriangleChecker;
}());
var triangleChecker = new TriangleChecker(-3, 4, 5);
if (triangleChecker.is_triangle()) {
    console.log('Ура, можна побудувати трикутник!');
}
else {
    console.log('На жаль, з цього трикутник не зробити.');
}
