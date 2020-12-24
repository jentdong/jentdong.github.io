---
layout: posts
title: "#JavaScriptmas"
subtitle: "Advent Calendar Time!"
date: 2020-12-15
tags: coding
---
I think the last time I did an advent calendar was ten years ago; my family isn't particularly one for the holiday season. This year, I tried one of a different kind, and learned new things and had fun with JavaScript whilst I was at it.  

I've dabbled with HTML & CSS in the past, tried some exercises and built a page or two (and now a website - update on that coming soon!), but I'd never really made a good attempt at JavaScript. I'd done some tutorials and had a pretty good idea of the syntax from learning other programming languages, but no real experience solving problems or making things.   

So when I saw this challenge, one exercise to solve for each day, I thought 'Well, why not?' I've been keeping up (mostly!) and today, I wanted to share my experiences.

We're on day 15 at the time of writing, but I'll keep this blog updated for the next ten days and the rest of the challenges.

Without further ado, the days.

### Day 1: Candies
A simple one to get us started! Given a number of children and a number of candies, calculate how many candies are eaten in total. I solved this by dividing the number of candies by the number of children, taking the floor, and then multiplying that back by the number of children. JavaScript doesn't have a floor/integer division operator, so Math.floor() is neccessary.

[See my solution here](https://scrimba.com/scrim/co1f44384934c1fdbbc718355).
### Day 2: Deposit Profit
[See my solution here](https://scrimba.com/scrim/co1b54ebfab29694cce1b4378).
### Day 3: Chunky Monkey
[See my solution here](https://scrimba.com/scrim/co5824198a5e18de25cf6abe8).
### Day 4: Century From Year
[See my solution here](https://scrimba.com/scrim/co52849c78dcc650998ab6c83).
### Day 5: Reverse a String
[See my solution here](https://scrimba.com/scrim/co5ba4a748dcca8380e2c6017).
### Day 6: Sort by Length
[See my solution here](https://scrimba.com/scrim/cod6e4d7282d98c64fc42eaec).
### Day 7: Count Vowel Consonant
[See my solution here](https://scrimba.com/scrim/cob6045b790defac072568f81)
### Day 8: The Rolling Dice

Ah, the rolling dice. This one was a 'I don't know what I'm really doing' game; I wasn't good at HTML DOM when starting it! I knew how to generate the numbers randomly from 1 to 6, but I got stuck on making the dots appear in the right places. I started off thinking about a blank dice face every time, adding the number of dots that were rolled, and then attempted to use flexbox to corral them into the right order - which works alright up to 3, and then with 4-6 you sort of need a column structure and I could not figure out how to implement that using Javascript.

I then looked at the solution, and pretty much followed that to the end... it was not my finest hour, but at least it worked, and I've learned valuable lessons (like how to add and remove classes using JS!) 

[See my (first, failed) solution here](https://scrimba.com/scrim/co88e44f6abb1cfbffd717fca).

[See my working solution here](https://scrimba.com/scrim/coc2c4209ad6c3dedd0b2475c)
### Day 9: Sum Odd Fibonnaci Numbers
[See my solution here](https://scrimba.com/scrim/coca94f228230312c10190da3).
### Day 10: Adjacent Elements Product
[See my solution here](https://scrimba.com/scrim/co575414ea3ef4c08edde6007).
### Day 11: Avoid Obstacles

Did I skip this one on December 11 because I was busy and then came back to it when the badge and certificate was announced? Perhaps...

At first, I did some really odd things... passing through the list with each multiple of the current checking number until the multiple was bigger than the biggest number in the array... so much more complicated than it needed to be. Then I searched and remembered the mod function... existed. Smooth sailing from there.

[See my solution here](https://scrimba.com/scrim/co0c442f99a7c551161ac93de).
### Day 12: Valid Time
[See my solution here](https://scrimba.com/scrim/co853442287506cd6ab5f6d5b).
### Day 13: Extract Each Kth
[See my solution here](https://scrimba.com/scrim/co87f4f93bd909ace1065c4c6).
### Day 14: Maximal Adjacent Difference
[See my solution here](https://scrimba.com/scrim/co1c944c8a185c32106681e45).
### Day 15: Carousel
Another building exercise! This time, a Christmas themed carousel. I'm actually quite proud of this one; my redemption from The Rolling Dice, as you will.

As suggested, I used the transformX property, changing with increments of 220px when buttons were clicked, as well as checking that the transforms weren't at the external limits of the carousel. This would break if you wanted to add another image, and I learned some great things from the #javascriptmas Discord channel about this. I also changed the opacity of the buttons at the limits, which would again break if you wanted to add another image.

More lessons from the Discord: streamline and avoid redundancy. Some of my code appears twice - two whole functions are essentially the same. This could have been avoided with the use of a single function using a helper.

I then added a CSS transition of 1s so it looks a lot more like a moving carousel. Despite not being the cleanest of code, I'm pretty happy with how it looks!

I tried making the button opacity equal to 0.5 on hover, but I think this gets overwritten with the opacity changes when the buttons are clicked. I might have another go into making that work.

[See my solution here](https://scrimba.com/scrim/co1b54ebfab29694cce1b4378).

### Day 16: Insert Dashes

This definitely could have been shorter; I've seen some solutions using regex and ternary operators and using the map function from others. But, when I'm still learning, I try to keep it simple to understand for myself. Occam's razor it first, then optimise.

[See my solution here](https://scrimba.com/scrim/co6204f48a07258857cd985fb) 

### Day 17: Different Symbols Naive

A rather simple and intuitive solution. Split the original string, create an empty array, check to see if each character in the first array is in the second, if not, push it to the second array, get length of second array. Case of letters would matter here.

[See my solution here](https://scrimba.com/scrim/co7904720879a0e78bbfe151d) 

### Day 18: Array Previous Less

I probably should not have looked at the Discord before trying to solve this one on my own, as my solution is heavily inspired from things there... otherwise I would have gone a lot longer with a more long winded solution. Well, now I know about the Math.min and (not used, but observed) more applications of the map function.

[See my solution here](https://scrimba.com/scrim/co6c94007a6804a981eab8761) 

### Day 19: Alphabet Subsequence

[See my solution here](https://scrimba.com/scrim/co99b40b09478ce945acac846) 

### Day 20: Domain Type

I learned how to use the map function correctly! I also learned how to lookup things similar to dictionaries in other langauges using a Javascript object.

[See my solution here](https://scrimba.com/scrim/co8a549cd840b152195a27e24)

### Day 21: Sum of Two

I did not take the hint on this one... I'm pretty sure it has something to do with a Map object, but I will look at the solution tomorrow and see where the Scrimba folks were going with it.

[See my solution here](https://scrimba.com/scrim/co4e3472f9e7724e554092eaa)

### Day 22: Extract Matrix Column

[See my solution here](https://scrimba.com/scrim/coccb43f19c1308d6471a4608)

### Day 23: Social Media Input

Another HTML DOM exercise! I think I've really started to get the hang of it now, adding Event Listeners, changing and removing classes (Rolling Dice, you did teach me something after all, haha!)... a far cry from the start of Javascriptmas! I did have some hiccups - I wrote the syntax to change the colour wrong, so it just kept throwing an Error: Unknown error and I had to W3Schools my way out of it. The other issue is that I started using the keydown event, which didn't register a backspace properly and wouldn't register a CTRL-V, for example. I fixed this with a peek from another solution, which used the 'input' event. Much better!

As of time of writing, the tool still has the default styling that we were provided. I'm hoping to go back and jazz up the UI a bit after posting this update.

[See my solution here](https://scrimba.com/scrim/co4874520bab782a424a86555)

### Day 24: Test Your Agility
Here we are! The final day. It's been an interesting ride, and this was was a nice one to close it out. I ran into a few snags, a lot of unknown errors because apparently I still can't remember that the equivalence operator is == and not just =, but I got there in there in the end and managed to make a working tester. The only issue now is that I can't actually hit the target number with my agility! 1 or 2 off, sure, but spot on? Hasn't happened yet. 

I'm off to have a few more tries. Thanks for reading!

[See my solution here](https://scrimba.com/scrim/co2da45fd81239c9b2841365f)


# Things I've learned from JavaScriptmas
* Habitual practice makes perfect - the reminders to do something every day  
* It's not possible to do a big project in a day, but solving a little exercise per day really gives my mental state a boost.
* Occam's Razor-ing is the best way to go. Keep it clean and simple, no more than you need to. (Looking at you, day 11.)
* When in doubt, Google is your best friend. Methods, selectors, styling elements, seeing how others did a specific thing that you're trying to implement... the world is out there!
* I've learned a bit more about making code flexible - making sure it still works when a use case changes, and avoiding redundancy.

# Summary
JavaScriptmas was a great way to practice JavaScript, with a mixture of short algorithmic problems to changing design elements. I've learnt a lot, and I'm excited to take my JavaScript skills further.

Final question: would I do it again next year? Absolutely.