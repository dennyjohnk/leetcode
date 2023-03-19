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

var mergeTwoLists = function (list1, list2) {
    let head = newNode = new Node(0);

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            head.next = list1;
            list1 = list1.next
        } else {
            head.next = list2;
            list2 = list2.next;
        }
        head = head.next;
    }

    head.next = list1 || list2;
    return newNode.next;
}


let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(4);
//head1.next.next.next = new Node(5);

let head2 = new Node(1);
head2.next = new Node(3);
head2.next.next = new Node(4);

let merged = mergeTwoLists(head1, head2);
print(merged);