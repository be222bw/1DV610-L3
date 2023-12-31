## Checklista
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - [x] Koden är objektorienterad
  - [x] Jag har skrivit en modul som riktar sig till programmerare

## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - [x] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [x] De flesta testfall fungerar
    - [x] Koden är förberedd på Återanvändning
    - [x] All kod samt historik finns i git 
    - [x] Kodkvaliterskraven är ifyllda
    - [x] Reflektion är skriven utifrån bokens kapitel 
  - [x] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [x] Samtliga testfall är skrivna    
    - [ ] Testfall är automatiserade
    - [x] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [x] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 

Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 

## Återanvändning
This is a controller of the Window-element module.

## Beskrivning av min kod
This code is taking advantage of the module created in the earlier assignment. It is a controller in the Model-View-Controller architecture. It makes the module (a custom HTML window representing a computer window) controllable with the keyboard, i.e. the window can be moved, resized, closed, minimised and maximised with the keyboard.

Because the HTML element is used in a browser context, some of the keyboard shortcuts are already in use by the operating system, so the shortcuts used by the controller may seem a little peculiar.

## Hur jag testat
Most of the testing has been manual, as the methods did not return anything useful; the controller is supposed to control the window, from the last examination, with the keyboard, which is easy to test in the browser.

### Testfall
Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. Om ni använder vertyg för testning kan ni ha en bild här med testrapporten. Tänk på att kommunicera till mig. Vad fungerar?, vad fungerar inte? Hur är det testat? Vilka delar testas inte?

Most of the methods, that the second-party programmer uses, do not have any meaningful output, except what is shown in the browser (size of window, etc.), so the the test cases listed are only of the GUI behaviour.

| Vad testas   | input              | output | utfall PASS/FAIL           |
| ------------ | ------------------ | ------ | -------------------------- |
| Maximisation | Alt+M              | N/A    | Window was maximised: PASS |
| Minimisation | Alt+m              | N/A    | Window was minimised: PASS |
| Restoration  | Alt+m              | N/A    | Window was restored: PASS  |
| Closing      | Alt+c              | N/A    | Window was closed: PASS    |
| Moving       | Alt+Arrow          | N/A    | Window was moved: PASS     |
| Enlarging    | Ctrl+Arrow         | N/A    | Window was enlarged: PASS  |
| Reducing     | Ctrl+Shift+Arrow   | N/A    | Window was reduced: PASS   |

## Kodkvalitetskrav

**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.

### Namngivning

There are few instance variables in the project, which is why arguments will also be included in the list.

| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| #activeWindow        | The only member of the controller. The con-  |
|                      | troller uses it in both methods, making the  |
|                      | class rather **cohesive**.                   |
|                      |                                              |
|                      |                                              |
| movement             | Inherited from ModifierButtonCombination, all|
|                      | its subclasses uses it. Having it as a       |
|                      | member of the superclass, eliminates the     |
|                      | need to define it in the subclasses, thus    |
|                      | abiding the **DRY** principle. It is used by |
|                      | all the only method of all of the subclasses,|
|                      | making them **cohesive**. The fact that it is|
|                      | declared in the superclass, and not passed   |
|                      | along with the constructor, eleminates the   |
|                      | need for a **triadic** constructor.

### Funktioner

| Metodnamn och förklaring | Reflektion                                   |
| ------------------------ | ---------------------------------------------|
| setActiveWindow is       | **Monadic**. If the private variable is not  |
| **explicit**. It sets the| set, the controller uses Elvis operators and |
| private variable         | the like, as not to call undefined methods.  |
| #activeWindow, on which  |                                              |
| controller works.        |                                              |
|                          |                                              |
|                          |                                              |
|                          |                                              |
|                          |                                              |
| handleKey respons to key | The terms are familiar to someone used to the|
| input. It uses a lowlevel| **problem domain**, whose userbase includes  |
| method to determine if   | developers. The methods are **niladic**.     |
| the key is arrow, and an |                                              |
| abstract factory to get  |                                              |
| the right class according|                                              |
| to the modifier button   |                                              |
| pressed. It is the only  |                                              |
| method in the class, but |                                              |
| it delegates a lot to    |                                              |
| other classes.           |                                              |
|                                |                                        |
| exec of the                    |                                        |
| ModifierButtonCombinatedArrow- |                                        |
| derived classes is very vague- |                                        |
| ley named, because the classes |                                        |
| are basically function objects.|                                        |
|                                |                                        |
| generate is a static method of | It is a very vague name for a method,  |
| ModifierButtonCombinedArrow    | but this is often the case with func-  |
| that constructs the correct    | tion objects.                          |
| subclass according to the      |                                        |
| button combination.            |                                        |
|                                |                                        |
| isArrow is a boolean function  | The method name clearly denotes a bool-|
| which checks the number of the | ean method.                            |
| key that was pressed. It is a  |                                        |
| little lower-level than most   |                                        |
| methods, but it eliminated the |                                        |
| need for a switch statement.   |                                        |
|                                |                                        |
| isDigit is also a boolean func-| Similarly named and implemented as a-  |
| tion.                          | bove.                                  |
|                                |                                        |
| isAltCombinatedReservedLetter  | The name again discloses that it is a  |
| checks whether alt is down and | boolean function. It makes it clear    |
| one of the reserved letters is | that it it checks if the alt key is    |
| also down. It is case-sensi-   | down and if a reserved letter is also  |
| tive, so it implicitly also    | pressed. It does not mention that it   |
| checks whether shift is down.  | makes a difference whether shift is    |
|                                | down, but that the different casings   |
|                                | of 'm' and 'M' hints at this.          |
|                                |                                        |
| getSideByArrow returns the side| The term side is not used in HTML or   |
| by the arrow down. It stores   | CSS to refer to left, right, top or    |
| the sides in an array and re-  | bottom. Instead position is used. This |
| turns the side according to the| has been an oversight, but the reader  |
| number Javascript assigns the  | of the code ought to make sense of it. |
| button.                        |                                        |
|                                |                                        |
| getSideOppositeArrow returns   | See above comment.                     |
| the side opposite the arrow    |                                        |
| pressed in a similar fashion.  |                                        |
|                                |                                        |
| getSignForMovementBySide gets  |                                        |
| the sign (actually negative or |                                        |
| positive 1, with which the     |                                        |
| movement can be multiplied, to |                                        |
| move the window according to   |                                        |
| how the screen is oriented).   |                                        |


## Laborationsreflektion
Most methods are **monadic**, but some of them, needing to work on the actual window, had to have the window as well as some event passed. The event object is not very **cohesive**, but any programmer writing in Javascript can wash his hands of it.

All methods follow the **law of Demeter**.
