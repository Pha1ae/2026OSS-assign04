## Key Learning

This week, I learned three main things:

1. **Creating forms with HTML:** I learned how to use different form elements to collect information and add labels to explain each field.
2. **Styling forms with CSS:** I practiced changing colors, borders, spacing, and sizes, and adding focus and hover effects.
3. **Adding interaction with JavaScript:** I learned how to handle form submission, check user input, and display feedback.

## Form Elements

| Element | Purpose |
|---|---|
| `input type="text"` | Enter a name, username, or address |
| `input type="email"` | Enter an email address and check its basic format |
| `input type="radio"` | Select one payment method from a group |
| `input type="checkbox"` | Confirm whether the shipping and billing addresses are the same |
| `input type="date"` | Choose a preferred delivery date |
| `select` | Choose a country from a dropdown list |
| `textarea` | Enter order notes on multiple lines |
| `fieldset` and `legend` | Group related fields and provide a group title |
| `label` | Describe a field and connect the description to its control |
| `button` | Submit the form |

## HTML vs CSS

`form1.html` focuses on the structure and content of the page. It uses the browser’s default styles.

`form1_css.html` adds CSS to make the same form clearer and more attractive. The changes include:

- Text and background colors.
- Borders and rounded corners.
- Spacing using `padding` and `margin`.
- Consistent widths for form controls.
- `:focus` and `:hover` effects.

This comparison helped me understand that **HTML defines the structure, while CSS controls the appearance**.

## Validation & JS

I applied these validation rules:

- `required` for the name, username, email, address, country, and date.
- `type="email"` to check the basic email format.
- `minlength="3"` to require at least three characters in the username.

The JavaScript follows this process:

1. Use `addEventListener()` to listen for the form’s `submit` event.
2. Use `event.preventDefault()` to stop the default submission.
3. Use `checkValidity()` to check the input.
4. If an input is invalid, display its validation message and call `focus()` on the first invalid field.
5. Use `return` to stop the function before the success message.
6. If all inputs are valid, use `alert()` to display a registration completion message.

The third version also uses `novalidate` so that invalid submissions can reach the JavaScript handler. Validation is then performed through `checkValidity()`.

## Problem & Solution

I found JavaScript syntax difficult at first, especially variables, functions, conditions, and event listeners. I also had trouble getting JavaScript to work correctly with the webpage.

To solve these problems, I asked AI for help. I learned to check the script file path, make sure element IDs matched the JavaScript selectors, and check whether event listeners were connected correctly. Reading the explanations and trying different inputs helped me understand how HTML and JavaScript work together.

## Reflection

This practice helped me understand how HTML, CSS, and JavaScript work together to create interaction. HTML provides the form controls, CSS shows their visual states, and JavaScript responds to user actions.

I am beginning to understand how forms and JavaScript make a webpage interactive, but I still need more practice writing the code independently. Next, I want to create simple input checks and feedback messages myself, so I can understand the code instead of only relying on AI-generated answers.