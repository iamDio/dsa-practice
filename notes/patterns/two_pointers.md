
# Two Pointer pattern

 The two pointer pattern involves using two pointers in order to reduce the time complexity of traversing a linear structure like a linked list, a string, or an array.

Time: Typically improves brute-force O(n²) to O(n)\
Space: Usually O(1) extra space (in-place) Two main ways to implement:

* fast/slow approach - pointers move at different speeds
  * Slow pointer moves 1 node at a time
  * Fast pointer moves 2 nodes at a time
  * Usage scenarios:
    * Identify cycles
    * A cycle is a neverending loop
    * Happens when last node of linked list points back to a previous node not null
    * Finding key elements without re-traversing the list
    * Find the middle of a list
    * Check for palindromes in a linked list
* opposite direction - pointers start at opposite ends and move inwards
  * Good for comparing elements from opposite ends of list, or for finding pairs
  * Example use case : Find two numbers in the list that add up to a target value
    * Start pointers on opposite ends of the list
    * Based on the sum, adjust the pointers inward until sum = target

Common problems which can be solved with this pattern

| Problem                     | Pattern       |
| --------------------------- | ------------- |
| Detect Cycle in Linked List | fast/slow     |
| Middle of Linked List       | fast/slow     |
| Valid Palindrome (string)   | opposite ends |
| Two Sum (sorted array)      | opposite ends |
| Container With Most Water   | opposite ends |
| Happy Number                | fast/slow     |
