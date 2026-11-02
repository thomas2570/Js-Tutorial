// Event Capturing and Bubbling

// Event capturing and bubbling are two phases of event propagation in the DOM. When an event occurs on an element, it first goes through the capturing phase, where the event is captured from the outermost element down to the target element. After that, it enters the bubbling phase, where the event bubbles up from the target element back to the outermost element.

// In the capturing phase, event listeners can be added to parent elements to intercept the event before it reaches the target element. This allows for more control over how events are handled and can be useful for implementing features like event delegation. 

// A propagation model where events are handled from the innermost element to the outermost.(event bubbling)

// A propagation model where events are handled from the outermost element to the innermost.(event capturing)
