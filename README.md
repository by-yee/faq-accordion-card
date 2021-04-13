# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![Project Screenshot](./images/desktop-screenshot.jpg)

### Links

- Solution URL: [https://github.com/by-yee/faq-accordion-card](https://github.com/by-yee/faq-accordion-card)
- Live Site URL: [https://by-yee.github.io/faq-accordion-card/](https://by-yee.github.io/faq-accordion-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- Mobile-first workflow

### What I learned

In this project, I've changed a few methods to design the images, icon arrow and also the FAQ answers, so that it looks more closely to the actual design.

Among all, I learned the most when designing the FAQ answer paragraph.

At first, I hide/show the FAQ answer by using ```display: none;``` & ```display: block;``` but when comes to CSS transition it does not have effect at all. In order to make the hide/show answer to have transition, I need to change the code as below:

```css
.card__ans {
  height: 0;
  opacity: 0;
  transition: all .4s ease-in-out;
}

.card__ans--action {
  height: 35px;
  opacity: 1;
}
```
Other than ```opacity```, ```visibility: hidden;``` & ```visibility: visible;``` able to achieve the transition result too.

## Author

- Frontend Mentor - [@by-yee](https://www.frontendmentor.io/profile/by-yee)
