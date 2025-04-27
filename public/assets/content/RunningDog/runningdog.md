---
title: Running Dog Animation Critique
author: Mitsuki Youko
date_created: 2025-04-03
tag: misc
blurb: Running Dog Anim Critique for Redditor u/remyisacutie.
---

# (WIP)

### Overview

This blogpost is a bit different than my others as I will be breaking down my animation and composting process for [this reddit post](https://www.reddit.com/r/animation/comments/1jqdx7c/ik_this_is_wrong_but_how_do_i_fix_it/) by u/remyisacutie.

Here is u/remyisacutie's original animation:

![runningdog](assets/content/RunningDog/img/runningdog.mp4)

Here are my initial thoughts on it:

1. Dog's eyes are too static, introduce some blink
2. Belly flops around a bit toooo much.. its like his ribs are moving - seems slightly unnatural.. if he just has a fat belly, the flop should be lower. (imo)
3. Legs are good but not quite on the ground
4. No shadow
5. Cloud moving in different directions.. i guess that kinda works but if there's wind thats impacting the clouds that much, the trees would be affected a little too..
6. Ears, tail, and legs are actually quite good!
7. Tongue looks like its being swung forward.. doesn't quite match the running direction i feel...
8. Tail is decent but it gets a little bit longer near the end.. (I struggle with that sometimes when I animate hair XD)
9. Weight looks like it is on all 4 legs at the same time... I feel that when landing, weight should be on the front legs... this can probs be fixed simply by transforming and tilting the whole dog snout-side down just a tiny bit...
10. Neck wrinkles are good but slightly off on timing it feels like..
11. Looks like the path/ground is going z-axis yet the dog is running x axis which looks a bit.. strange i guess? but that might just be the placement cuz its not moving.. if the floor is moving, it would sell the thing a bit more...
12. Imo the reason why it doesn't loop well is cus you probs need one more frame for some of the poses like the jump between the last and first frame is too big.
13. Lighting.. The lighting changes too quickly on the dog like its running past a spotlight.. if its sunlight because its so far away, it wouldn't move on the dog that fast.
14. Camera movement (maybe when landing, camera should follow the land a little - not TOO drastically but just a little movement helps)
15. When looping always think back to HOW it loops. Do sketches first to see if it loops properly.. (before coloring or linearting). One trick is on the second half of the loop, use the frames in the first half in reversed order, then change some stuff in each so it doesn't just look like a copy

---

### Small Project Break Down..

#### Animation Layers:
1. Dog
2. Shadow
3. Foreground (ground and trees)
    1. Make the ground long so that it you can move it x-axis. 
4. Background (clouds)
5. Sky

#### My Workflow for this critique demo:
1. Sketch the dog running
2. Sketch the dog's shadow
3. Sketch the long bg on a different document. if animating, then composite it later. 
4. Lineart the bg
5. Color the bg
6. Lineart the dog
7. Color the dog
8. Color the Shadow
9. Composite (Either baked in or after export.)

#### I'll be making Two versions:
1. Dog running with animated bg (BAKED IN Compositing)
2. Dog running with animated bg (Compositing after Exporting)

#### Composting tips:
1. Export EACH animation layer separately so as to be able to add effects to them.. by layers I don't mean the dog's legs being on a different layer than its eyes... I mean Dog and its sublayers get exported as 1 png animation, bg gets exported as its own animation etc.. Anything you need to composite separately gets exported as its own png gif or image sequence.

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

Background camera keyframed to ever-so-slightly move up and down upon impact.

![camera_keyframe](assets/content/RunningDog/img/camerakeyframe.jpg)

![camera_keyframe_gif](assets/content/RunningDog/img/camera-keyframe.gif)

This is suuuuuper rough (bg timing is not very good either and should be fixed..).. Let's make this better and start sketching the dog :D

![doglayer](assets/content/RunningDog/img/doglayer.jpg)

Imma start with the head..

![dogheadske](assets/content/RunningDog/img/dogheadske.gif)

When the dog lands, it'll crouch a bit so the head will be lower than it is now on those frames but for now, lets get the general movement down before worrying about that.

Adding the neck guidelines / sketch:

![dogheadneck](assets/content/RunningDog/img/dogheadneck.gif)

Adding the body (mainly rib placement atm)

![dogheadneckbod](assets/content/RunningDog/img/dogheadneckbod.gif)

Adding the tail.. this one was a bit complicated.. had to fiddle with it for a bit..

![dogtail](assets/content/RunningDog/img/dogtail.gif)

OMG.. dogs are hard to draw lmaooo (not rly I just need more practice to get good at it XD)

Looked up a dog running gif on the internet for some reference..

Ok.. I think Imma just stylize the legs instead of making them look realistic.. maybe gonna give him "hoof-like" legs instead cuz I'm too lazy to learn how to draw a dog just for a critique XD

![doglegz](assets/content/RunningDog/img/doglegz.gif)

Aight, added the ears and snout..

![runningdogskebgless](assets/content/RunningDog/img/runningdogskebgless.gif)


Checking how it looks with the bg:

![runningdogfullske](assets/content/RunningDog/img/runningdogfullske.gif)

Pretty good so far..

I decided that it would be easier to just draw the dog lineart on a different animation layer than the sketch just in case I add more in betweens so made another layer for lineart.

![dognewlayer](assets/content/RunningDog/img/dognewlayer.jpg)

I will most likely color in the same animation layer (not same layer as the lineart but think of EACH frame in the animation layer as a folder and within that folder there are many more layers like lineart, color, etc.)

Switching gears, I decided to work on the background and created a new 1920 x 1080 CSP file. I then changed the canvas size so as to make it super long horizontally so as to make a revolving background. remember that the rightmost and leftmost section of your bg would need to be "connectable" with each other to sell that continuous effect when looping.

I also expanded the canvas slightly vertically so as to maintain enough space for the camera's slight vertical pan when the dog jumps.

![bgdoc](assets/content/RunningDog/img/bgdoc.jpg)

I started with the clouds. 

![cloudline](assets/content/RunningDog/img/cloudline.jpg)

I don't think there is wind strong enough to really make the clouds move drastically in any direction without it blowing the dog away (Clouds usually move rather slowly.. so unless the camera is focused on the clouds, you probs won't see it move much if at all.) so I'll keep the clouds static and have it wrap around in a revolving loop later.

![cloudske](assets/content/RunningDog/img/cloudske.jpg)

What I mean by revolve is if you take the right and leftmost cloud and you put them together, they should line up perfectly...

![cloudwrap](assets/content/RunningDog/img/cloudwrap.jpg)

This is so that when you pan, you start with lining up the right side of this image to the right edge of the dog anim, and then you pan it by dragging it to the right slowly and smoothly. By the time it reaches the right side, there is no more art to continue it, you wrap it around and keyframe the image from its starting position coming in from the left..

It'll probably make more sense to see it in action... (Keep in mind this is still quite rough... but it gets the point across..)

Here's the vid on youtube as the raw vid is too big for me to host on github unfortunately: [https://youtu.be/Z0TCPKRYMY8](https://youtu.be/Z0TCPKRYMY8).

Moving on, I added some "mountains" in the bg as well as some bushes.

(Ignore the bad bush/nature art XD I'm just half assing the bg rn since this critique is mainly about making the bg feel like it is moving properly and making the whole thing feel like its moving cohesively.)

I then added some (badly drawn) grass that is supposed to go in front of the dog and the bushes. I'll animate the grass for maybe like 3-4 frames for a quick gentle sway, color it, then copy and paste it across the screen.

![grass](assets/content/RunningDog/img/grass.jpg)

The dog's animation layer will go between the grass and the bushes.

So the grass will cover the dog when they overlap and the dog will cover the bushes when they overlap.

Additionally, this is the order of animation layers from moving the fastest to slowest in terms of panning:

1. Grass (Fast when compared to the others but not SUPER fast either..)
2. Dog (about the same speed as the grass)
3. Ground/Bushes (slower than the dog)
4. Mountains (slower than the bushes)
5. Clouds (the slowest)

Here is the badly animated grass (Ok enough for the critique tutorial.. def not up to par for my personal work tho lol)

![badgrassanim](assets/content/RunningDog/img/badgrassanim.gif)

Here it is colored:

![grasscolored](assets/content/RunningDog/img/grasscolored.gif)

Here it is with the grass strewn across the page.

![grassfullanim](assets/content/RunningDog/img/grassfullanim.gif)

And because we are only seeing parts of it at a time, it won't seem too repetitive.. otherwise ideally one should draw different strands of grass throughout at least half of it or draw a few chunks of grass and mix up the order for variety - but even like this it seems alright.. (if you don't look too closely)

I had the grass in a different file so I straight up copied the grass animation folder into the running dog csp file.

I have the already animated grass layer above the dog running layer and keygramed the grass layer like so:

![dogAndGrassKeyframe](assets/content/RunningDog/img/dogAndGrassKeyframe.jpg)

And now it looks like this:

![dogAndGrass](assets/content/RunningDog/img/dogAndGrass.gif)

This is rough.. but will probs refine it later.

Colored and "animated" the clouds via transform and keyframes.

Note - this is one of the reasons why I prefer to NOT bake in my composite...

![mehclouds.gif](assets/content/RunningDog/img/mehclouds.gif)

![mehclouds.jpg](assets/content/RunningDog/img/MehClouds.jpg)

As you can see, the clouds are basically forced to move at the same speed as the grass and it looks unnatural.. This is because the rest of the animation is within the 27 frames I have here. If i were to expand the number of frames, the dog and grass would be empty or the cutoff would be weird.

BUT when compositing/video editing after exporting it out, you have a LOT more control over the individual elements and how fast or slow they move.

You can have the clouds move much slower and just keep looping the dog and the grass via copy and paste once you have the first loop down and make the duration long enough to cover the duration of the clouds. (I will demo that later)

Added the bg and the ground.. though as you can see, if the ground is static, it would look very strange and out of place as everything else is moving.

![runningdogstaticfloor.gif](assets/content/RunningDog/img/runningdogstaticfloor.gif)

![runningdogmovingfloor.gif](assets/content/RunningDog/img/runningdogmovingfloor.gif)

Not sure why the bg is so choppy like that.. but we can probs fix that in compositing.. I think that's part of why I prefer exporting and then compositing it otherwise you get weird artifacts like this.

In any case, as you can see, the floor being moved along like a treadmill adds to the movement.

The clouds really bother me tho.. can't wait to fix them when I composite XD

Moving on.. I fininshed the floor and the bushes and ended up putting them on the same layer.. I like how it came out.

Here is a PNG of it.
![bushesAndGround.png](assets/content/RunningDog/img/bushesAndGround.png)


I don't like the mountains tho.. but that's cus I didn't try too hard since I have other projects to work on and this project was taking longer than anticipated XD

![mountains.png](assets/content/RunningDog/img/mountains.png)

As I was experimenting, I found that layering the mountains and having the layers move at different speeds (further ones moving slower, closer ones moving faster) makes it look better.

![runningDogWithBg.gif](assets/content/RunningDog/img/runningDogWithBg.gif)

However, I still don't like how hard it is to time everything (when you have a lot of moving pieces like this) all within CSP. This would be much easier to do with say, Da Vinci Resolve, Adobe Premiere Pro, or some kind of video editor so that everything can have a different speed.

Random note: I shaded the grass a little but but because of how I did the keyframes, its too much work to implement it into the csp ver so I will use it in the Compositing ver.

For now, just know that the grass now looks like this:

![shadedGrass.png](assets/content/RunningDog/img/shadedGrass.png)

Though you probably can't tell from far away. (But don't worry, it'll be enlarged during the compositing phase.)

![shadedGrass.gif](assets/content/RunningDog/img/shadedGrass.gif)

So now my background layers are all done (though in a real project I would add a lot more shading first) and consists of the following Layers (ordered by furthest to closest):

1. Sky

![sky.jpg](assets/content/RunningDog/img/sky.jpg)

2. Clouds

![clouds.png](assets/content/RunningDog/img/clouds.png)

3. Mountains

![mountains.png](assets/content/RunningDog/img/mountains.png)

4. Ground / Bushes

![bushesAndGround.png](assets/content/RunningDog/img/bushesAndGround.png)

5. Grass

![GrassNoBg.gif](assets/content/RunningDog/img/GrassNoBg.gif)

As you can see, only the Grass is actually animated.. the rest are all "animated" by literally transforming and moving the images around.



<!--

Note to self:
- [x] animate the grass slowly blowing in the wind
- [x] Color and shade the bushes
- [x] Color and shade the mountains roughly
- [ ] Add a layer of color for shading purposes on a blending mode layer on top of everything else. 
- [x] Use a gradient for the sky. 
- [ ] animate the shadow under the dog
- [x] assemble the bg in the dog running file
- [ ] Export everything separately
- [ ] Assemble in Da Vinci Resolve
- [ ] Compositing with the Reactor Plugin (Da Vinci Resolve Ver 19.0 ONLY) and Finishing Touches

-->

### Additional Resources:

Good vid on Animating Backgrounds: [https://www.youtube.com/watch?v=M7yirNAyD5M](https://www.youtube.com/watch?v=M7yirNAyD5M)


<!--

npm run server
npm run build
git add .
git commit -m "update note"
git push -u origin
npm run deploy 

-->
