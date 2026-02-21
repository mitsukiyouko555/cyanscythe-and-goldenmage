---
title: Automating Securely with Salt Pillars
author: Mitsuki Youko
date_created: 2026-02-04
tag: techwriting
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

Once done, run "systemctl enable salt-master" to ensure that the service automatically comes back up even after a reboot, then run "systemctl status salt-master" to ensure it is up and running. If it is not running, run "systemctl start salt-master" to start it up.

If all is well, it should look something like this:

![salt master status](assets/content/automatingSecurelyWithSalt/img/1.png)

---

## Installing Salt Minion (Manually for Lab purposes) on a Client

Moving on to the Salt Minion(s)... 

Salt Minions need 2 things to work properly..

1. It needs the Salt Minion package to be installed (same steps as installing the salt master, except when you get to the part where you run "apt install salt-master" (if on debian), you replace that with "apt install salt-minion".)

2. It needs to know where the saltmaster is (and what it's called if its under a different name). This can be added to /etc/hosts

In a some production environments, everything the salt minion needs is configured via PXE boot so that once a PC as been imaged via PXE boot, it will automatically be able to connect to the salt master - after which you can highstate a pc to your desired state.

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

Sometimes, as you work with salt, a minion could have its salt-minon service up but not be returning responses to the saltmaster. In that case, using test.ping can give it a "kick" so to speak, and get it talking to the saltmaster again.

![salt ping kick](assets/content/automatingSecurelyWithSalt/img/7-1.png)

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

Say you want to copy a file that has certain configurations.. In this simple example, let's say want to put a file in the minion's root directory that says "I'm an Orange" when the file is read. 

So to do this, you need a few things:
1. A file called orange.txt with the text "I'm an Orange" that sits somewhere within /srv/salt or one of its subdirectory on the saltmaster
2. An applesAndOranges.sls (the naming will be explained later but basically you need a .sls to tell salt which file to pick up on the saltmaster and where to put it on the salt-minion)
3. I'd then need to include the applesAndOranges.sls into top.sls

First, create a directory, alongside top.sls. In this example, for simplification purposes, it is called "directory".

![directory folder](assets/content/automatingSecurelyWithSalt/img/15.png)

The, create the applesAndOranges.sls file, along with a "files" directory.

In a production environment, many times, sls's that need certain files have the files within a sub directory next to that .sls, albeit with better and more specific naming conventions than just "files".

![directory folder](assets/content/automatingSecurelyWithSalt/img/16.png)

Within the files directory, create an oranges.txt file:

![oranges.txt](assets/content/automatingSecurelyWithSalt/img/17.png)

Within the applesAndOranges.sls file, include the following content:

![applesAndOranges.sls](assets/content/automatingSecurelyWithSalt/img/18.png)

Let's break this down line by line:

1. copyOranges is the name of this set of commands. You can name this whatever you want but it's better if it is a descriptive name.
2. file.managed is the actual command. It manages the file and ensures the Minion has the file set up correctly based on the parameters given below.
3. The name you put is the path you want the file to show up in on the salt minion.
4. The source = where the file is on the saltmaster. In this case, oranges.txt file is within the "files" folder of the "directory" folder in the salt root dir. salt:// means the root directory of salt based on the saltmaster configurations. By default, that is /srv/salt. So by typing salt:// you are effectively saying /srv/salt.
5. User - the owner of the file
6. Group - the group that owns the file
7. The permissions for the file. A permission of '0644' means that the owner can read and write while the group and other users can ONLY read the file.

NOTE: See how file.managed is indented by TWO spaces? And then, see how the sub-options for file.managed is indented by 4 SPACES? 

It is critical that you use spaces for indentation and not tabs as salt will definitely complain and throw an error about tabs being used in lieu of spaces.

Here is a visual for those who are more visually inclined:

![applesAndOranges.sls](assets/content/automatingSecurelyWithSalt/img/19.png)

Now that the applesAndOranges.sls file has been created, let's test it by running it on ONE minion with this command: "salt '\<minion>' state.sls applesAndOranges"

Note that here, we don't include .sls in the applesAndOranges name because we are already calling state.sls.

If it is successful, you'll see something like this:

![applesAndOranges.sls](assets/content/automatingSecurelyWithSalt/img/20.png)

If it fails, it could be because you have a syntax error (things aren't indented properly using spaces, no tabs), or it can't find the file so your source path may be wrong, or there could be some typos in the .sls. 

Here's an example of a syntax error:

![applesAndOranges.sls](assets/content/automatingSecurelyWithSalt/img/20.5.png)

Syntax troubleshooting could be its own wiki, so to remain focused on Basic Salt, I'll refrain from going into detail about that in this wiki.

Assuming it was successful, you can then go to top.sls and add applesAndOranges.sls in there so that when you highstate it, applesAndOranges.sls will be run for sure, among all your other .sls files that you include.

Since you know for sure that this works, you can add it to highstate like so:

![adding applesAndOranges.sls to highstate](assets/content/automatingSecurelyWithSalt/img/21.png)

You can then run highstate on one minion again to see if everything runs properly, and if so, you're good to go!

Moving on, let's talk about how you can use Grains and Jinja to target systems.

---
### Targeting Systems with Grains and Jinja

First, let's go through some definitions:

- Grains - These contain info about a device like OS, Kernel, and a bunch of other stuff like that. This is useful if, say, you want to target only certain OS but not others. However, that's not all. You can set custom grains and target those as well.

- Jinja - Syntax for writing targeted code - usually used with grains - and most popularly used with if/else statements. 
Example: If X os, install package A, else-if Y os install Package B, else install Package C.

Linux distros, for example, comes in different flavor such as Debian, RHEL (Red Hat Linux), etc... where packages and commands are likely to be different. Then of course, you have your Windows vs your Macs, etc. All these systems get packages installed or configurations set in different ways, therefore if you have a wide array of OS types in your fleet of salt minions, utilizing grains and jinja is a must.

For example, take the Freeipa package (Freeipa is an Authentication software)... The Debian Version of that package is called "freeipa-client", while on RHEL, it is called "ipa-client" - so here's where Jinja is useful in that you can use it to install different versions of the same package on different distros.

So if you were to have a sls that installs the package 'freeipa-client', it would run on all Debian minions but fail on a RHEL Minions.

Another use case would be that different distros could have different configurations for say.. ".ssh" or ".bashrc" or different configs for different types of software (like NoMachine, and so on). A Jinja/Grain targeted setup would come into use in these scenarios.

Next, lets proceed with a simple example - the oranges.sls that we had earlier... What if we want our Ubuntu servers to have apples.txt and our Kali (or RHEL or whatever other OS) vms to have oranges.txt, we can easily arrange that with Grains and Jinja.

To see what existing grains are available, run "salt '/<minion>' grains.items".

This would give you a list of all the grains you can target. If you're on a server where you can't scroll up or down, you can run "salt '/<minion>' grains.items | less" or "salt '/<minion>' grains.items >> grains.txt" to export the output into the "grains.txt" file and read it with "less grains.txt" so that you can scroll up and down.

![grains.items](assets/content/automatingSecurelyWithSalt/img/24.png)

Say you only want to see one grain category, like the OS for example, you can run "salt '*' grains.item os" to see what OS's you have for example.

![grains.item os](assets/content/automatingSecurelyWithSalt/img/22.png)

Note that in this case, we are using grains.item NOT grains.itemS, as if you use grains.itemS, it will show ALL grains regardless of what you put after it.

Once you've decided on what grains to target, you can then include them in your .sls files.

So let's get right into that with this example...

Within the /srv/salt/directory/files directory, I created a "apples.txt" with the content of "This is an apple..."

Then I updated the applesAndOranges.sls file so that it looks like this:

![grains.item os](assets/content/automatingSecurelyWithSalt/img/23.png)

- The "if" line is saying "If the os grain is 'Ubuntu' then copy "/srv/salt/directory/files/apples.txt" from the saltmaster to /apples.txt on the salt minion".

- The elif line means "Else if (or 'otherwise, if' in plain english)" so "If the os grain is 'Kali', copy the "/srv/salt/directory/files/oranges.txt" from the saltmaster to /oranges.txt on the salt minion."

- The "endif" statement tells salt that you are done with the if/else statement. If you don't include that, Salt will throw an error when you run the .sls.

- It is important to note that there is a space on BOTH sides between the {%%}. If you get a syntax error, it could potentially because you forgot a space on one side or the other.

If you want to go through the rabbit hole of Jinja syntax, checkout the official Saltstack Jinja Wiki [here](https://docs.saltproject.io/salt/user-guide/en/latest/topics/jinja.html).

You can use grains and jinja targeting in top.sls - for example, where some devices will need some of your .sls's but not others, depending on your setup and minion fleet. 

If you have a company with multiple sites across the world, maybe the devices in one country would have some different .sls for the set up in that country compared to a base in a different country - especially if different sysadmins of each site have things set up slightly differently and customized to their site with some overlapping elements integral to the whole company.

Moving on, lets take a look at how to use Pillars for storing secrets in Salt!

---
### Adding User to Minion with GPG Encrypted Password in Pillar

(introduce the concept of pillars. What is a pillar?)

(make a note about making the /srv/pillar directory)
(also note how pillars also have their own top.sls which is different from /srv/salt's top.sls but functions similarly with respect to its own surrounding .sls's in the /srv/pillar directory.)

Before we begin, run "gpg --version" and ensure that it is on version 1 like so (this will save you HOURS of troubleshooting!):

![gpg ver](assets/content/automatingSecurelyWithSalt/img/25.png)

This is CRITICAL because, as pointed out in Claus Conrad's ["Using the GPG renderer to protect Salt pillar items" Blogpost](https://www.clausconrad.com/blog/using-the-gpg-renderer-to-protect-salt-pillar-items/), GPG Version 2 does NOT work for use with Salt Pillars!

#### Here's a Rough overview of steps:

1. Remove gpg2 install gnupg1
2. Symlink /gpg1 to gpg
3. Create the /etc/salt/gpgkeys directory
4. Generate the gpgkeys - this is the key that will be used to encrypt stuff.
5. Run the command to encrypt the password AND >> it into the .sls file so that you can simply re-space it - especially if your saltmaster is a device where you cannot copy and paste.
6. Change the owner to salt:salt and set the permissions for /etc/salt/gpgkeys properly. Too permissive = gpg will complain.
7. Write the sls that your credentials will go into in /srv/pillar
8. Create the top.sls for /srv/pillar and add the .sls with the credentials to it. 
9. Use the pillar in one of your /srv/salt's .sls file - ensure you use "- hash_password: True" for safety, as there are times if you don't include that it prints the password in plaintext on the job output and is then stored in the job cache which defeats the point of using a pillar in the first place.
10. Include the .sls file that contains the logic that uses the pillar secrets into srv/salt's top.sls for highstate.

#### Now, onto the details:

1. Remove gpg2 install gnupg1

To do this run these two commands:

```
apt remove gpg

apt install gnupg1

```

2. Symlink /gpg1 to gpg

A symlink is a link that points to a different file so in this case by telling linux that gpg = gpg1, we can type 'gpg' rather than gpg1 when using gpg commands.

To do this, run:

```
cd /usr/bin

ln -s gpg1 gpg

```

3. Create the /etc/salt/gpgkeys directory

This directory is for storing gpgkeys and will be the "home" of gpg.

```
mkdir -p /etc/salt/gpgkeys

```

4. Generate the gpgkeys - this is the key that will be used to encrypt stuff.

To do that, run this command:

```
# Here, we define /etc/salt/gpgkeys as the home directory for gpg and tells it to generate a key for it.
gpg --gen-key --homedir /etc/salt/gpgkeys

```
When asked what kind of key you want, Type '1' (for RSA) and press enter

![key type](assets/content/automatingSecurelyWithSalt/img/31-1.png)

For the keysize, leave at default and press enter and type 'Y' when prompted for confirmation.

![confirm](assets/content/automatingSecurelyWithSalt/img/31-2.png)

When asked for a real name, put something like 'saltmaster' for convenience. The name will be used later when we encrypt the key, so it should be something easy to type and easy to remember - preferably with no spaces.

When prompted for an email, you can put something random as it does not seem to affect the decryptability of GPG, then type 'O' when prompted

![user details](assets/content/automatingSecurelyWithSalt/img/31-3.png)

When asked for a passphrase, leave it blank and press enter twice. This is CRITICAL since Salt won't be able to type in a passphrase as a person would, while decrypting the secrets non-interactively - thus if a password is set here, it will fail when decrypting, as mentioned in Claus Conrad's Blogpost.

![user details](assets/content/automatingSecurelyWithSalt/img/31-4.png)

After it generates the keys, it'll output something like this:

![user details](assets/content/automatingSecurelyWithSalt/img/31-5.png)

Once you see that, you should be ready to encrypt!

5. Run the command to encrypt the password AND >> it into the .sls file so that you can simply re-space it - especially if your saltmaster is a device where you cannot copy and paste.

To encrypt, run the following command - BUT keep in mind, this will leave the password in your shell history IF you do NOT put a space BEFORE the echo!

If you forget the space, run the "history" command to find the line of history with the password in plain text and run "history -d \<line number>"

```
echo -n "yourPasswordHere" | gpg --homedir /etc/salt/gpgkeys/ --armor --batch --trust-model always --encrypt -r saltmaster >> /srv/pillar/secret.sls
```

Replace "yourPasswordHere" with the password you want to encrypt.
Replace "saltmaster" with the name that you used when you created the gpg user
Replace /srv/pillar/secret.sls with the name of the .sls you want or you can create it like this and rename the .sls later if you'd like.

Once you're done, cat the .sls file to ensure that the hash is in there like so:

![user details](assets/content/automatingSecurelyWithSalt/img/32.png)

6. Change the owner to salt:salt and set the permissions for /etc/salt/gpgkeys properly. Too permissive = gpg will complain.

We need to change the owner of the /etc/salt/gpgkeys directory because the saltmaster runs as the salt user. If we leave /etc/salt/gpgkeys as root, then only root can access it.
We also need to change the permissions for the folder /etc/salt/gpg to 700 and the contents of /etc/salt/gpg to 600 otherwise GPG may decide not to decrypt due to insecure permissions.

To do that, run these commands:

```
# The reason we are using chown -R here is to ensure that all items in the /etc/salt/gpgkeys directory are owned by salt. The -R is recursive which ensures nothing within that directory is missed.

chown -R salt:salt /etc/salt/gpgkeys

# This makes it so that the owner (in this case, salt) has FULL access to the /etc/salt/gpgkeys directory while the group(s) and others users have no access.

chmod 700 /etc/salt/gpgkeys

# This makes it so that the owner (in this case, salt) has ONLY read and write access to the CONTENTS of the /etc/salt/gpgkeys directory while the group(s) and others users have no access.

chmod 600 /etc/salt/gpgkeys/*

```

7. Write the sls that your credentials will go into in /srv/pillar

Here's an example of what that looks like:

![sls with gpg hash](assets/content/automatingSecurelyWithSalt/img/27.png)

CRITICAL things to take note of:

- You MUST include a yaml/gpg shebang at the top of the .sls where your hash is stored so that the salt pillar knows to use gpg to decrypt it.
- Include a '|' after "password:" but do NOT add any spaces after the '|'
- You MUST include 4 spaces, not tabs for EVERY line of the password hash starting from "BEGIN PGP" to "END PGP"

```
#!yaml|gpg

add_admin_user:
# TWO SPACES for indentation
  username: adminuser
  password: |
# BEGINNING HERE, we have FOUR spaces - again, do NOT use TABs here!
    -----BEGIN PGP MESSAGE-----
    hQEMAwd3xpOZWIUhAQgAsB16b0Mh8RDGMZjLIbp1sgq7jVUB1pqNKVmusRiruSPT
    f56PLLQDFAt1UdIpYapS5BmwZFrBw4NbaO4S1FxQyxO1CXz/o8fhDP8kuJLTB98k
    pXD/W2Mu4LZe01PkuF4FMKggmjiGy4M98heSbezkVK0v2CepOgr4raTp2I6hhqHg
    tz85RUjaGRAxtk0EOvoinugYoeQom8Im1YHXZ9rzJoa9vkddNyGS1K7PFSFH2sAx
    tCaKPdoPS9bLlRE6JlEcznO89TziVoAQ/rzU8SSTQ3lXAeilbJtnU4EFoMLcIqdc
    l8PExvW+zg1aA9h12S2jSt0OnjTeoCfZTNYpd5kvTNJGAXTmxxrpbwxJLIZeheSU
    XQXAP+fwqdx0LnSolo4VtblBGynhEr/K/e5IpBFObzQJtLwoYtLQ5QtfLB6vnH3c
    wQZ5Pf+cLg==
    =YaoR
    -----END PGP MESSAGE-----

```

8. Create the top.sls for /srv/pillar and add the .sls with the credentials to it. You cannot use the pillar if its not in /srv/pillar's top.sls as it won't be able to find it

The syntax is the same as /srv/salt's top.sls, except that it's located in /srv/pillar instead.

![/srv/pillar's top.sls](assets/content/automatingSecurelyWithSalt/img/28.png)

9. Use the pillar in one of your /srv/salt's .sls file

Sample:

![using the pillar in an sls](assets/content/automatingSecurelyWithSalt/img/33.png)

Here, at the top a jinja variable was used to define "username" so as to keep things DRY, adhering to the concept of not repeating yourself.

Ensure you use "- hash_password: True" for security, as there are times if you don't include that it prints the password in plaintext on the job output and is then stored in the job cache which defeats the point of using a pillar in the first place.


The syntax for the pillar is as follows:

```

{{ pillar['pillar_SLS_File_With_HASH']['SubItem'] }}

```

![using the pillar in an sls](assets/content/automatingSecurelyWithSalt/img/34.png)

Now to test, you can run the .sls against one minion.

If it's successful, you should see an out put like this:

![successful sls with pillar run](assets/content/automatingSecurelyWithSalt/img/35.png)

Note that if you run into an error like "can't open /etc/salt/gpgkeys/...", the first thing you should try is to re-run the chown and chmod commands from step 6 again as gpg may have created more files in there that you need to chmod and chown on so that salt can read them.

Here is a sample of the error you may run into:

![gpg ver](assets/content/automatingSecurelyWithSalt/img/26.png)

If you run into a Jinja Variable error, then you either have a typo in your syntax somewhere in /srv/salt's .sls or /srv/pillar's .sls or the pillar credential's .sls was not added to /srv/pillar's top.sls - in any case you'd want to go through the error and figure out where the issue lies.

In this example, the error was caused by a typo in addSysadminUser.sls - which was fixed after remediating the typo.

![typo error](assets/content/automatingSecurelyWithSalt/img/29.png)

10. Include the .sls file that contains the logic that uses the pillar secrets into srv/salt's top.sls for highstate

Once you've tested the sls on a minion and confirmed that it works as expected, add it to top.sls to be run with highstate and deployed on the rest of your salt minion fleet.

![added to top.sls](assets/content/automatingSecurelyWithSalt/img/30.png)

And with that, you have a working Pillar for keeping secrets in Salt!

As this is the most tech heavy section of this wiki, here is a supplementary video to guide you through all these steps for setting up and using the pillar.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nLerynLTafg?si=oSfRAHs73t4rJMth" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
## Outro

As you can see, what we are doing here is just barely the tip of the iceberg when it comes to salt! 

Due to the many ways you can configure salt, the world is your oyster - so I highly recommend that you read the official documentation over at [https://docs.saltproject.io/en/3007/contents.html](https://docs.saltproject.io/en/3007/contents.html) to learn more about what salt can do.