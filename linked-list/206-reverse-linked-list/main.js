class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function print(head) {
    let curr = head;

    while (curr !== null) {
        console.log(curr.val);
        curr = curr.next;
    }
}

var reverseList = function (head) {
    let [prev, curr, next] = [null, head, null];

    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

print(head);
const rev = reverseList(head);
print(rev);