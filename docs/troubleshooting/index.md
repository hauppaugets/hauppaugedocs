---
title: Troubleshooting
sidebar_position: 3
---

This section will include common troubleshooting guides. 

## Extended Logs
Open WinTV and go to settings/advance options and under the Logs section, check **Enable Logging (requires reboot)**.  

Click ok, close the software and Reboot the computer. When it comes back up reproduce the issue then close the software. 

Go to C:\Users\Public\WinTV\

Right-click the Logs folder and on the menu that comes up select **Send To** and select **Compressed (zipped) folder**. 

In the same location you are in now, you should now have a Logs.zip file.

Please provide that to us over email. 

## Software Clean Uninstall - Reinstall

The following directions will wipe out WinTV or Hauppauge Capture cleanly. 

Download and run the following program 

https://s3.amazonaws.com/hauppauge/utilities/hcwclear.exe

Clear will wipe out everything. Just leave the default settings and wait for the black screen to ask you to restart the computer please restart.

If hcwclear.exe has popups that it can’t delete some items, click no about seeing more information. 

When the system comes back up please browse to the following folders and if you see any WinTV or Hauppauge folder delete it. 

C:\Users\Public\

C:\Program Files or Program Files (x86)\

Also please go to this folder which is a hidden folder and delete the Hauppauge folder. 

C:\ProgramData\

Information on how to show hidden folders in Windows 

Show Hidden Files and Folders in Windows 7, 8.x, 10, or Vista

http://www.howtogeek.com/howto/windows-vista/show-hidden-files-and-folders-in-windows-vista/ 

Show Hidden Files and Folders in Windows 11
https://www.howtogeek.com/743079/how-to-show-hidden-files-on-windows-11/ 

After this you can now reinstall the software. 
