class Human {
    constructor(name, height, weight, age, gender) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.gender = gender;
    }
    
    walk() {
        console.log(`${this.name}이 걷는다.`);
    }
    
    run() {
        console.log(`${this.name}이 뛴다.`)
    }
    
    speak() {
		console.log(`${this.name}이 말한다.`);		
    }
    
    hit() {
        console.log(`${this.name}이 주먹으로 사냥감을 사냥하다.`)
    }
    
    shareInfo() {
        console.log(`${this.name}의 정보를 공유하다.`)
        return {
            name: this.name,
            height: this.height,
            weight: this.weight,
            age: this.age,
            gender: this.gender
        }
    }
}


class Warrior extends Human {

    constructor(name, height, weight, age, gender, knife) {
        super(name, height, weight, age, gender);
        this.knife = knife;
    }

    hitAndCutOpponent() {
        super.hit();
        console.log(`${this.name}이 칼으로 사냥감을 사냥하다`);
    }

    getKnife() {
        console.log(`${this.knife}종류의 칼을 사용하고 있다`)
    }
}

const a = new Warrior('su', 180, 100, 20, 'male', 'solider knife');
a.hitAndCutOpponent();
a.getKnife();