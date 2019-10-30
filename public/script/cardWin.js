class cardWin {

    constructor(_card1, _card2, _arr) {
        this.card1 = _card1
        this.card2 = _card2
        this.arr = _arr
    }


    isHighCard() {

        let array = [...this.arr]
        array.push(this.card1);
        array.push(this.card2);
        array = array.sort((a, b) => a.power - b.power)
        array = array.slice(2)

        array = array.map((item) => {
            return item.power
        })

        array.push("isHighCard");
        return array
    }

    isOnePair() {

        let count1 = 0;
        let count2 = 0;
        let array = []

        for (let i = 0; i < this.arr.length; i++) {

            if (this.card1.power === this.arr[i].power) {
                count1++;
            }
            if (this.card2.power === this.arr[i].power) {
                count2++;
            }
        }

        if (count1 === 1 && count2 === 0) {
            array.push(this.card1.power)
            array.push("isOnePair")
            return array;

        } else if (count1 === 0 && count2 === 1) {
            array.push(this.card2.power)
            array.push("isOnePair")
            return array;

        } else if (this.card1.power === this.card2.power) {
            array.push(this.card1.power)
            array.push("isOnePair")
            return array;
        }
        else {
            return -1
        }
    }

    isTwoPair() {

        let array = [...this.arr];
        array.push(this.card1);
        array.push(this.card2);
        array.push(0)
        array = array.sort((a, b) => a.power - b.power);
        let newArr = []

        for (let i = 0; i < array.length - 2; i++) {

            if (array[i].power === array[1 + i].power
                && array[i].power !== array[i + 2].power) {
                newArr.push(array[i])
            }
            if (newArr.length === 3) {
                newArr.shift()
            }
        }

        newArr = newArr.map(item => {
            return item.power
        })

        if (newArr.length === 2) {
            if (newArr.indexOf(this.card1.power) !== -1 || newArr.indexOf(this.card2.power) !== -1) {
                newArr.push('isTwoPair')
                return newArr
            }
        }
        return -1
    }

    isThreeOfAKind() {

        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        let array = [];

        for (let i = 0; i < this.arr.length; i++) {

            if (this.card1.power === this.arr[i].power) {
                count1++;
            }
            if (this.card2.power === this.arr[i].power) {
                count2++;
            }
            if (this.card2.power === this.card1.power &&
                this.card2.power === this.arr[i].power) {
                count3++;
            }
        }

        if (count1 === 2 && count2 === 0) {
            array.push(this.card1.power)
            array.push('isThreeOfAKind')
            return array;

        } else if (count1 === 0 && count2 === 2) {
            array.push(this.card2.power)
            array.push('isThreeOfAKind')
            return array;

        } else if (count3 === 1) {
            array.push(this.card1.power)
            array.push('isThreeOfAKind')
            return array;
        }
        else {
            return -1
        }
    }

    isFullHouse() {

        let array = [...this.arr];
        let count = 0;
        array.push(this.card1);
        array.push(this.card2);
        array = array.sort((a, b) => a.power - b.power);
        let newArr = [];

        for (let i = 0; i < array.length - 1; i++) {

            if (array[i].power === array[i + 1].power) {
                newArr.push(array[i]);
            }
        }

        if (newArr.length === 4) {
            for (let i = 0; i < newArr.length; i++) {
                if (newArr[i].power !== newArr[i + 1].power ||
                    newArr[0].power === newArr[i].power) {
                    newArr.splice(i, 1)
                    break;
                }
            }
        }
        if (newArr.length === 3) {
            for (let i = 0; i < newArr.length - 1; i++) {
                if (newArr[i].power !== newArr[i + 1].power) {
                    count++
                }
            }
        }
        if (count === 2) {
            return -1
        }

        newArr = newArr.map(item => {
            return item.power
        })

        if (newArr.length === 3) {
            if (newArr.indexOf(this.card1.power) !== -1 || newArr.indexOf(this.card2.power) !== -1) {
                newArr.push('isFullHouse')
                return newArr
            }
        }
        return -1
    }

    isStraight() {
        let array = [...this.arr];
        array.push(this.card1);
        array.push(this.card2);
        array.sort((a, b) => a.power - b.power);

        if (array.length > 4) {
            for (let i = array.length - 5; i > -1; i--) {

                if (array[i].power + 4 === array[i + 4].power &&
                    array[i + 1].power + 3 === array[i + 4].power &&
                    array[i + 2].power + 2 === array[i + 4].power &&
                    array[i + 3].power + 1 === array[i + 4].power) {
                    array = array.splice(i, 5)

                    if (array.indexOf(this.card1) !== -1 || array.indexOf(this.card2) !== -1) {
                        array = array.map(item => {
                            return item.power
                        })
                        array.push('isStraight')
                        return array
                    }
                }
            }
        }
        return -1;
    }

    isFourOfAKind() {

        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        let array = [];

        for (let i = 0; i < this.arr.length; i++) {

            if (this.card1.power === this.arr[i].power) {
                count1++;
            }
            if (this.card2.power === this.arr[i].power) {
                count2++;
            }
            if (this.card2.power === this.card1.power &&
                this.card2.power === this.arr[i].power) {
                count3++;
            }
        }

        if (count1 === 3) {
            array.push(this.card1.power)
            array.push('isFourOfAKind')
            return array;

        } else if (count2 === 3) {
            array.push(this.card2.power)
            array.push('isFourOfAKind')
            return array;

        } else if (count3 === 2) {
            array.push(this.card1.power)
            array.push('isFourOfAKind')
            return array;
        }
        else {
            return -1
        }
    }

    isFlush() {

        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        let count4 = 0;

        let array = [...this.arr]
        array.push(this.card1);
        array.push(this.card2);

        for (let i = 0; i < array.length; i++) {

            if (array[i].kind === "club") {
                count1++
            }
            else if (array[i].kind === "spade") {
                count2++

            }
            else if (array[i].kind === "diamond") {
                count3++

            }
            else {
                count4++
            }
        }

        if (count1 > 4) {
            array = array.filter(item => item.kind === 'club')
        } else if (count2 > 4) {
            array = array.filter(item => item.kind === 'spade')
        } else if (count3 > 4) {
            array = array.filter(item => item.kind === 'diamond')
        } else if (count4 > 4) {
            array = array.filter(item => item.kind === 'heart')
        } else {
            return -1
        }

        array = array.sort((a, b) => a.power - b.power);

        let x = array.indexOf(this.card1)
        let y = array.indexOf(this.card2)

        if (x === -1 && y === -1) {
            return -1
        }

        if (x > y) {

            if (x === 0) {
                array = array.splice(0, 5)
                array = array.map(item => {
                    return item.power
                })
                array.push('isFlush');
                return array;
            } else if (x == 1 && array.length > 5) {
                array = array.splice(1, 5)
                array = array.map(item => {
                    return item.power
                })
                array.push('isFlush');
                return array;
            } else if (x === 2 && array.length > 6) {
                array = array.splice(2, 5)
                array = array.map(item => {
                    return item.power
                })
                array.push('isFlush');
                return array;
            } else {
                array = array.slice(array.length - 5)
                array = array.map(item => {
                    return item.power
                })
                array.push('isFlush');
                return array;
            }

        } else {
            if (y === 0) {
                array = array.splice(0, 5)
                array = array.map(item => {
                    return item.power
                })
                array.push('isFlush');
                return array;
            } else if (y == 1 && array.length > 5) {
                array = array.splice(1, 5)
                array = array.map(item => {
                    return item.power
                })
                array.push('isFlush');
                return array;
            } else if (y === 2 && array.length > 6) {
                array = array.splice(2, 5)
                array = array.map(item => {
                    return item.power
                })
                array.push('isFlush');
                return array;
            } else {
                array = array.slice(array.length - 5)
                array = array.map(item => {
                    return item.power
                })
                array.push('isFlush');
                return array;
            }
        }
    }

    isStraightFlush() {
        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        let count4 = 0;
        let array = [...this.arr];
        array.push(this.card1);
        array.push(this.card2);
        for (let i = 0; i < array.length; i++) {

            if (array[i].kind === "club") {
                count1++
            }
            else if (array[i].kind === "spade") {
                count2++

            }
            else if (array[i].kind === "diamond") {
                count3++

            }
            else {
                count4++
            }
        }

        if (count1 > 4) {
            array = array.filter(item => item.kind === 'club')
        } else if (count2 > 4) {
            array = array.filter(item => item.kind === 'spade')
        } else if (count3 > 4) {
            array = array.filter(item => item.kind === 'diamond')
        } else if (count4 > 4) {
            array = array.filter(item => item.kind === 'heart')
        } else {
            return -1
        }

        array.sort((a, b) => a.power - b.power);

        if (array.length > 4) {
            for (let i = array.length - 5; i > -1; i--) {

                if (array[i].power + 4 === array[i + 4].power &&
                    array[i + 1].power + 3 === array[i + 4].power &&
                    array[i + 2].power + 2 === array[i + 4].power &&
                    array[i + 3].power + 1 === array[i + 4].power &&
                    array[i].kind === array[i + 4].kind &&
                    array[i + 1].kind === array[i + 4].kind &&
                    array[i + 2].kind === array[i + 4].kind &&
                    array[i + 3].kind === array[i + 4].kind) {
                    array = array.splice(i, 5)

                    if (array.indexOf(this.card1) !== -1 || array.indexOf(this.card2) !== -1) {
                        array = array.map(item => {
                            return item.power
                        })
                        array.push('isStraightFlush')
                        return array
                    }
                }
            }
        }
        return -1
    }

    myWinCards() {
        if (this.isStraightFlush() !== -1) {
            return this.isStraightFlush()
        }
        else if (this.isFourOfAKind() !== -1) {
            return this.isFourOfAKind()
        } else if (this.isFullHouse() !== -1) {
            return this.isFullHouse()
        } else if (this.isFlush() !== -1) {
            return this.isFlush()
        } else if (this.isStraight() !== -1) {
            return this.isStraight()
        } else if (this.isThreeOfAKind() !== -1) {
            return this.isThreeOfAKind()
        } else if (this.isTwoPair() !== -1) {
            return this.isTwoPair()
        } else if (this.isOnePair() !== -1) {
            return this.isOnePair()
        } else {
            return this.isHighCard()
        }
    }
}





