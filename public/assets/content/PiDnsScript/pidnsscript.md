---
title: Pi Hole DNS Script
author: Mitsuki Youko
date_created: 2025-04-19
tag: scripts
blurb: A Script to point your Linux Desktops to your Raspberry Pi's Pi Hole.
---

## Note: This script assumes you have a Raspberry Pi and that you have Pi Hole Set up on your Raspberry Pi Already.

This script ensures that your Linux Desktop is pointed at your Pi Hole for DNS.

If you anticipate running this script for multiple machines, I would recommend deploying it via something like Ansible/Salt/Puppet or some other automation of that nature.

[Here](https://github.com/mitsukiyouko555/saltstack), I used Saltstack to deploy it to my VMs.

This does not appear to work on Ubuntu SERVERS but it does work on Ubuntu Desktop, as well as Kali Linux.

The reason it does not work on Ubuntu servers is due to the difference in syntax when getting the connection name to show up.

![PiDnsScript](assets/content/PiDnsScript/img/script.png)


## Line By Line Breakdown:

---

### 1. #!/bin/bash

^ This is what is known as the Shebang. It tells Linux what binary or command to use when running the program.
In this case, as we are coding in bash, this tells Linux that our bash is in the /bin/bash directory.

---

### 2. con=$(nmcli -t -f NAME connection show)

![2](assets/content/PiDnsScript/img/2.jpg)

^ The command shows the list of network connections that your machine has, such as eth0, for example..
For VMs, there's generally a few different connections.

This line is important because the connection NAME for each vm may vary and to point it at the DNS, we need the right name..

For example, one Ubuntu VM may have eth98 while another Ubuntu VM, while the OS is the same, may have a different name, such as eth07 - so this value cannot be hardcoded.

---

### 3. while IFS= read -r line; do

^ This is similar to a while loop in that it loops though all the results and gets each line

---

### 4. #echo "Connection: $line"

^ This was for testing purposes - to ensure that the results of the variable "line" was what I expected it to be.

---

### 5. nmcli con mod "$line" ipv4.ignore-auto-dns yes

![5](assets/content/PiDnsScript/img/5.jpg)

^ This line is modifying the output of the line that we got from running "nmcli -t -f NAME connection show" so it basically says for every connection that is being listed, Ignore the automatically assigned DNS (because we want it to point to the one we are setting manually.)

---

### 6. nmcli con mod "$line" ipv4.dns "<Raspberry Pi's IP Address> 8.8.8.8 1.1.1.1"

![6](assets/content/PiDnsScript/img/6.jpg)

^ This says modify the connection in the line variable and update the IPV4 DNS to point to our Raspberry Pi's IP address - thus making it use Pi Hole for the DNS.

In addition to that, 8.8.8.8 and 1.1.1.1 are Google and Cloudflare's respective DNS's.

These are there as fall backs so that if your Pi Hole is down, you can at least still connect to the internet via Google/Cloudflare's DNS.

---

### 7. done <<< "$con"

^ This means once it's looped through all the connections and applied the steps above, the while loop can be exited.

---

### 8. service NetworkManager restart

![8](assets/content/PiDnsScript/img/8.jpg)

^ This restarts the Network Manager service so that the new DNS settings will reflect properly.

---

### 9. cat /etc/resolv.conf

![9](assets/content/PiDnsScript/img/9.jpg)

^ This shows the contents of the /etc/resolv.conf file, which is where the DNS info is stored.

This is so that we can confirm that the settings have been set properly.
