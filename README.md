# CareerHack Format

## Who this Hackathon is for:

This hackathon is for juniors and new developers who have some experience with HTML, CSS, and JavaScript. If youre an intermediate or senior developer, this might not  be for you, although you are welcome to participate for a novel experience. We do not know of any other hackathon series that is quite like ours, and it provides great mentorship opportunities that can be rewarding for you.

## Why and how this works:

As a community, there are many gaps between academic coding and professional coding. There aren't enough tools or sources of information for junior developers that help you be successful at your first job, or even help you succeed in the hiring cycle and the job application process, the interview process, etc..

Here's the first big difference between academic coding and professional coding:
* In academic coding, you're writing code that will last you for a week, a month, or maybe at max a semester.
* In professional coding, the code you write could be with you for decades. You will also inherit other people's code, possibly written decades ago. And your code will be inherited by others after you. And your coworkers and you will be modifying each other's code over the course of your employments there.

So, in a professional setting, you write code for other people, not just for  the machine, not just for yourself, and not just for the grade. 

This is something that gets glossed over in academic settings. Collaboration is very rarely taught rigorously and in the right way in schools. 

This is CareerHack. Over here, we're trying to give you the tools you need to succeed in the early stages of your career as a software developer. Part of that is giving you knowledge of best practices and teaching you how to work with other software developers.

This is a solo hackathon for the most part. In the first half, you will be writing code so that others can read it. In the second half, you will be performing code reviews as a group. You will be receiving feedback from others (and possibly from me too) about the code you just wrote, and you will have the opportunity to provide feedback to others as well.


We have a prize on the line. It's a $25 Starbucks gift card, and bragging rights to boot. 

Scoring will be based on:
1. Code quality
2. Feedback provided during code review

Bonus points for:
1. Asking good questions on [r/MintbeanDevChat](https://www.reddit.com/r/MintbeanDevChat)
1. Answering questions on [r/MintbeanDevChat](https://www.reddit.com/r/MintbeanDevChat)

The exercise we will be presenting you will be intentionally simple so that you can focus on writing clean code in a fair amount of time, rather than rushing to make something that looks good on the screen but is a ball of wax in the repo. So, let's not make spaghetti -- we want to make lasagna, nice and layered code that's easy to reason about.

If you don't know what this means -- that's great! You will learn from the code review process. Just do your best, the real prize is the learning opportunity.

Everyone will be working on the exact same problem so that you can provide feedback to your peers on something you are already familiar with.

## Schedule & Channels:

Links:

* [Twitch](https://www.twitch.tv/mintbeancareerhack)
* [r/MintbeanHackathons](https://www.reddit.com/r/MintbeanHackathons)
* [r/MintbeanDevChat](https://www.reddit.com/r/MintbeanDevChat)
* [Github](https://github.com/MintbeanHackathons)

Saturday, March 14, 2020

| Start | End  | Description | Active Channels |
|-------|------|-------------| -- |
| 12:00pm  | 1:00pm | Registration, Intro, initial Q&A | Twitch, Reddit |
| 1:00pm  | 4:00pm | Coding (Solo, heads-down) | Twitch, Reddit, Github |
| 4:00pm  | 5:00pm | Code Review | Twitch, Reddit, Github |
| 5:00pm  | 5:15pm | Survey  | Twitch, Reddit |
| 5:15pm  | 6:00pm | Final QA | Twitch, Reddit |
| Sunday  | Sunday | Winner announced via email | Email, Reddit |

## Your responsibilities as a participant

1. You must be signed into Twitch at all times
1. You MUST email us your Github handle, your Twitch handle, and (optional, for bonus points) your Reddit handle. You can send this stuff to Jenn, whose email you should already have.
1. You must let us know, on Twitch, when you've started.
1. You must let us know, on Twitch, when you've finished coding.
1. You must let us know, on Twitch, when you've finished code review.

# Today's Objective: Hack the Résumé

Why are developers hand-writing résumés using word processors when they can use the power of programming to generate them automatically from raw data? We as developers should be using the tools at our disposal to make our lives easier.

## Summary of requirements

You will be using HTML, CSS and JavaScript to create a frontend-only project that will convert JSON into a standard résumé.

Deployment your project to a live server is preferred. An alternative to actual deployment is a video capture OR several screenshots of functionality stored inside a separate `/screencap` folder in your repo, so that people have some kind of reference point while reviewing your code.

This Hackathon is inspired by [JSON Resume](https://jsonresume.org).

## Restrictions

There is only one restriction: you may not use any library that converts structured data into a résumé. So, you cannot use:
1. JSON Résumé
1. FluentCV

## Roadmap & Technical Choices

`Note: Please read the roadmap entirely`

In the real world, building software is largely a matter of expanding on top of what's already working. A common pattern for projects of any size is to start by building the simplest possible implementation first, then iterating as you add more and more features on top of what already exists.

We will be providing you with a roadmap that involves multiple stages, beginning with the simplest implementation and ending with a reasonably complex implementation. 

### Stage 1 - Shortest path to success

We'll start immediately with a project that works and is useful.

At the end of Stage 1, you should have a project where:

1. Your résumé information is stored in JSON
1. You're using JavaScript and HTML to turn your JSON into a plain HTML document.
1. You're using [Paper CSS](https://github.com/cognitom/paper-css) to make sure you can print your résumé to PDF or to paper.

One good way of converting JSON to a CV in the frontend is by using a [templating library](https://colorlib.com/wp/top-templating-engines-for-javascript/). We recommend [Handlebars](https://handlebarsjs.com/installation/#cdns), but you can use anything.

As per the above restrictions, please don't use React, Angular or Vue.

#### Tips for success:
1. A good example of a résumé in JSON format is [this sample résumé in JSON Resume format](https://github.com/jsonresume/resume-schema/blob/v1.0.0/schema.json).
1. You can see Paper CSS examples [here](https://github.com/cognitom/paper-css/tree/master/examples)
1. It is best, from a coding standards perspective, to store your JSON object in a separate file.
1. Remember that your project will be scored based on (i) code quality and (ii) your participation in code reviews.
1. We do not recommend using React, Vue, Angular, or other single page application frameworks because not everyone will have used them.

### Stage 2 - Layout switching

Once you have a simple project going, we will introduce a bit of complexity.

At the end of Stage 2, your project must have the ability to change your résumé layout from inside the browser using a `<select>` tag. 

You must have at least 2 different layouts. Both layouts must read from the exact same JSON source, so if you change your JSON object, then your résumé changes as well.

The choice of layout is completely up to you, but each layout must be radically different from the others. [You could use the 4 basic résumé types listed here](https://kimmel.com/candidates/four-basic-resume-types.html) as a starting point.

Tips for success:
1. [Here is a simple example](http://jsfiddle.net/mplungjan/eqffs/) of the select tag in action.
1. If you're using a templating library, you can define each layout in a separate template file.
1. Keep your code clean and well-structured. Think about how to prevent repetition in your codebase.

### Stage 3 - Freeform

This is your chance to shine. If you have finished Stage 2 and you have extra time, extend your project with something cool. It could be anything, but make sure you stick to writing clean code. 

Some stuff you could build:

1. More résumé layouts
1. Visualizations, charts and graphs based on your data.
1. CSS styling
1. CSS or JS animations
1. API integrations
1. Get creative!

## Bonus reading: Why a standardized data format for résumés is important

Having standardized data formats lets people collaborate on building a better ecosystem of tools. Here are a few examples where this has already happened:

1. The `*.mp3` format allows music creators, streaming companies, software companies, open source tools, and listeners focus on making & sharing great music.
1. The `*.csv` format lets all kinds of software systems talk to each other using imports/exports, while letting human beings retain the ability to clean and format large datasets using tools that understand `*.csv` files.
1. Image formats like `*.png`, `*.jpg`, `*.gif` 
1. The `http` protocol

A standardized résumé format, if one arises, enables many cool things:
* Candidates could automatically apply for 1000's of jobs in bulk.
* Candidates could simple "install" pre-made themes on top of their resume data.
* Candidates would experience less bias in the screening process, because résumé design and writing skills become less important for success.
* Candidates would become much more discoverable, because the structured data allows more efficient sorting/filtering
* Data scientists could run deeper analyses of the job market on well-structured data.
* The community could build advanced tools on top of the résumé format that could enable functionality that we haven't yet thought of.

And there are probably many, many more advantages that aren't listed here.

# Code Review

This repository will be updated with instructions for code review at 4pm.