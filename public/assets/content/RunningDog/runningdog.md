---
title: Running Dog Animation Critique
author: Mitsuki Youko
date_created: 2025-04-03
tag: misc
blurb: Running Dog Anim Critique for u/remyisacutie
---

# (WIP)

### Overview

This blogpost is a bit different than my others as I will be breaking down my animation and composting process for [this reddit post](https://www.reddit.com/r/animation/comments/1jqdx7c/ik_this_is_wrong_but_how_do_i_fix_it/).

Here is u/remyisacutie's original animation:

![runningdog](assets/content/RunningDog/img/runningdog.mp4)

Here are my initial thoughts on it:

1. Dog's eyes are too static, introduce some blink
2. belly flops around a bit toooo much.. its like his ribs are moving - seems slightly unnatural.. if he just has a fat belly, the flop should be lower. (imo)
3. legs are good but not quite on the ground
4. no shadow
5. cloud moving in different directions.. i guess that kinda works but if there's wind thats impacting the clouds that much, the trees would be affected a little too..
6. ears, tail, and legs are actually quite good!
7. tongue looks like its being swung forward.. doesn't quite match the running direction i feel...
8. Tail is decent but it gets a little bit longer near the end.. (i struggle with that sometimes when i animate hair XD)
9. Weight looks like it is on all 4 legs at the same time... i feel that when landing, weight should be on the front legs... this can probs be fixed simply by transforming and tilting the whole dog snout-side down just a tiny bit...
10. neck wrinkles are good but slightly off on timing it feels like..
11. looks like the path/ground is going z-axis yet the dog is running x axis which looks a bit.. strange i guess? but that might just be the placement cuz its not moving.. if the floor is moving, it would sell the thing a bit more...
12. imo the reason why it doesn't loop well is cus you probs need one more frame for some of the poses like the jump between the last and first frame is too big.
13. lighting.. the lighting changes too quickly on the dog like its running past a spotlight.. if its sunlight because its so far away, it wouldn't move on the dog that fast.
14. camera movement (maybe when landing, camera should follow the land a little - not TOO drastically but just a little movement helps)
15. when looping always think back to HOW it loops. do sketches first to see if it loops properly.. (before coloring or linearting) one trick is on the second half of the loop, use the frames in the first half in reversed order, then change some stuff in each so it doesn't just look like a copy

---

### Small Project Break Down..

#### Animation Layers:
1. dog
2. run cycle
3. shadow
4. foreground (ground and trees)
5. make the ground long so that it you can move it x-axis. 
6. background (sky and clouds)

#### My Workflow for this critique demo:
1. sketch the dog running
2. sketch the dog's shadow
3. sketch the long bg on a different document. if animating, then composite it later. 
4. do one ver composited and one not composited (for the bg)...
5. sketch the clouds moving

#### I'll be making Two versions:
1. Dog running with animated bg but without any composting
2. Dog running with animated bg with compositing

#### Composting tips:
1. Export EACH animation layer separately so as to be able to add effects to them.. by layers I don't mean the dog's legs being on a different layer than its eyes... I mean Dog and its sublayers get exported as 1 png animation, bg gets exported etc.. Anything you need to composite separately gets exported as its own png gif or image sequence.

---

### DEMO

So First thing's first.. gotta lay down the rough sketch of the dog model since its so long since I've drawn a dog.. (Had to rewatch the animal anatomy part of Marc Brunet's Digital Art School course that I bought a few years ago XD)

![runningdogmodel](assets/content/RunningDog/img/Runningdogmodel.jpg)

I used the straight line tool in CSP to make the line for the floor.

This is to make sure that when animating, the dog's paws won't go too high above or too low below the "floor". ideally it should land right on the line or as close to it as possible.

I sketched the dog model just for reference and so I can make sure the animation stays on character.

Now, so far drew a box around the dog so i can roughly tell where things are going to be placed...

![dog-rectangle](assets/content/RunningDog/img/dog-rectangle.jpg)

And then I animated the box to get the movement down..

![blockout.gif](assets/content/RunningDog/img/blockout.gif)

![roughplacement](assets/content/RunningDog/img/roughplacement.jpg)

As you can see, the frames are evenly spread out.. not very dynamic is it..?

Don't worry, I will adjust the timing now after the rough movement has been placed..

Here, I tend to play around - extend some frames, shorten others.. some people animate on 2's, 3's, 4's... that's way too much math for me loooll

I animate based on feel.. so if you want to animate industry level stuff you might have to study how to animate on 2's etc. or whatever the industry uses :P

I'm just a hobbyist and if it looks good to me, well that's really all I need XD

So after some re-timing, the frames now look like this:

![frames_updated](assets/content/RunningDog/img/frames_updated.jpg)

I also slightly adjusted the position and rotation of a few of the rectangles for a smoother flow..

![blockout_framed](assets/content/RunningDog/img/blockout_framed.gif)

So the next phase of my rough sketch is going to be to move the bg around..

[Watch this excellent video on how to use Keyframes for Camera Movement in CSP](https://www.youtube.com/watch?v=8F9eJjDkvtE)

If you don't use CSP, you can try to see if the software you use supports camera movements.

Otherwise, if you want to do your camera movements during compositing instead, make sure you make the canvas size like roughly 0.5-1 inches bigger so that when compositing, your bg won't get awkwardly cut off when you reach the edge of the canvas.

Here, I have the background animation folders within a larger folder and applied the keyframes to said folder.

The rectangle "dog" was outside the "camera" folder so as to not be affected by the camera keyframes.

![camera_keyframe](assets/content/RunningDog/img/camerakeyframe.jpg)

![camera_keyframe](assets/content/RunningDog/img/camera-keyframe.gif)

This is suuuuuper rough.. Let's make this better and start sketching the dog :D



<!-- 

npm run server
npm run build
git add .
git commit -m "update note"
git push -u origin
npm run deploy 

-->
