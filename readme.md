### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

1. Answer:
   **getElementById: Selects a single element based on its unique ID, Returns one element**.

   **getElementsByClassName**: Selects all elements that have a specific class.Returns a live collection that updates if elements are added or removed from the DOM.

   **querySelector/querySelectorAll**: Uses any CSS selector to select elements.querySelector returns the first matching element. querySelectorAll returns all matching elements as a static list (does not update automatically).

2. Answer:
   Create a new element in memory. Add content (text, attributes, classes) to it.Append or insert the new element into an existing parent element in the DOM.**This allows dynamically adding content without changing the original HTML file.**

3. Answer:
   When an event occurs on an element (child), it propagates upward through its ancestors (parent → grandparent → document).

   Example in words: Clicking a button triggers its click event, and then the click event of its parent div, then the body, and so on.The event “bubbles” from child to parent elements unless stopped.

4. Answer:
   Instead of adding an event listener to each child element individually, you attach one listener to a common parent.

   Inside the parent listener, you check which child triggered the event.

   **Benefits**: Works for dynamically added elements.Reduces memory usage and improves performance by having fewer listeners.

5. Answer:
   **preventDefault()**
   Stops the default action of the browser for an event.

   **Example**: Prevent a form from submitting, prevent a link from navigating, or stop a checkbox from changing state.

   **stopPropagation()**
   Stops the event from bubbling up to parent elements.

   **Example**: Clicking a button inside a parent div won’t trigger the parent’s click listener.
