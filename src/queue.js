const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class elementList {
	constructor(value) {
		this.value = value;
		// следующий после текущего узла объект равен null
		this.next = null;
	}
}

class Queue {
  constructor() {
		// первого элемента нет
		this.head = null;
		// элементы отсутствуют
		this.length = 0;
	}


  getUnderlyingList() {
		return this.head;
  }

  enqueue(value) {
		// добавим элемент в связанный список
		// Условие: если список пуст
		if (this.length === 0) {
			// создаем новый узел в котором head будет равен этому узлу
			this.head = new elementList(value);
		} else {
			let currentNode = this.head;
			// движемся по существующим узлам к последнему
		  // поле next указывает на следующий элемент
		  while(currentNode.next) {
			  currentNode = currentNode.next;
		  }
			// Дойдя до крайнего узла, указываем что за ним будет новый узел
		  currentNode.next = new elementList(value);
		}
		// если же элементы были, мы получаем ссылку на текущий элемент
		// И также увеличиваем длину списка
		this.length++;
  }

  dequeue() {
		// если нет элементов, просто выходим из метода
    if (!this.head) {
      return;
    }

    const delNode = this.head.value;
    this.head = this.head.next;
    return delNode;
	}
}

module.exports = {
  Queue
};
