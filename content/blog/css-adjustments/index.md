---
title: CSS adjustments
date: 2021-07-26
author: kasia-zadurska
summary: During this dev day I read a few articles related to design and CSS and added some visual changes to the blog itself. Here's what I learnt.
tags: [devday, a11y, darkmode]
---

## What is dev day?
This month we started a new kind of initiative in my team at work. We are to devote one day per sprint for our own tech development. The reasoning behind it is that in the multitude of numerous tasks there is often not enough space to learn about a new technology. I must admit it has been hard for me to allocate some extra time out of the work week to learn something new. There's always a task to be done!

I can only hope to add new content each sprint to describe my findings, but let's be honest - so far I add one blog post per year 🙈

## Using accessible fonts

Recently I read this [insightful article](https://uxdesign.cc/testing-fonts-for-accessibility-817f47011078) by Colin Shanley about choosing fonts. He points out three main font design flaws that could make it difficult for users to differentiate between letters and thus make it harder to read.

* Characters that look very similar: I, l, 1 (i.e., uppercase i, lowercase l, and the number 1).
* Characters that are mirror images of each other, e.g. letter pairs d b and q p.
* Characters that have similar shapes, e.g. CO eoc (uppercase C and O, lowercase e, o and c).

I wrote down these examples here so that I could check for myself that my chosen font (Merriweather) is in fact easy to read.

## Dark mode

Today I decided to learn how to handle dark mode and light mode selected by the user through system or browser preferences.

First, I added `color-scheme` to indicate to the browser that this page can be rendered in both light and dark mode.

```css
  :root {
    color-scheme: light dark;
  }
```

In order to pass custom dark mode and light mode styling I used `prefers-color-scheme` media feature. You can read more in [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).
```css
  @media (prefers-color-scheme: dark) {
    body {
      color: ${textColorDark};
      background-color: ${backgroundColorDark};
    }

    a {
      color: ${mainColorDark};
    }
  }

  @media (prefers-color-scheme: light) {
    body {
      color: ${textColorLight};
      background-color: ${backgroundColorLight};
    }

    a {
      color: ${mainColorLight};
    }
  }
```

## Highlight code snippets in Gatsby

Code snippets on this blog were already preformatted with `gatsby-remark-prismjs`, but they lacked some kind of visual appeal and were hard to read. I added new styles based on [PrismJS](https://prismjs.com/) stylesheets and made sure it all looked pretty and readable in dark mode as well.

## YOLO driven deployment

Testing on production is sometimes the best kind of testing, isn't it? I deployed my blog to Github Pages, went to the correct URL and it looked perfect! Then I clicked on the newest article to proofread it, and... it did not work! The main view of the blog was placed correctly under https://kzadurska.github.io/expecto-frontendum/, but all the subpages lacked the `expecto-frontendum` part of the URL, e.g. https://kzadurska.github.io/css-adjustments/. A few google searches later I found the solution in the Gatsby documentation, [adding a path prefix](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/). Phew!


