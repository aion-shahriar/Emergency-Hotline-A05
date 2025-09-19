

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
getElementById: By using this we can select an element with a perticular id from html to work on javascript.
getElementsByClassName: By using this we can target all the elements that have a perticular same class. This returns an HtmlCollection which is kind of like an array and it holds all the elements.
querySelector: This is used when we need to get the first element that matches a selector
querySelectorAll: This selects all elements that matches a css selector.

Tha main difference between these two pair is that the first pair can only select id and class, but the second pair can use any css selector.



2. How do you create and insert a new element into the DOM?

Ans:
we create an element by using createElement(), 
then we add content on that element 
and by appendChild() we insert this element into the DOM.


3. What is Event Bubbling and how does it work?

Ans:
when an event is triggered it runs the handler from which it got the call, then it goes upwards to it's parent element and goes on untill it finds document. This method is called Event Bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
Suppose we have multiple element on a div. Instead of create event for each element we can create an event handler to these element's parentNode and from the parent node we can track which element triggered the event by using event.target, this methoad is called Event Bubbling.


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:
PreventDefault() prevents browser's default action like submitting a form.
stopPropagation() stops the Event Bubbling process. So it stays only on the handler that has called. It doesn't go upwards to it's parent element.



