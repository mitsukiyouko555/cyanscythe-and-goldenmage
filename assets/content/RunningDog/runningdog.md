---
title: Running Dog Animation Critique
author: Mitsuki Youko
date_created: 2025-04-03
tag: misc
blurb: Running Dog Anim Critique for Redditor u/remyisacutie.
---

### Overview

This blogpost is a bit different than my others as I will be breaking down my animation and composting process for [this reddit post](https://www.reddit.com/r/animation/comments/1jqdx7c/ik_this_is_wrong_but_how_do_i_fix_it/) by u/remyisacutie.

Here is u/remyisacutie's original animation:

![runningdog](assets/content/RunningDog/img/runningdog.gif)

FYI: I am not a professional artist or animator. I'm a hobbyist so take my critique with however many grains of salt you'd like.

Note: There are some large gifs and images in this Blogpost. If an image/gif looks like it's not loading, try refreshing the page and it should pop up...

Here are my initial thoughts on it:

1. Dog's eyes are too static, introduce some blink
2. Belly flops around a bit toooo much.. its like his ribs are moving - seems slightly unnatural.. If he just has a fat belly, the flop should be lower. (imo)
3. Legs are good but not quite on the ground
4. No shadow
5. Cloud moving in different directions.. i guess that kinda works but if there's wind thats impacting the clouds that much, the trees would be affected a little too..
6. Ears, tail, and legs are actually quite good!
7. Tongue looks like its being swung forward.. doesn't quite match the running direction...
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
3. Foreground (Grass)
4. Midground(ground and trees)
    1. Make the ground long so that it you can move it x-axis. 
5. Background (clouds and mountains)
6. Sky

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
1. Export EACH animation layer separately so as to be able to add effects to them.. by layers I don't mean the dog's legs being on a different layer than its eyes... I mean Dog and its sublayers get exported as 1 png animation, the grass get exported as its own animation etc.. Anything you need to composite separately gets exported as its own png gif or image sequence.

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

Watch this excellent video on how to use Keyframes for Camera Movement in CSP:

<iframe width="560" height="315" src="https://www.youtube.com/embed/8F9eJjDkvtE?si=l5YfQy6QEYK4ZD_p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

Ok.. I think Imma just stylize the legs instead of making them look realistic.. maybe gonna give him "hoof-like" legs instead cuz I'm too lazy to learn how to draw a dog just for this one critique XD

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

It'll probably make more sense to see it in action so here's a video I made... (Keep in mind this is still quite rough... but it gets the point across..)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z0TCPKRYMY8?si=BFuFJLrWPrSQyyHu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

As you can see, the clouds are basically forced to move at the same speed as the grass and it looks unnatural.. This is because the rest of the animation is within the 27 frames I have here. If I were to expand the number of frames, the dog and grass would be empty or the cutoff would be weird.

BUT when compositing/video editing after exporting it out, you have a LOT more control over the individual elements and how fast or slow they move.

You can have the clouds move much slower and just keep looping the dog and the grass via copy and paste once you have the first loop down and make the duration long enough to cover the duration of the clouds. Or if it somehow never matches up, you can still do a few loops and then do a slow fade out so it doesn't look awkward. (I will demo that later)

![mehclouds.gif](assets/content/RunningDog/img/mehclouds.gif)

![mehclouds.jpg](assets/content/RunningDog/img/MehClouds.jpg)

Added the bg and the ground.. though as you can see, if the ground is static, it would look very strange and out of place as everything else is moving.

![runningdogstaticfloor.gif](assets/content/RunningDog/img/runningdogstaticfloor.gif)

![runningdogmovingfloor.gif](assets/content/RunningDog/img/runningdogmovingfloor.gif)

Not sure why the bg is so choppy like that.. but we can probs fix that in compositing.. I think that's part of why I prefer exporting and then compositing it otherwise you get weird artifacts like this. (Could be a CSP thing though.. not sure actually...)

In any case, as you can see, the floor being moved along like a treadmill adds to the movement.

The clouds really bother me tho.. can't wait to fix them when I composite XD

Moving on.. I fininshed the floor and the bushes and ended up putting them on the same layer.. I like how it came out.

Here is a PNG of it.

![bushesAndGround.png](assets/content/RunningDog/img/bushesAndGround.png)

I don't like the mountains tho.. but that's cus I didn't try too hard since I have other projects to work on and this project was taking longer than anticipated XD But it's been fun!

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

Now, back to the badly drawn dog (didn't use references for most of it thats why).... 

Yes.. Yes, I know, there are many things wrong with this dog animation (since I'm not really trying very hard with this dog...)

Aight.. here's the lineart of the dog:

![runningdoglineart.gif](assets/content/RunningDog/img/runningdoglineart.gif)

And here is the lineart with the shadow (also roughly done...):

![runningdogwithshadow.gif](assets/content/RunningDog/img/runningdogwithshadow.gif)

Here, I like to do a rough check of the lineart by watching it loop while focusing on different parts of the animation.

Watch the loop and focus on just the tail and check if it looks ok.
Then observe just the back legs, then just the front legs, then just the torso, then just the eyes, then just the tongue, and.. you get the idea..

By only observing PARTS of the animation at once, it helps you better spot the looping errors - especially if part of the animation seems to not be very smooth but you can't figure out exactly where. (For example, the fur on the nape of the dog's neck appears and disappears too suddenly. I should probably add a few more frames where the fur eases in and out for better flow.)

Example: 

Focusing on the Ears:

![Ears.gif](assets/content/RunningDog/img/Ears.gif)

Tongue:

![Tongue.gif](assets/content/RunningDog/img/Tongue.gif)

Forelegs:

![Forelegs.gif](assets/content/RunningDog/img/Forelegs.gif)

Back Legs:

![BackLegs.gif](assets/content/RunningDog/img/BackLegs.gif)

Tail:

![Tail.gif](assets/content/RunningDog/img/Tail.gif)

Added some gentle/light baked in comp.. 

Just a tiny bit of atmospheric lighting + contrast on top of everything.

![bakedInComp.jpg](assets/content/RunningDog/img/bakedInComp.jpg)

Here is what it looks like without the baked in comp:

![runningDogNoComp.gif](assets/content/RunningDog/img/runningDogNoComp.gif)

And here is what it looks like with the comp:

![runningDogBakedInComp.gif](assets/content/RunningDog/img/runningDogBakedInComp.gif)

As you can see, the gradient lighting and added contrast gives it more depth.

Now, I could go further and add and lighting shading on everything individually (and most of the time I do but I'll leave it like this for this one since its not a serious project...)

Laid down some color flats. (Orig I made the dog darker but the value was too close to the bg so I made him a lighter gray.)

![runningDogFlats.gif](assets/content/RunningDog/img/runningDogFlats.gif)

The background still seemed too flat so I added a bit more comp for the baked in version with different gradients clipped onto the different layers of bg using different blending modes like so:

![moreComp.jpg](assets/content/RunningDog/img/moreComp.jpg)

Did a value check and it looks alright... In a more serious project I would pay a lot more attention to making the values contrast a lot more.. But since this is not the focus of this critique.. I'll settle with this for now.

![runningdogValueCheck.gif](assets/content/RunningDog/img/runningdogValueCheck.gif)

And Here's the colored ver.. Adding all that comp makes it look a lot more vibrant and less flat imo.

![runningDogMoreComp.gif](assets/content/RunningDog/img/runningDogMoreComp.gif)

One thing I noticed is - if you want the clouds to be directly above the dog, then there will also need to be shadows for the clouds on the floor and the dog.

But I want it to be more in the bg so will probably do some kind of blur on it later so its not quite as sharp. Otherwise everything looks more or less about the same distance due to everything having such sharp lineart/color.. But I can't do that in CSP (as far as I know) since the blur effect only affects singular layers not folders. 

That would be another good reason to comp things in a video editor so you can have more control over stuff like that.

Ok! Finally finished coloring the dog:

![runningDogFullColor.gif](assets/content/RunningDog/img/runningDogFullColor.gif)

And added some more comp just cus it didn't look quite right.. I dimmed the bg/mountains just a bit just so you can see the dog better.

![andSomeMoreComp.jpg](assets/content/RunningDog/img/andSomeMoreComp.jpg)

Honestly still doesn't look quite right.. but its ok we are going to make it better during composting in this next section!

![runningdogWithBakedInComp.gif](assets/content/RunningDog/img/runningdogWithBakedInComp.gif)

---

### Compositing in Da Vinci Resolve

Actually, the reason why I wanted to do this critique/tutorial was cuz I wanted to get back into animating after not having done any serious animation for like 1.5 years, AND also because I wanted to learn how to composite better in Da Vinci Resolve.

So for this part, we are sort of going to be learning together!

Note: You don't have to use Da Vinci Resolve if you already have a video editor you like to use. Compositing concepts are probably going to be roughly the same.

In Da Vinci, most of the fancy stuff is done in Fusion.

Fusion uses a thing called nodes.

This is the video that helped me figure out, a few years back, how to actually use nodes in fusion. The only one that really made a lot of sense to me and made things click. (Though this is an updated video the content is more or less the same.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/PoinMs_YceQ?si=WD21TBAGAjaO5SqH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

So first, I'm going to export my backgrounds, uncomp'd!

By that I mean do it one background item at a time (one for the mountain, one for the ground/trees, one for the clouds, one for the grass.)

So its not going to be one lump of all the backgrounds together. Going to need each item separately so we can apply different comps to each of the different items.

I also exported the dog without the shadow as a png sequence, and exported just the shadow as a separate png sequence so in case we want to do something fancy with just the dog or just the shadow, they are not bound to each other.

The grass is also a png sequence.

So my files look like this:

![compFiles.jpg](assets/content/RunningDog/img/compFiles.jpg)

![dogCompFiles.jpg](assets/content/RunningDog/img/dogCompFiles.jpg)

![dogShadowCompFiles.jpg](assets/content/RunningDog/img/dogShadowCompFiles.jpg)

In Da Vinci Resolve, I started a new project and went to the Edit tab

![editTab.jpg](assets/content/RunningDog/img/editTab.jpg)

Then I imported all my assets:

![importedAssets.jpg](assets/content/RunningDog/img/importedAssets.jpg)

I moved the Dog onto the timeline, made a new track and moved the shadow below the dog, lining them up.

![timelineDogShadow.jpg](assets/content/RunningDog/img/timelineDogShadow.jpg)

That looks like this in the viewport.

![viewportDogShadow.jpg](assets/content/RunningDog/img/viewportDogShadow.jpg)

This is a very basic set up but before we get into the fancy stuff, I'm going to watch a refresher video.

At the bottom of this post, I linked some tutorials on how to use Da Vinci Resolve if this is your first time.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OtKhezId7As?si=p2WGkntUlgb2a6K7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Ok so after watching that tut, I have a better idea of how I want to composite this.

![comp-setup.png](assets/content/RunningDog/img/comp-setup.png)

What I would like to do though is also add a lightning effect so its like the sun is coming from the right side... but with all these being separate clips and they are all animated at different speeds, puting them in one clip would not be very flexible... I remembered there is a way to add something on top of everything else by making a new fusion composition.

So I right clicked in the media pool and clicked New Fusion Compositon:

![addFusionComp.png](assets/content/RunningDog/img/addFusionComp.png)

Clicked Create:

![newFusionComp.jpg](assets/content/RunningDog/img/newFusionComp.jpg)

Then dragged the new fusion composition into the timeline ABOVE everything else, as the lighting should be above all the layers.

![moveFusionComp.jpg](assets/content/RunningDog/img/moveFusionComp.jpg)

Op and now there is a warning that there is no frame available for media out. What that means is basically the only node in there is media out and you need to have something for it to output.

![FusionCompWarning.jpg](assets/content/RunningDog/img/FusionCompWarning.jpg)

So with the Fusion Composition clip selected, I went to the Fusion Tab:

![GoToFusionTab.jpg](assets/content/RunningDog/img/GoToFusionTab.jpg)

As you can see, there is just one lonely Media Out node all by its lonesome...

![lonelyMediaOut.jpg](assets/content/RunningDog/img/lonelyMediaOut.jpg)

Let's add a background as a placeholder for now. We can change it later.

Click near the media out node and then click Command (Mac) or CTRL (Windows) + Spacebar.

That should bring up a Select tool.

Type in bg and add the Background

![cmdCtrlSpace.jpg](assets/content/RunningDog/img/cmdCtrlSpace.jpg)

Now you will see the background and media out nodes.

![connectBgMediaOut.jpg](assets/content/RunningDog/img/connectBgMediaOut.jpg)

Connect them like so:

![BgMOConnected.jpg](assets/content/RunningDog/img/BgMOConnected.jpg)

Now go back to the edit/timeline page and you will notice that the error is now gone.

![NoMoreWarning.jpg](assets/content/RunningDog/img/NoMoreWarning.jpg)

As the background by default is black (you can change the color but this is just a placeholder for now), if you lower the opacity you can still see the stuff under it, affecting ALL the layers, thus confirming that it is doing what we want it to do.

![OpacityCheck.jpg](assets/content/RunningDog/img/OpacityCheck.jpg)

Now, back to the fusion tab, I clicked on the background and changed the type from Solid to Gradient. For now, I selected some kind of yellow for the rightmost color:

![BGgradient.jpg](assets/content/RunningDog/img/BGgradient.jpg) 

Now, when it comes to the leftmost one, you might wonder why there are no colors for you to select like the one on the right. No worries, just drag the color bar from black to white:

![BGgradient2.jpg](assets/content/RunningDog/img/BGgradient2.jpg) 

Now, you will have the full array of colors to select from. I opted for a cyan-ish color for now... just to see how it looks.

![gradientCyan.jpg](assets/content/RunningDog/img/gradientCyan.jpg)

I also added a color in the middle by clicking that position, and put it at a pastel yellow, closer to white. then lowered the alpha a bit to make it sort of transparent since I don't want the middle to stand out that much.

![lowerAlpha.jpg](assets/content/RunningDog/img/lowerAlpha.jpg)

Now, going back to the EDIT Tab, on the right side, I fiddled with it and decided to change composite mode to Divide.. You should toggle through all the settings under composite mode and see which one works best for you.

I also lowered the opacity for it as well..

![Divide.jpg](assets/content/RunningDog/img/Divide.jpg) 

Since Divide made it so the left side is pink and the right side is blue, I used the flip button to flip it around so that the right side is pink and the left side is blue.

![Flip.jpg](assets/content/RunningDog/img/Flip.jpg) 

Fiddled around and added another gradient color for transition:

![moreGradient.jpg](assets/content/RunningDog/img/moreGradient.jpg)

After fiddling some more, I felt that it looked better with Opacity at or near 100% so I set it back to 100% for now...

![overview.jpg](assets/content/RunningDog/img/overview.jpg) 

Now, if you are familiar with Da Vinci, you might be wondering... why aren't you using the color tab for these color corrections?

(For those that aren't familiar, the color tab is super cool - I linked some videos at the very bottom of the blogpost so make sure to check em out!)

The reason I'm not using the color tab at the moment is because right now I have a bunch of layered clips and if you want to color grade EVERYTHING TOGETHER, it needs to be one clip.. Otherwise it'd be the same as doing everything individually which defeats the point for what I'm trying to do here BUT once everything is set up and composited and the loops are set as I'd like, I can create a composite clip that basically turns all the layers into ONE singular clip.

Personally, it is at THAT point that I would use the color tab for the finishing touches. So for now, that Fusion Comp Gradient Layer I'm putting on top is more or less a placeholder for now. If I like it I'll keep it but I'll probs be making more color grading touches in the Color tab.

![colorTab.jpg](assets/content/RunningDog/img/colorTab.jpg) 

One thing I was concerned about is whether or not a shorter clip can keep looping while the fusion clip was longer.. and I found out that yes, it can!!

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vs08wbx5t3c?si=0n4z-SpmvibSKNg1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

From here on out, I'll just record my process as writing down what I'm doing step by step takes too long. 

I ended up deleting that one fusion layer I had on top of everything else since I fiddled with making a new fusion layer and putting ALL the images and clips into one fusion layer but the issue was that I needed to be able to move the background and foreground up and down when the dog landed on impact but it was hard to do with the nodes as the dog sat between the grass and the background thus if I moved the background and the foreground, the dog would also move - so I ended up breaking it out.

If you want to skip my fiddling around, jump to the 10 minute mark in the video.

So while putting everything into one fusion layer is a good technique it doesn't quite work out for me in this case. You may run into stuff like this when you composite too, but just roll with it and have fun and make tweaks and changes where needed!

Here is the full timelapse of my 7.5 hours of compositing but sped up 700+% so that it's only 1 hour long. Feel free to slow down the vid on youtube.

I was gonna add some subtitles, detailing what I did, but I got lazy so.. if you really want to know what I'm doing in a certain part, feel free to dm me.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4nSqu6nELME?si=4-2c-pHS6XEPE29r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Through a few hours of trial and error of using different methods to composite, here is what I ended up with:

![runningDogFinalCompressedGIF.gif](assets/content/RunningDog/img/runningDogFinalCompressedGIF.gif)

Here is the High Res Ver on youtube (Though due to youtube playback and network speed, it may not load as smoothly as a gif.):

<iframe width="560" height="315" src="https://www.youtube.com/embed/04N1HEK5PRU?si=CrW_dNedZp-5bpvv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Comping Takeaways

1. Try different methods, and eventually you'll find what works for you. It's ok to spend a lot of time on method only to later choose a different method you were considering.

2. If you have different layers of bg in separated clips and you want to move the whole background AND foreground BUT not the character sandwiched between, it appears to be easier to just composite each of the clips separately and then turn them into one composite clip to move them.

3. If rendering or playback is slow, you probably need more ram. 
- Ways you can optimize your playback include:
    - Go to DaVinci Resolve > Preferences > System > Memory and GPU and increase the memory limit as much as you can. If it is maxed out, nothing you can do there.
    - Go to Playback > Render Cache > Set it to Smart or User and change Render Cache Fusion Output to On
    - Try going to Playback > Timeline Proxy Mode > Half Resolution or Quarter Resolution. This makes your playback blurry but it will be fine when rendered.

- Patience is key. If you have done all of the above and it still is laggy, just wait it out. Make yourself a snack or drink or finish some chores while you wait.

- If playback is so laggy that you can't really tell the timing of things, (and this has happened to me before - a long forgotten memory til now...) render it out and watch the animation. 
Then when you go back, try to tweak it based on what you want to see corrected in the render version. Render again, and see how close you are and retweak as needed. Rinse and Repeat.
With experience, your tweaks will get more accurate and your compositing will take less time. (Been almost 2 years since I last composited so I totally forgot about this lag.)

4. When trying to make something loop, first, set up the thing that will take the longest to play through. For example I know the clouds are going to move the slowest so everything else will need to LOOP Perfectly within the cloud's loop duration. If anything is off, it will feel choppy. So say you have the cloud down but the dog is off by 2 frames at the end. What you can do is make sure the dog gets the few frames added back AND extend the cloud's loop by just a bit, thus slowing it just down a little bit more - but keeping the balance.

    IMO this is the hardest part about making a looping animation - timing everything so that all the smaller loops - ALL TIMED DIFFERENTLY - fit perfectly within the largest loop, and subsequently making sure the transition is SMOOTH for every single item in the animation.

    Be Patient, this takes a LOT of tweaking and trial and error! But once you get it to loop perfectly it is super satisfying XD

    Repeatedly play the last few frames of the animation and loop around to the beginning, checking everything to ensure that the transition is as smooth as possible.

5. IF you can, set up the animation first before compositing otherwise playback will be pretty slow.

6. Instead of using clips and copying and pasting them if they aren't long enough to match the full loop, simply make a fusion clip and drag the small loop in as the media in, connect it to the media out, hit loop and when you go back to Edit, you can make it as long as you need to and it will still loop!!

    HOWEVER - Note that when you make the clip longer than it already is, you may see an error saying no media found. Just go back into the fusion clip, uncheck and RE-check the loop checkbox and go back to Edit and it will show up again. My guess is that either it takes time to sync the loops or it just can't tell that it's been expanded and thus is confused so unchecking and rechecking the loop box basically reorients it.

7. Use markers to mark where something is supposed to happen. For example I used red markers (you can pick any color) to mark when the dog lands so that I can make sure when the whole background does the camera shake, that it doesn't do so off beat and that it is synced properly.

---

### Critique of my own animation:

#### Baked In Comp Version:

![runningdogWithBakedInComp.gif](assets/content/RunningDog/img/runningdogWithBakedInComp.gif)

1. Bg is too colorful, dog is too gray, focus is more on bg... But if the bg is too boring, the whole thing looks quite dull cus the dog is already gray..

2. Pretty much everything is timed at the same speed... doesn't look natural. I like each of the elements individually.. but together.. they seem a bit busy - possibly because everything is moving at the same speed so this may not be an issue after Da Vinci Comp is done..

3. Dog could be drawn better...... the conversion from dog legs to block legs look a bit weird but the grass hides it XD

4. The ambient lighting looks alright but there are a few artifacts maybe due to how CSP exports gifs?

5. I personally would rate myself a 5/10 here.. its aight.... meh.

#### Da Vinci Resolve Comp Ver:

![runningDogFinalCompressedGIF.gif](assets/content/RunningDog/img/runningDogFinalCompressedGIF.gif)

1. The cloud could have been connected better on the loop but oh wells..

2. There is a faint horizontal line on the closer mountain.. Couldn't figure out why tho..

3. It was a lot harder to do the camera shake when the dog lands.. I feel like there is a better way of doing this in Da Vinci but I haven't figured out what it is yet..

4. Overall I'm quite satisfied that everything loops quite nicely and pretty much seamlessly!

5. Lighting turned out decent!

---

### Time It Took:

Baked In Comp: Roughly 2-3 weeks (Ranging from 1-3 hours of work on the weekdays and 8-16 hours on the weekends)

Exported Then Comp'd: Roughly 3-4 weeks (Ranging from 1-3 hours of work on the weekdays and 8-16 hours on the weekends)

Though it took a bit longer than it would usually take for me also because I was screenshotting and documenting everything.

---

### Additional Resources:

Good Vid on Animating 2D Backgrounds Dynamically: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/M7yirNAyD5M?si=kpriD38mOgQhht05" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Da Vinci Resolve Tutorials (General):

<iframe width="560" height="315" src="https://www.youtube.com/embed/qDHnCFMZ9HA?si=ezFk65wt16mna2pT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/pwg8D0P4z7M?si=Sts6Enp919ZVbnkd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Da Vinci Resolve Color Grading/Correction Tuts:

<iframe width="560" height="315" src="https://www.youtube.com/embed/SkosqJfzEs0?si=SKTVA_QGViZUKvGL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/YfyriApWIJY?si=xUizx6PIpZDsjjsh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

#### If you read this far, thanks for reading and I hoped it was helpful and hope you enjoyed it! :D

