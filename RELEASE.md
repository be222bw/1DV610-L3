# Release

## Chapter 2

The classes, fields and methods all have meaningful names, and they are **intention-revealing** to a large degree. A single-letter loop counter might have slipped in as a local variable, though.

The class and field names are all **noun phrases**, while the method names are **verb phrases**. The names tend to be pretty long, and they are **searchable**. **Mental mapping** has been avoided.

## Chapter 3

The methods are generally pretty **small**, at least not larger than can be seen on a regular computer monitor without scrolling. **Indentation** has been used for introducing every new **block**, and even under every case in a switch statement. The methods generally only **do one thing**, although some methods have to pick an algoritm that suits the combination of keys pressed, which makes the code a little longer. The methods do not mix **levels of abstraction**, but instead has the really low-level stuff in a particular class with static methods.

## Chapter 4

The code has no comments, as the method names ought to be considered clear enough about what the code does. This was decided because comments in the code would be **reduntant**. Since comments were not **mandated**, there are no **noise comments** to clutter up the code. JSDoc comments were considered, but as this is practically **non-public code**, they would be without much value.

## Chapter 5

The general **class size** is pretty small in this project. **The newspaper metaphor** applies to most methods, except for the function objects, whose class name corresponds to the headline in the metaphor. As this project was developed by a single programmer, there were no **team rules**, but, as a general rule of thumb, JSLint recommendations were followed. In general, **vertical ordering** was not applicable, since no classes used their own methods, but it does show up in the main index file, where the event listeners are defined under their being added to the HTML element, so **indentation** for every new block, etc.

## Chapter 6

The concept of **controllers** is mostly behavioural, thus they are implemented as **objects**, not **data structures**. The **law of Demeter** was followed to a T. The only thing resembling a **data structure**  is the *ModifierButtonCombination* class, whose only member is *movement*. This was done as a way not to repeat the movement number in the classes that inherit from it. Unfortunately, Javascript classes do not allow for **protected** members.

## Chapter 7

In terms of **error handling**, no **exceptions** have been used in the project. Javascript itself makes use of exceptions, which is why it has been easy to **debug** the code without the use of any custom exceptions. Javascript methods return a lot of **null** "pointers" and the homegrown **undefined** value, which is considered bad practice, and therefore the code uses a lot of **optional chaining** and **nullish coalescing** operators to evade many bugs. The testing has been manual, as it is not a question of operating on data as much as it is a question of implementing behaviour.

## Chapter 8

The project does not contain any **third-party code**, except for the Javascript library itself. Some of these methods and objects have been learned by doing **learning tests**, but the **documentation** has also been used.

## Chapter 9

No **unit tests** are present in the code. This is much because of the things mentioned in the section about chapter 7. The code includes a lot of strings defined in the browser environment, both events and CSS properties, which could be considered **domain-specific language**. These strings could be tested in a unit test, in case anything has been misspelled, but misspellings could very well be present in the test code, the code being tested or both. Again, not much data is being computed, mostly just properties of the browser. The development has been **test-driven** insomuch as the behaviour implemented has been tested in the browser continuously.

## Chapter 10

The classes have been kept **small**; the biggest class is one filled with only static methods that are used for identification of buttons and CSS properties, but even that one is not much bigger than a regular computer monitor. All classes have high **cohesion**, owing much to the low amount of instance variables. The classes generally follow the **single responsibility principle**, which is most apparent in the *ModifierButtonCombination*-derived classes; they implement a very specific behaviour depending on the modifier button that is pressed.

## Chapter 11

The code **separates the construction of objects from using them**, which the *ModifierButtonAndArrowCombination* **factory** proves. The **domain-specific language** is mostly terms related to graphic user interfaces.