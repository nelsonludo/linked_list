class Linkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
    }


    append(value) {
        const newNode = {value:value, next: null };

        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    }


    prepend(value) {
        const newNode = {value:value, next: this.head };

        this.head = newNode;
        if (!this.tail){
            this.tail = newNode;
        }
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if (existingNode) {
            const newNode = { value: value, next: existingNode.next };
            existingNode.next = newNode;
        }
    }

    find(value) {
        if (!this.head) {
            return ("the list is empty so nothing is returned !")
        }

        let curNode = this.head;

        while (curNode) {
            if (curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;
        }
        return null;
    }

    delete(value) {
        if (!this.head) {
            return ("the list is empty so nothing is returned !")
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let curNode = this.head

        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
        }


        if (this.tail.value === value) {
            this.tail = curNode;
        }
    }


    toArray(){
        const elements = []

        let curNode = this.head;
        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }

        return elements;
    }
}

const Linkedlist1 = new Linkedlist();
Linkedlist1.append(1);
Linkedlist1.append(false);
Linkedlist1.append("hell o");
Linkedlist1.append("hell o");
Linkedlist1.append(36.5);
Linkedlist1.append(true);
Linkedlist1.append("nelson");
Linkedlist1.prepend("Foster klarck first");
Linkedlist1.prepend("Foster klarck first");


console.log(Linkedlist1.toArray());
 
Linkedlist1.delete("hell o");
Linkedlist1.delete("Foster klarck first");
Linkedlist1.delete("nelson");

console.log(Linkedlist1.toArray());
console.log(Linkedlist1.find(36.5));
console.log(Linkedlist1.find("Foster klarck first"));

Linkedlist1.insertAfter('new value - 1', 1);
Linkedlist1.insertAfter('new value - 2', 36.5);

console.log(Linkedlist1.toArray());