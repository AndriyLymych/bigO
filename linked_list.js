class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null
    }

    append(value) {
        const node = new ListNode(value);

        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;

            return this
        }

        this.tail.next = node;
        this.tail = node;

        return this;
    }
}

const list = new LinkedList().append(1).append({ key: 'key' }).append(4);

console.log(JSON.stringify(list));