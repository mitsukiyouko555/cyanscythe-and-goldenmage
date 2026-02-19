---
title: Automating Securely with Salt
author: Mitsuki Youko
date_created: 2026-02-04
tag: cyandden
blurb: A starter guide on automating with SaltStack and securely storing passwords through the use of GPG encrypted secrets within Salt Pillars.
---

## Intro

Per Wikipedia, "Salt or SaltStack is an infrastructure as code software tool for configuration management."

It is similar to Ansible, Puppet, and Chef.

This guide will cover the basics of installing and configuring the saltmaster, installing the salt-minion to clients, basic salt usage, a short intro to how grains work for targeting different types of machines, briefly covering the built in grains as well as show you how to make custom grains. It will also show you how to install packages with salt, as well as how to use pillars for secrets (such as credentials).

If you would like to follow along, here's a link to the source code: [https://github.com/mitsukiyouko555/salt-pillar-demo/](https://github.com/mitsukiyouko555/salt-pillar-demo/)

---

## Prerequisites

- A linux server of which to install saltmaster on
- Salt Minon installed on all clients - this can be installed during PXE Boot (in Kickstart) for example..
- Update /etc/hosts to point to the Salt Master's IP Address - usually done via PXE Boot as well, but in this example, I'll be doing this manually instead, since I don't have PXE boot set up in my lab.
- Your salt minions and master need to be on the same network so they can communicate with each other.

---

## Installing Saltmaster

Navigate to [https://docs.saltproject.io/salt/install-guide/en/latest/](https://docs.saltproject.io/salt/install-guide/en/latest/) and pick the install option that best fits the machine you want to designate as your salt master.

![salt installation instructions](assets/content/automatingSecurelyWithSalt/img/0.png)

My saltmaster is an Ubuntu 2404 VM server, so I will be following these [instructions](https://docs.saltproject.io/salt/install-guide/en/latest/topics/install-by-operating-system/linux-deb.html):

##### ------------------------------------------------------------------------------

```
# Ensure keyrings dir exists
mkdir -m 755 -p /etc/apt/keyrings

# Download public key
curl -fsSL https://packages.broadcom.com/artifactory/api/security/keypair/SaltProjectKey/public | gpg --dearmor | sudo tee /etc/apt/keyrings/salt-archive-keyring.pgp > /dev/null

# Create apt repo target configuration
curl -fsSL https://github.com/saltstack/salt-install-guide/releases/latest/download/salt.sources | sudo tee /etc/apt/sources.list.d/salt.sources

# Refreshes apt repos
apt update

# Installs Salt Master
apt install salt-master
```
##### ------------------------------------------------------------------------------

Once done, run "systemctl enable salt-master" to ensure that the service automatically comes back up even after a reboot, then run "systemctl status salt-master" to ensure it is up and running. If it is not running, run "systemctl start salt-master" to start it up.

If all is well, it should look something like this:

![salt master status](assets/content/automatingSecurelyWithSalt/img/1.png)

---

## Installing Salt Minion (Manually for Lab purposes) on a Client

Moving on to the Salt Minion(s)... 

Salt Minions need 2 things to work properly..

1. It needs the Salt Minion package to be installed (same steps as installing the salt master, except when you get to the part where you run "apt install salt-master" (if on debian), you replace that with "apt install salt-minion".)

2. It needs to know where the saltmaster is (and what it's called if its under a different name). This can be added to /etc/hosts

In a production environment, what I have seen is that everything the salt minion needs is configured via PXE boot so that once a PC as been imaged via PXE boot, it will automatically be able to connect to the salt master - after which you can highstate a pc to your desired state.

In this lab environment, however, as I don't have PXE boot set up, I'll be doing this manually.

After following the installation steps as noted above, I then edited the minion's /etc/hosts file to include the ip address of my salt master and the name "salt" so that it knows to look for it. If you edited your salt master configurations in /etc/salt/master to be something other than salt, then you would put that in your /etc/hosts.

Do note that that is not the same name as the HOSTNAME of your saltmaster - but rather the name of the saltmaster within the saltmaster "master" configurations!

As you can see here, the HOSTNAME of my saltmaster is "hydra" and its ip is 172.16.78.146 - but that does not affect the fact that the salt minion service will refer to 172.16.78.146 as "salt" rather than "hydra".

![saltmaster ip a](assets/content/automatingSecurelyWithSalt/img/2.png)

My first salt minion is an Ubuntu 2404 VM while my second salt minion is a Kali Linux VM as I've had that VM for the longest time so I figured I'd integrate it into this lab.

The Kali VM has a better GUI so most of the salt-minion screenshots will be from there.

So here on the Kali VM, I opened /etc/hosts:

![/etc/hosts](assets/content/automatingSecurelyWithSalt/img/3.png)

And added the IP address for the saltmaster like so:

![updated /etc/hosts](assets/content/automatingSecurelyWithSalt/img/4.png)

Once that's done, on the salt-minion, run these 3 commands:
- systemctl enable salt-minion
- systemctl restart salt-minion
- systemctl status salt-minion

What these commands do is enable the service so if the server reboots, then the service will auto start on its own rather than needing you to start it manually. 

Systemctl restart, as the name implies, restarts the service. The reason we do this after adding the saltmaster's ip address to the minion's /etc/hosts is because on some linux distros, it automatically starts the salt-minion service after the installation. So to get it to see the new configs so that it can find the salt master, you would restart the service so that when it comes back up, it sees the new configurations.

IF you get an error on the salt minion, check the following:

1. Is the IP you put in /etc/hosts correct? If not, correct it, then run 'systemctl restart salt-minion', and then run "systemctl status salt-minion" and see if it is up.
2. IF the IP IS correct, then check to make sure that the salt-minion is on the same network as the salt master. If they are on different networks, they won't be able to talk to each other.
3. Are the salt master and salt minion on the same salt VERSION? (You can check this by running "salt-master -V" or "salt-minion -V"). If they are NOT on the same version, you will need to uninstall the salt minion, and reinstall the version of the salt minion that matches the salt master. 

Say, for example, the latest version is salt 3008, but your salt master is on 3007, and your salt minion keeps pulling the 3008 package because it sees that as the latest one, you will need to pin 3007 using the Salt Installation instructions for your respective OS, and pin it before installing.

Example:

Here, the salt minion is installed but it's showing as inactive (dead).

![salt-minion - inactive](assets/content/automatingSecurelyWithSalt/img/5.png)

I checked my /etc/hosts and realized that I had a typo in the ip address for the "salt" entry.

After I fixed that, I restarted the salt-minion service.. Still, nothing..

Then I checked the network my Kali VM was on compared to the Saltmaster and realized they were on two different networks.

I then switched the Kali VM over to the same network and restarted the salt-minon service again and bam there it is!

##### ------------------------------------------------------------------------------

Once the service is up, go to your saltmaster and run "salt-key".

This will show all the salt minions that attempted to connect to the saltmaster.

![salt-key](assets/content/automatingSecurelyWithSalt/img/6.png)

To accept the minion, run "salt-key -a \<minion-name>"

![add salt minion](assets/content/automatingSecurelyWithSalt/img/6-1.png)

To delete a minion, run "salt-key -d \<minion-name>"

![delete salt minion](assets/content/automatingSecurelyWithSalt/img/6-2.png)

If you ever need to re-register a minion, say if you removed salt-minion to install a different version or if you reimaged the pc and now it's getting re-registered again, you will first need to run "salt-key -d \<minion-name>", then RESTART the SALT-MINION service on the salt minion so that it reaches out to connect to the saltmaster again, then run "salt-key -a \<minion-name>" to properly add it back. If you don't remove it and re-add it back, you may run into issues when you try to run states (state.sls or highstate) against your minion.

![delete and re-add salt minion](assets/content/automatingSecurelyWithSalt/img/6-3.png)

Once you have added it, you can try test the connection between the master and minion by running "salt '*' test.ping".

Here, "*" refers to "all" minions. If you want to target only one minion, you can put the minion's name in between the single quotes, like so "salt 'kali' test.ping".

If you get a response, that means it is good to go - and if you get a "minion did not return. [Not Connected]", that means that either the minion is offline or it is not recieving pings OR it could be that there is a mismatch between the salt minion and master versions thus leading them to not be able to talk to each other.

![salt ping](assets/content/automatingSecurelyWithSalt/img/7.png)

---
## Basic Salt Usage

Alright, now that the saltmaster is able to connect to the saltminions, lets talk about how to use salt.

First, create  the /srv/salt directory with "mkdir -p /srv/salt".

That is the default path that the salt master looks at to find salt "states". (You can change this in the /etc/salt/master configs if you so choose.)

States are files that contain information on what you want a system to look like, for example, if you want app xyz installed, and certain files configured certain ways.

You can run states on minions in one of 2 ways - Highstate, or state.sls.

To understand what these are you'd first need to know what sls's are.

.sls files are state files in that they contain what the *expected* state of the machine should look like.. (For example, VS Code should be installed on it, or nsswitch.conf on the minion should be exactly the same as the nsswitch.conf template on the saltmaster.)

You could have an sls for adding local users, a different sls for installing all the software that is needed, another sls for configuring certain files, etc.. The possibilities are endless.

However, top.sls is a special state file. It is a master document of all the .sls's. It pulls in all other .sls's that needs to be run so nothing gets missed.

The summarize: 
- The point of a top.sls is to INCLUDE other sls's in it
- The individual sls's contain the LOGIC used to do what is needed.

Salt .sls files use YAML syntax. This means that the first statement is smack-dab to the left, and substatements of it are indented to the right 2 spaces at a time.

### NOTE: Do NOT use tab to indent - only use spaces 2 at a time.

Example of a Top.sls file:

```
base:
  '*':
  - installStuff
  - directory.applesAndOranges
  - addAdminUser

```

Example of a regular .sls file:

```
installMicro: (Name of the set of commands - optional)
  pkg.installed: (This command tells the pc to use its native install method to install the noted packages.)
    - name: micro (This is the name of the package to install)
```

Here is what it looks like without the comments (see how each nested item is indented by TWO SPACES):

```
installMicro:
  pkg.installed:
    - name: micro
```

There's a shortnand way to write it too, which is like this:

```
micro:
  pkg.installed
```

But issue with that is... you can't include multiple packages in one command.

You can use the shortand if there is only one package to install but if you have multiple packages to install, you can do so like this:

```
installPkgs:
  pkg.installed:
    - pkgs:
      - package1
      - package2
      - package3
      - package4
      - and so on
```

Here is a tree/directory/folder view of what a typical salt directory looks like:

![tree view](assets/content/automatingSecurelyWithSalt/img/8.png)

As you can see, the top.sls file sits at the root of /srv/salt.

The top.sls consists of a "base". 

Here, the base target is '*' which means "all" minions:

![top.sls](assets/content/automatingSecurelyWithSalt/img/9.png)

Other .sls files can either sit beside it or sit within a directory in /srv/salt to be referenced.

As you can see, installStuff is sitting in the same directory as top.sls so it can be referenced directly, but applesAndOranges.sls is within the directory folder, therefore it is written as directory.applesAndOranges - if you don't include the directory, you'll get an error where it says it can't find the file.

Also take note that when referencing .sls files, we do NOT include .sls in their name as you can see in that screenshot, but it is expected that they be in the proper directory - ie somewhere within the /srv/salt directory (or whatever directory you designate in /etc/salt/master if you configured it so that it no longer uses the default directories.)

After creating the /srv/salt directory, you can start creating sls's.

To start using top.sls, you first need another .sls in the same root directory as the top.sls so that you can then include it in your top.sls.

The easiest thing to do for learning and testing purposes, is to create a .sls that installs something.

Example:

![install lolcat](assets/content/automatingSecurelyWithSalt/img/10.png)

Then include it into top.sls

![add install.sls to top.sls](assets/content/automatingSecurelyWithSalt/img/11.png)

Once you have a top.sls all set up, to run it, run "salt '\<minion>' state.highstate"

IF you ONLY want to run the individual .sls for testing purposes, instead of running highstate, you'd run it like so: "salt '\<minion>' state.sls \<sls_Name>".

Usually, if you are running just that one SLS, it'd mostly be for testing.. in which case you'd only want to make sure to run it on your test machine, NOT on '*', unless you've already tested it and intend to make a production change that can be done by running that sls once. 

An example of running ONE .sls on '*' would be to change where an existing NFS mount is pointing (in the event that the source of that mount is to be migrated to another server) - you wouldn't want to put that .sls in top.sls. 

Instead, you'd want to edit the original mount .sls so that it points to the new mount for NEW machines for when they get the state applied - but what about the old ones?

Obviously, you need to make it so the old ones point to this new mount.. But in that case, you'd only need to run it once for all machines so that all EXISTING machines have their fstab/mounts pointing to that new mount as the new machines are covered by the updated .sls.

So in that case you'd run your migrateNFS.sls on all existing minions with '*'.

For testing purposes, however, here's an Example:

If the state has been applied successfully, you'll see a success message.

![Successful salt run](assets/content/automatingSecurelyWithSalt/img/12.png)

Sometimes if you have dpkg errors, you have to ssh to the machine and fix the dpkg errors and make sure apt is up and running before running the .sls again.

TIP: If you want to know where in your salt state it's working on when running, you can ssh to the minion and run 'journalctl -f' to follow it as it walks through the commands. You'll see something like this:

![journactl -f](assets/content/automatingSecurelyWithSalt/img/13.png)

When it's using "aptpkg", you'll know that it's installing something. Some linux distros might actually tell you what it's installing while others might not but at least you get a sense of what it's doing in that you know its not updating a config right now, rather, it is in the middle of installing something.

If you ran it once, and want to run it again, it will turn from blue to green if it is already in the correct state.

![already installed](assets/content/automatingSecurelyWithSalt/img/14.png)

To show you what you can do with file management in Salt, I'll give you another example.

Say I want to copy a file that has certain configurations.. In this case, I want to put a file in the minion's root directory that says "I'm an Orange" when the file is read. This may seem like a random example, and it is but trust me, this will lead to the concepts for the next section.

So to do this, I need a few things:
1. A file called orange.txt with the text "I'm an Orange" that sits somewhere within /srv/salt or one of its subdirectory on the saltmaster
2. An applesAndOranges.sls (the naming will be explained later but basically you need a .sls to tell salt which file to pick up on the saltmaster and where to put it on the salt-minion)
3. I'd then need to include the applesAndOranges.sls into top.sls

So first, I created a directory, which for presentation purposes and to avoid confusion, I've called "directory", alongside top.sls.

![directory folder](assets/content/automatingSecurelyWithSalt/img/15.png)

Within that directory, I created the applesAndOranges.sls file, along with a "files" directory.

In a production environment, many times, sls's that need certain files have the files within a sub directory next to that .sls, albeit with better and more specific naming conventions than just "files".

![directory folder](assets/content/automatingSecurelyWithSalt/img/16.png)

Within the files directory, I have an oranges.txt file:

![oranges.txt](assets/content/automatingSecurelyWithSalt/img/17.png)

Within the applesAndOranges.sls file, I have the following:

![applesAndOranges.sls](assets/content/automatingSecurelyWithSalt/img/18.png)

Let's break this down line by line.

![applesAndOranges.sls](assets/content/automatingSecurelyWithSalt/img/19.png)

---
### Targeting Systems with Grains and Jinja

(Introduce the apple.sls - say if you want to not just have all the machines be oranges, but some be oranges and some be apples based on their distro type, here's what you'd do)
(note that this is a practical example because different distros have different configurations for say.. .ssh or .bashrc or diff configs for diff software. Such setup would come into use in these scenarios.)
(Remember to cover if/else statements)
(cover how to look through the built in grains. if too many, >> it into a new document and use "less" on that documemt to peruse it slowly.)

Linux distros, for example, comes in different flavors such as Debian, RHEL (Red Hat Linux), etc... where packages and commands are likely to be different. Then of course, you have your Windows vs your Macs, etc. All these systems get packages installed or configurations set in different ways, therefore if you have a wide array of OS types in your fleet of salt minions, utilizing grains and jinja is a must.

For example, take the Freeipa package (Freeipa is an Authentication software)... the Debian Version of that packate is called "freeipa-client", while on RHEL, it is called "ipa-client" - so here's where Jinja is useful.

So if you were to have a sls that installs the package 'freeipa-client', it would run on all Debian minions but fail on a RHEL Minions.

---
### Adding User to Minion with GPG Encrypted Password in Pillar

(make a note about making the /srv/pillar directory)
(also note how pillars also have their own top.sls which is different from /srv/salt's top.sls but functions similarly with respect to its own surrounding .sls's in the /srv/pillar directory.)
(make a note about GPG1 vs GPG2 in that GPG2 won't work.)


---
## Outro

As you can see, what we are doing here is just barely the tip of the iceberg when it comes to salt!

I highly recommend that you read the official documentation over at [https://docs.saltproject.io/en/3007/contents.html](https://docs.saltproject.io/en/3007/contents.html) to learn more about what salt can do.