# dynamic_form

This task is to demonstrate:
- reading JSON data from embedded file
- creating dynamic and reusable widgets to build UI

This is a new ReactJS project with some minor changes. A JSON file has been provided at with project at path `src` containing a form configuration. 

## JSON Form Structure

There are two sections in the JSON with a unique identifier. 

In each section there are some _questions_. Each question has a unique id and there is a _type\_id_, which defines what type of input it is. 

| **type_id** | **field type** | **comments**                                                                                                                 |
|-------------|----------------|------------------------------------------------------------------------------------------------------------------------------|
| 31          | SSN            | This will be a text field, but only 9 digit SSN number are allowed.                                                          |
| 15          | Date           | Date picker should appear for this input type                                                                                |
| 13          | Country        | A dropdown (search list) field shall appear with list of countries. You can use 10 countries names for list.                 |
| 8           | Select List    | A fixed option select list. Use `options` prop of this object to render list items.                                          |
| 3           | File           | File upload / attach input.                                                                                                  |
| 6           | Textfield      | Generic text field (to input name, address etc)                                                                              |
| 21          | Checkbox       | A checkbox input.                                                                                                            |
| 5           | Radio input    | A radio input. One or more `options` shall be rendered based on the prop of this object. Only one can be selected at a time. |
| 2           | Email Input    | A text field, but accepts email addresses (@ character allowed)                                                              |

### Question object details:

* `translations` -> `data` contains the label for form element. 
* `is_optional` defines whether question is required or optional. If *1*, then question is not required to answer.
* `rule_set` contains an array of `rules` which are used for validations. 
* `parent_questions` array if not blank, then defines the dependencies of other questions. See section **conditional elements** for more details on this.

### Conditional Elements

Question may have a conditional clause to show based on parent question's answer. For example:

```
{
    "id": 17055,
    "parent_question_id": 15502,
    "parent_option_id": 17245,
    "dependent_question_id": 15506
}
```

This defines that if question with id `15502` was answered with selection (with option's) id is `17245`, only then this question has to be rendered. 

Here question id `15502` is asking if user want to add neighbour contact information. This is a radio input, with two choices:
- `17245` = Yes
- `17246` = No.

Now if user has selected `17246` for that question, only then we need to show question `15506` (asking first name of neighbour).

## Expectations

### 1. 
Candidate should be able to read JSON data in ReactJS, and create re-usable form widgets to handle all 9 types. If we make any change to JSON (adding new input field for example), and run code it shall auto render the newly added UI field.
### 2.
Individual sections of the form shall be rendered as separate pages. So if form configuration has 2 sections, with id "basic-information", "contact-information" URL path shall be like /form/basic-information & /form/contact-information. react-router can be used for navigation/routing logic.
### 3.
Candidate is free to use any state management library of their choice, but filled form data shall be retained at application level. Once first section form is filed and next section is shown, if user decide to go "back" using in-page feature or browser, they should be able to see previously entered details. 
### 4.
Using any validator library, there shall be proper validations in place. Validation rules are defined for each question / form field in configuration. Code shall be dynamically reading the rules and applying the required pattern checks on demand. Candidate is free to use any validation library such as https://validatejs.org
