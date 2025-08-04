# 🧭 Two Pointer Pattern

The **Two Pointer** pattern involves using two pointers to reduce the time complexity of traversing a linear structure like an array, string, or linked list.

- **Time Complexity**: Often improves brute-force `O(n²)` to `O(n)`
- **Space Complexity**: Typically `O(1)` (in-place)

---

## 🧠 Two Main Approaches

### 1. Fast/Slow Pointer (Same Direction)

Pointers move at **different speeds**:

- **Slow** pointer: moves 1 step at a time  
- **Fast** pointer: moves 2 steps at a time  

**Use Cases**:
- Detect cycles in a linked list
- Find the **middle** of a linked list
- Check if a linked list is a **palindrome**
- Identify key elements without re-traversing the list

---

### 2. Opposite Direction (Converging)

Pointers start at **opposite ends** and move **inward**.

**Use Cases**:
- Compare elements from both ends (e.g., palindrome check)
- Find two numbers that sum to a target in a **sorted array**
  - Start with `left` and `right` pointers at opposite ends
  - Adjust pointers based on current sum

---

## 📚 Common Problems Solved with Two Pointers

| Problem                     | Pattern       |
|----------------------------|---------------|
| Detect Cycle in Linked List | Fast/Slow     |
| Middle of Linked List       | Fast/Slow     |
| Valid Palindrome (String)   | Opposite Ends |
| Two Sum (Sorted Array)      | Opposite Ends |
| Container With Most Water   | Opposite Ends |
| Happy Number                | Fast/Slow     |

---

## 🧩 General Steps for Two Pointer Problems

1. **Identify** the pattern type:  
   `Converging`, `Fast/Slow`, or `Sliding Window`
2. **Customize** movement logic
3. **Define** the termination condition

---

## 🧪 Code Templates

### 🔁 Opposite Direction (Converging)

```ts
function convergingTemplate(array: number[], target: number): [number, number] | null {
    let left = 0;
    let right = array.length - 1;

    // TERMINATION CONDITION
    while (left < right) {
        const sum = array[left] + array[right];

        if (sum === target) {
            // Condition met, return indices
            return [left, right];
        } else if (sum < target) {
            left++; // Need a larger sum
        } else {
            right--; // Need a smaller sum
        }
    }

    // No valid pair found
    return null;
}
```

### Same Direction (fast/slow) template

```ts
function fastSlowTemplate(array: number[], unwantedValue: number): number {
    let slow = 0;
    let fast = 0;

    // TERMINATION CONDITION: Fast reaches end
    while (fast < array.length) {
        if (array[fast] !== unwantedValue) {
            array[slow] = array[fast]; // Copy valid element
            slow++; // Advance slow pointer
        }
        fast++; // Always advance fast pointer
    }

    // Return new length or result based on problem
    return slow;
}
```

### Cross-Array Comparison
```ts

function crossArrayTemplate(arr1: string, arr2: string): boolean {
    let i = 0;
    let j = 0;
    // TERMINATION CONDITION: Customize based on problem requirements 
    while( i < arr1.length & j < arr2.length ) {
        // MOVEMENT LOGIC: Customize based on problem-specific matching rules
        if ( exactMatchRequired && arr[i] === arr2[j]) {
            // Both elements match - advance both pointers 
            i++;
            j++;
        } else if (skipConditionForArr1) {
            // Skip elements in first array because condition is not met
            i++;
        } else if (skipConditionForArr1) { 
            // Skip elements in second array because condition is not met
            j++;
        } else {
            // MOVEMENT LOGIC: Handle mismatch case
            return false; // could be break, continue different logic
        }
    }
    // TERMINATION CONDITION: Customize end-state validation 
    return i === arr1.length & j === arr2.length; // Could be i === arr1.length, different checks
}
```

## Sliding Window

```ts
function slidingWindowTemplate(array: number[]): number {
    let left = 0;
    let maxResult = 0;

    // TERMINATION CONDITION: Right pointer traverses entire array
    for (let right = 0; right < array.length; right++) {
        
        // MOVEMENT LOGIC: Customize window expansion
        addToWindow(array[right]);  // Add current element to window
        
        // MOVEMENT LOGIC: Customize window contraction condition
        while (windowSizeExceedsLimit() || windowIsInvalid()) {
            removeFromWindow(array[left]);  // Remove leftmost element
            left++;  // Shrink window from left
        }
        
        // MOVEMENT LOGIC: Customize result processing
        maxResult = Math.max(maxResult, right - left + 1);  // Update result
    }
    
    // TERMINATION CONDITION: Return accumulated result
    return maxResult;  // Could be: minResult, window contents, etc.
```
