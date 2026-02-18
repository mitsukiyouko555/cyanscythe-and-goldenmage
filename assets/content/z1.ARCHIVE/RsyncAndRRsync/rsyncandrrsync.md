---
title: Using rrsync with rsync (WIP)
author: Mitsuki Youko
date_created: 2025-05-12
tag: techwriting
blurb: A guide on how to use the lesser documented rrsync with rsync for a secure, encapsulated way to collaborate remotely.
---

WIP

---

npm run server
npm run build
git add .
git commit -m "update note"
git push -u origin
npm run deploy


---

If you accidentally commited a file that is too big, remove it with this and then recommit:

git filter-branch -f --tree-filter 'rm -f /path/to/file' HEAD --all
