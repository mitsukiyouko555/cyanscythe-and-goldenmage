---
title: Conceptual Technical Writing - Minimizer (WIP)
author: Mitsuki Youko
date_created: 2025-05-31
tag: techwriting
blurb: A blogpost showcasing the application of my technical writing skills to a conceptual mechanism.
---

## Premise

This is a technical writing sample (for portfolio purposes), revolving around a conceptual Futuristic Object Compression Mechanism, used in the year 3050, called the "Minimizer" from my [Personal Project](https://mitsukiyouko555.wixsite.com/portfolio/personal-project).

---

## How to Compress and Decompress Objects with Minimizer

Minimizer App Logo:

![logo](assets/content/ConceptualTechnicalWriting-ObjectCompression/img/logo-smallest.png)


### How to Compress Objects

1. Activate your holo

![holo](assets/content/ConceptualTechnicalWriting-ObjectCompression/img/holo.png)

2. Open the compression app

![logoclick](assets/content/ConceptualTechnicalWriting-ObjectCompression/img/logoclick.png)

3. Click scan and point your holo's camera towards the object. Once scanned, the item is linked and absorbed into your holo for compression purposes.
    
	1. If multiple objects get scanned, select the object(s) you want to compress, ignoring those you don't
	2. If compressing multiple objects, see if you want to compress them all into one cube or if you want to compress them into individual cubes
	3. if you decide to cancel the compression, click cancel and your item will be released from the holo and be physically accessible again.
4. Once the item(s) have been selected, select the compression size (customizable using a circle control)
5. Select a compression shape (Cube, Sphere, Diamond, Custom, etc.)
	1. A cubed compression looks like this
	2. A Diamond Compression looks like this
	3. A Sphere Compression looks like this
	4. To create a custom compression shape, click Custom and a modeling tool will pop up.
		1. If you've saved custom shapes before, in the top right hand corner, click the hamburger menu and click "saved shapes". Otherwise, proceed with modeling a custom shape.
			1. You have the option of modeling it yourself from scratch
			2. or prompting AI to create a shape for you.
				1. you can tell it how many variations to generate and select the ones you like
				2. you can also describe the use case for your compression (ie fits in a box shaped like this (with a diamond shaped mold/inset), etc.)
		2. If you want to model it yourself, \<insert blender-like modeling directions here>
		3. Once you have modeled your custom shape, click save
			1. you can also save the shape as a template for future use
6. click compress
7. A compression status circle will show in real time as it compresses.
8. Once compressed, the status will show as complete
9. You can choose one of these Security options
	1. Unsecured
		1. Anyone who wants to uncompress it can do so
	2. Password
		1. a window will pop up for you to put in a password
		2. the item can only be uncompressed by whoever puts in the right password
	3. Fingerprint
		1. a window will pop up on your holo's keyboard panel (your keyboard will be replaced with a fingerprint scanner for all 10 fingers) to scan your fingerprints
	4. Soul Print
		1. Only users with the soul print of the holo (aka only the user who compressed it can uncompress it)
		2. a secret key is generated in the background and stored on the compressed item(s)
10. 
11. Click Export and The holo will present the compressed item to you (it comes out of the holo, between the user and the holo.)
	1. on opposite sides of the item, there is a half circle. so long as those remain as is, the item will remain compressed

### How to Decompress Objects

1. To Decompress, it depends on the level of security that was chosen during the compression process.
	1. unsecured
		1. Anyone can decompress it
	2. password
		1. enter the password and only then will you be given access to decompress it
	3. fingerprint
		1. the item itself produces ITS OWN holo of which scans your fingerprints. If it matches, it allows you to decompress
	4. soul print
		1. the item connects its holo to your holo in the background and if their keys match, you are allowed to decompress it
2. The actual decompression process is quite simple. take the item and twist it til the 2 half circles form a full circle and it will decompress back into the item's original size.
3. To recompress an item, follow the compression steps again.




<!-- NOTE: 

0. The blurb is a 10 word blurb describing briefly what the blogpost is about

1. When making a new page, remember to run this to compile the pages:
npm run server

2. Then double check with
npm run build

3. Then do your git stuff
git add .
git commit -m "update note"
git push -u origin

4. Then deploy it with:
npm run deploy

--- -->

<!-- npm run server
npm run build
git add .
git commit -m "update note"
git push -u origin
npm run deploy -->