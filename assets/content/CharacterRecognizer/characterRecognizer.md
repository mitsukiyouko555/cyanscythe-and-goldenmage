---
title: Character Recognizer - A CNN Model
author: Mitsuki Youko
date_created: 2025-04-19
tag: projects
blurb: The process of training a CNN (in gradual steps) to recognize my 5 OCs.
---

## Overview

As I'm looking to build my portfolio as a "Jack of All Trades", AI was a topic that was recommended to me.

After some research, it seemed that a good beginner project would be the [Cats Vs Dogs Project](https://www.kaggle.com/c/dogs-vs-cats), where you train a model from a clean slate where it knows nothing about anything, and you teach it to differentiate between Cats and Dogs.

The idea is that you have your cat images in a folder labeled Cats and your dog images in a folder labeled Dogs and you create a Convolutional Neural Network (CNN) composed of different layers so that it keeps looping through your images to learn the characteristics of a cat and dog, etc.

Since I am very passionate about my [personal project](https://mitsukiyouko555.wixsite.com/portfolio/personal-project), I always take any chance I could to involve my characters in whatever non-personal project thing I'm working on - so I figured, why not create a CNN that is able to differentiate between my 5 Main Characters?

---

## Issues: 

### 1. Small Dataset

The Cats vs Dogs dataset is HUGE at over 25,000 Images to train on. I draw my ocs pretty inconsistently lol... I mainly draw Maxus and Hydra and don't draw the others as much.

As such, I will have to draw an even amount of art per character.

But to reduce the time that it takes, I'm taking a ground up approach.

First, I will train the CNN on the images of ONLY my characters' eyes - no background/transparent background.

Then I will validate it by drawing a few more "eyes only" drawings and see if the model can correctly predict which set of eyes belong to which character.

Then I will do the same with just the headshots of my characters, and then separately, do the same for full body shots.

As a final step, I will include multi-character images and have the model predict which character(s) are in the image.


### 2. Image Size

When training neural networks, it is strongly advised that the images be in the same size.

Therefore, for the headshots, the images will be wider than they are tall but once I've decided on a fixed size, I will draw all the eyes-only pics in that one size only.

The same idea applies for the headshots which will be square.

The Full Body Images will be taller than they are wide, but of course, at the same consistent image size.

The Multi-Lable ones (the ones where the will be one or more characters in an image) will be a standard HD size (1920x1080) and will be shrunk down in correct proportions, if needed, when training the data.

### 3. Image Variety

Its important for there to be variety in terms of the background, otherwise the model might associate certain backgrounds with certain characters.

So I will need to build a dataset that has characters with no background, characters with a solid color or gradient/simple background, and characters with complex backgrounds.

I also had the idea of animating some of these images - specifically for the eyes and headshots and MAYBE for a few of the fullbody ones as well and exporting it as png sequence so that it can have more data without me doing too much extra work.

---

### Timeline

This project will take at LEAST a few months if not more - but mainly because I need to create my dataset. If I were grabbing images off the internet, it would be way faster.. But because I have what eventually amounts to at least a hundred images to draw, (and I draw slow), it would take a while.

With Gemini's help and guidance, I suspect the actual coding of it is not that hard, but going through and typing it out line by line, tweaking it and really understanding what the code does and experimenting with it is going to be fun!

I anticipate coming out of this project with a bunch of art created, as well as a cool CNN Model that can tell my characters apart.

---

### Research

### Issues:
1. imports not importing (specifically keras.) 
    - Fix: [https://stackoverflow.com/questions/78998877/import-tensorflow-keras-callbacks-import-earlystopping-modelcheckpoint-could-n](https://stackoverflow.com/questions/78998877/import-tensorflow-keras-callbacks-import-earlystopping-modelcheckpoint-could-n)
    - Calling Keras via from `keras.src.callbacks import xyz` instead of keras.callbacks is what fixed it.

#### Phase 1 - Eyes Only


#### Phase 2 - Headshot Only



#### Phase 3 - Full Body Only



#### Phase 4 - Multi-Label (Multiple Characters)


### Outcome and Results