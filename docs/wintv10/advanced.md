---
title: Advanced Information
sidebar_position: 9
---

## Advanced Information

### Folders used by WinTV v10

On installation the following three folders are specified.

### Program Folder

The executable files by default are stored into this folder:\
C:\Program Files (x86)\WinTV

### Data Directory

Configuration settings, scanning tables and log files are stored in the data directory.\
C:\Users\Public\WinTV

### Recordings Directory

TV recordings and snapshots are saved into the recordings directory.\
C:\Users\Public\Videos

### Channel Database

The channel database is stored in the subfolder "Channel Database" in the Data Directory.\
C:\Users\Public\WinTV\Channel Database\
Filename: hcwChanDB_5.mdb

The channel database holds the channel list, favorites and scheduled recordings.

### Backup Database

A backup channel database is also created in case WinTV 10 is reinstalled.\
It is located at C:\ProgramData\Hauppauge

***Note**: These are windows hidden folders, you will have to display hidden files and folders to view them.*

### Command Line Parameters for WinTV10.exe

WinTV10.exe can be run with several command line parameters to enable certain functions. Some of these functions are already added to the Start menu under "Hauppauge WinTV" / "Advanced Options". Also on the Desktop shortcut "WinTV Advance Options"

<table>
<colgroup>
<col />
<col />
<col />
</colgroup>
<thead>
<tr>
<th><strong>Program call with parameter</strong></th>
<th><strong>Name of shortcut in Start menu</strong></th>
<th><strong>Function</strong></th>
</tr>
<tr>
<th>WinTV10.exe -channel:4</th>
<th>-</th>
<th>Starts WinTV10 on the channel with number 4 (example).</th>
</tr>
<tr>
<th>WinTV10.exe -emptydb</th>
<th>Empty Channel Database</th>
<th>Deletes all data in the channel database: scanned channels, defined favorites, scheduled recordings, device information.<br />
Note: Removal of this data happens without further confirmation.</th>
</tr>
<tr>
<th>WinTV10.exe -multi</th>
<th>-</th>
<th>Opens another instance of WinTV10. To explain: If WinTV10 is already running, and you double-click on the WinTV10 icon again, normally the already running program is just brought into foreground. But if WinTV8.exe is run with the parameter "-multi", another WinTV10 window is opened. So you could watch live TV in one window and play a recording in a second window. On a dual tuner product you can watch live TV in two WinTV10 windows.</th>
</tr>
<tr>
<th>WinTV10.exe -recordings</th>
<th>Open Recordings (only)</th>
<th>Only opens the Recordings tab of the scheduler.</th>
</tr>
<tr>
<th>WinTV10.exe -scheduler</th>
<th>Open Scheduler (only)</th>
<th>Only opens the Scheduler tab of the scheduler.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

It is recommended to create a new WinTV10 icon and add the command line parameter under its properties. Following an example with the parameter "-multi":

1. Create a copy of the WinTV10-Icon on your desktop, by selecting the icon and pressing \<Ctrl\> C ("Copy"), and then \<Ctrl\> V ("Paste").

2. Right-click on the new icon and select "Properties" from the context menu.

3. Select the "Shortcut" tab. In the "Target:" field, after the program call add a space, and then the parameter, like this:\
   "C:\Program Files\WinTV\WinTV10\WinTV10.exe" -multi

Now, each time you double click on the new icon, a new WinTV10 window will be opened.