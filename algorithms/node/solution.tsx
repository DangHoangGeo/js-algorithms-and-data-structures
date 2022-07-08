/**
 * Definition for singly-linked list.
 * 
 * */

  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
    }
  }

 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let dummyHead:ListNode = new ListNode(0)
    let currentNode = dummyHead
    while (l1 != null || l1 != null || carry != 0){
        let x = l1 ? l1.val : 0
        let y = l2 ? l2.val : 0
        let colsum = x + y + carry
        carry = colsum >= 10 ? 1 : 0
        let newNode = new ListNode(colsum % 10)
        currentNode.next = newNode
        console.log("currentNode")
        console.log(currentNode)
        console.log("dummyHead")
        console.log(dummyHead)
        currentNode = newNode
        console.log("currentNode")
        console.log(currentNode)
        console.log("dummyHead")
        console.log(dummyHead)
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return dummyHead;
};