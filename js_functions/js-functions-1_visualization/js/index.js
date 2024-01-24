const info = [
  {
    id: "functionKeyword",
    infoTitle: "'function' keyword",
    infoDesc: `The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function" target="_blank" >function</a> declaration creates a binding of a new function to a given name.<br /><br /> It works in a way similar to declaring a variable with either const or let. You need a declaration, a name, and a value.<br /><br /> The function keyword, the function name and function body with its function statements create a function declaration.`,
  },

  {
    id: "nameAndParameters",
    infoTitle: "Function Name and (Parameters)",
    infoDesc: `The function name binds the function to an identifier that can later be referenced when calling the function. There are anonymous functions, but these functions don't persist beyond their initiation. A <a href="https://developer.mozilla.org/en-US/docs/Glossary/Parameter" target="_blank">parameter</a> is a named variable passed into a function. Parameter variables are used to import arguments into functions.`,
  },

  {
    id: "functionBody",
    infoTitle: "Function Body",
    infoDesc: `The function body is wrapped by the opening and closing bracket defining the function scope. Just as the term itself describes, every function has a purpose: it serves to add functionality. The function body contains statements that describe what the function needs to do, such as add two numbers in the case of our example.`,
  },
  {
    id: "openingBracket",
    infoTitle: "Opening Curly Bracket",
    infoDesc: `The function body is wrapped by the opening and closing bracket defining the function scope. See  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block" target="_blank">block statetement</a>.`,
  },
  {
    id: "closingBracket",
    infoTitle: "Closing Curly Bracket",
    infoDesc: `The function body is wrapped by the opening and closing bracket defining the function scope. See  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block" target="_blank">block statetement</a>.`,
  },
];

const infoBox = document.querySelector('[data-js="infoBox"]');
const infoTitle = document.querySelector('[data-js="infoTitle"]');
const infoDesc = document.querySelector('[data-js="infoDesc"]');

const functionKeyword = document.querySelector('[data-js="functionKeyword"]');
const functionNameAndParameters = document.querySelector(
  '[data-js="nameAndParameters"]'
);
const openingBracket = document.querySelector('[data-js="openingBracket"]');
const closingBracket = document.querySelector('[data-js="closingBracket"]');
const functionBody = document.querySelector('[data-js="functionBody"]');

const functionElements = [
  functionKeyword,
  functionNameAndParameters,
  openingBracket,
  closingBracket,
  functionBody,
];

functionElements.forEach((element) => {
  element.addEventListener("click", () => {
    const attribute = element.getAttribute("data-js");
    const infoObject = info.find((infoElement) => infoElement.id === attribute);

    infoTitle.textContent = infoObject.infoTitle;
    infoDesc.innerHTML = infoObject.infoDesc;
  });
});
