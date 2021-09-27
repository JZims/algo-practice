  
  class Node{
      constructor(val){
          this.val = val
          this.next = null
      }
  }
  class SinglyLinked{
      constructor(){
        this.head = null
        this.tail = null
        this.length = 0
      }
      push(val){
        
        //add passed value as the head
        //if there is no existing head, make the head equal to this value
        //increment the length by one

        let newNode = new Node(val)
        if(!this.head){
             this.head = newNode
             this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
      }

      pop(){

        //if no nodes are in the list, return undefined
        if(!this.head) return undefined
        //loop through the list until you reach the tail
        let current = this.head
        let newTail = current

        while(current.next){
                newTail = current
                current = current.next         
            }
        //set the tail to be the 2nd to last node
        this.tail = newTail
        //set the next property of the 2nd to last node to be null
        this.tail.next = null
         //decrement the length of the list by 1l
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        //return the value of the node removed
        console.log(current)
        return current
    }
        
    shift(){
        //return undefined if no nodes are present 
        if(!this.head) return undefined
        //store current head property in a variable
        let currentHead = this.head
        //set the head property to the current head's next property
        this.head = currentHead.next
        //decerement the length by one
        this.length--
        //account for edge case for empty list 
        if(this.length === 0 ){
            this.tail = null
        }
        //return the value of the removed node
        return currentHead



    } 

    unshift(val){
        //create a new node using the value passed in
        const newNode = new Node(val)
        
        //edge case check if list is empty or there is no head property, set head and tail to be the new node
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            //otherwise set the new node's next property to be the current head property on the list 
            newNode.next = this.head
            //set the head property on the list to be that newly created node
            this.head = newNode
        }
             //increment length of the list by 1
            this.length++
            //return the list
            
            return this
    }


    get(index){
        
        //if index is less than or greater than the length of the list, return null
        if(index < 0 || index >= this.length ) return null
        let current = this.head
        //loop through the list until you reach the index and store it
        for(var i = 0; i < index; i++){
            current = current.next
        }
        // return the node at that specific index
        
        return current
    }

    set(index, val){
        //use get function to find a node
        let targetNode = this.get(index)
        
        if(targetNode){
             //if the node is found, set the value of that node to be the value passed to the function
            targetNode.val = val
            //return true if the value is set
            console.log("true")
            
            return true
        }
        //if the node is not found, return false
        console.log("false")
         return false 
        

    }

    insert(index, val){
       
        //if index is less than zero or greater than the length, return false
        if(index < 0 || index > this.length) return false
        //if the index is the same as the length, push a new node to the end of the list
        else if(index === this.length) !!this.push(val)
        //if the index is 0, unshift a new node at the start
        else if(index === 0) return !!this.unshift(val)
        else {
            let newNode = new Node(val)
            //Otherwise, using the get method, access the node at the index -1
            let foundNode = this.get(index - 1)
            let temp = foundNode.next
            //set the next property on that node to be the new node 
            foundNode.next = newNode
            //set the next property on the new node to be the previous next
            newNode.next = temp
            //increment the length
            this.length++
            //return true
            return true
        }
        
    }

    remove(index){
        //if the index is less than zero or greater than the length, return undefined
        if(index < 0 || index > this.length) return undefined
        //if the index is the same as the length-1, pop
        if(index === this.length - 1) return !!this.pop()
        //if the index is 0, shift
        if(index === 0) return !!this.shift()
        //otherwise, using the get method, access the node at the index of -1
        let foundNode = this.get(index - 1)
        
        //set the next property on that node to be the next of the next node
        let removedNode  = foundNode.next
        foundNode.next = removedNode.next
        //decrement the length
        this.length--
        //return the value of the removed node
        console.log(removedNode, foundNode)
        return removedNode
    }

    print(){
        let arr = []
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }

    reverse(){
        //reversing in place
        //Swap the head and the tail
        let node = this.head
        this.head = this.tail
        this.tail = node
        //Create a variable called next
        let next = null
        //another called previous(should be null so tail knows when to stop)
        let previous = null
        
        //loop through the list
        for(var i = 0; i < this.length; i++){
             //set next to be the next property of node
            next = node.next
            //set the next property of the node to be whatever previous is
            node.next = previous
            //set previous to be the value of the node variable
            previous = node
             //set the node variable to be the value of the next variable
            node = next
        }
       //return the reversed list
        this.print()
        return this

    }   


        
  }
   


  let list = new SinglyLinked()

    list.push("HELLO")
    list.push("GOODBYE")
    list.push("AHHHHHH")
    list.unshift("Whoa!")
    list.get(1)
    list.print()
    list.reverse()

   
    