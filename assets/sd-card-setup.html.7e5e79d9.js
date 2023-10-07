import{_ as a}from"./sd-card-formatter.7ed06060.js";import{_ as c,r as s,o as d,c as u,b as l,w as o,a as e,d as t}from"./app.440e8313.js";const h={},m=e("p",null,"This page is for preparing your SD card for your device. In the process, we'll format the SD card and check the card for errors.",-1),p=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"Make sure to backup your SD card contents BEFORE following this. Your SD card will be WIPED in the process.")],-1),_=e("h3",{id:"section-i-formatting-your-sd-card-with-sd-formatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-i-formatting-your-sd-card-with-sd-formatter","aria-hidden":"true"},"#"),t(" Section I - Formatting your SD card with SD Formatter")],-1),f=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"This section formats the SD card to the specifications by the SD Card Association. This can fix many issues that may occur with running homebrew applications.")],-1),w=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,[t("Any 64GB or larger SD cards will be formatted to "),e("code",null,"exFAT"),t(" in this process. You "),e("em",null,"must"),t(" follow Section II to re-format to "),e("code",null,"FAT32"),t(".")])],-1),g={href:"https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://web.archive.org/web/20220626204124/https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/",target:"_blank",rel:"noopener noreferrer"},y=e("li",null,"Accept the End User License Agreement to start the download",-1),v=e("li",null,[t("Run "),e("code",null,"SD Card Formatter Setup"),t(" (the "),e("code",null,".exe"),t(" file) in the downloaded "),e("code",null,".zip"),t(" file with Adminstrator privileges, then install the program")],-1),S=e("li",null,[t("Run "),e("code",null,"SD Card Formatter"),t(" from the Start Menu with Adminstrator privileges")],-1),D=e("li",null,"Select your SD card",-1),k=e("li",null,[t("Make sure the "),e("code",null,"Quick Format"),t(" check box is checked")],-1),x=e("li",null,[t("Press "),e("code",null,"Format"),t(" to start the format process "),e("img",{src:a,alt:"Screenshot of SD Card Formatter on Windows 11"})],-1),I=e("h3",{id:"section-ii-formatting-your-sd-card-with-guiformat",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-ii-formatting-your-sd-card-with-guiformat","aria-hidden":"true"},"#"),t(" Section II - Formatting your SD card with GUIFormat")],-1),F=e("p",null,"This section formats SD cards larger than 32GB to FAT32.",-1),T=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"If your SD card is 32GB or less in capacity, skip to Section III.")],-1),A={href:"http://ridgecrop.co.uk/index.htm?guiformat.htm",target:"_blank",rel:"noopener noreferrer"},C=e("ul",null,[e("li",null,"Click on the picture on the website to download the app")],-1),B=e("li",null,"Run GUIFormat with Administrator permissions",-1),O=e("li",null,"Select your drive letter",-1),R=e("li",null,[t("Set the "),e("code",null,"Allocation size unit"),t(" to "),e("code",null,"32768"),e("ul",null,[e("li",null,"If this is too large for your SD, set it to the highest one that works")])],-1),E=e("li",null,[t("Make sure the "),e("code",null,"Quick Format"),t(" check box is checked")],-1),M=e("li",null,"Start the format process",-1),G=e("p",null,[e("img",{src:"https://user-images.githubusercontent.com/1000503/83831499-8f330b80-a6b5-11ea-9ab9-ec2196150751.png",alt:""})],-1),P=e("h3",{id:"section-iii-checking-for-errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-iii-checking-for-errors","aria-hidden":"true"},"#"),t(" Section III - Checking for errors")],-1),L=e("ol",null,[e("li",null,[t("Go to the properties window of your SD card "),e("ul",null,[e("li",null,[e("code",null,"Windows Explorer"),t(" -> "),e("code",null,"This PC"),t(" -> Right click your SD card -> "),e("code",null,"Properties")])])]),e("li",null,[t("In the tools tab, Select "),e("code",null,"Check Now")]),e("li",null,[t("Check both "),e("code",null,"Automatically fix file system errors"),t(" and "),e("code",null,"Scan for and attempt recovery of bad sectors")]),e("li",null,"Start the checking process")],-1),W=e("p",null,"This will scan the SD card and correct any errors it finds.",-1),N=e("h3",{id:"section-iv-checking-sd-card-read-write",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-iv-checking-sd-card-read-write","aria-hidden":"true"},"#"),t(" Section IV - Checking SD card read/write")],-1),V={href:"http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip",target:"_blank",rel:"noopener noreferrer"},U={href:"https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip",target:"_blank",rel:"noopener noreferrer"},K=e("li",null,"It can also be extracted on an external device as long as that external device isn't your SD card",-1),z=e("li",null,[t("With your SD card inserted into your computer, run "),e("code",null,"h2testw.exe")],-1),Y=e("li",null,"Select which language you'd like to see h2testw in",-1),$=e("li",null,"Set your SD card's drive letter as your target",-1),Q=e("li",null,[t("Ensure "),e("code",null,"all available space"),t(" is selected")],-1),X=e("li",null,[t("Click "),e("code",null,"Write + Verify")],-1),H=e("ul",null,[e("li",null,"Wait until the process is completed")],-1),J=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[t("If the test shows the result "),e("code",null,"Test finished without errors"),t(", your SD card is healthy and you can delete all "),e("code",null,".h2w"),t(" files on your SD card.")])],-1),Z=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it!")],-1),j=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"If TWiLight Menu++ fails to start after following this method, please follow the Windows method instead, by either rebooting to Windows or running a Windows Virtual Machine")],-1),q=e("h3",{id:"section-i-formatting-your-sd-card",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-i-formatting-your-sd-card","aria-hidden":"true"},"#"),t(" Section I - Formatting your SD card")],-1),ee=e("ol",null,[e("li",null,[t("Make sure your SD card is "),e("strong",null,"not"),t(" inserted into your Linux machine")]),e("li",null,"Launch the Linux Terminal"),e("li",null,[t("Type "),e("code",null,'watch "lsblk"')]),e("li",null,"Insert your SD card into your Linux machine"),e("li",null,"Observe the output. It should match something like this:")],-1),te=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
\u2514\u2500mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),le=e("ol",null,[e("li",null,[t("Take note of the device name. In our example above, it was "),e("code",null,"mmcblk0p1"),e("ul",null,[e("li",null,[t("If "),e("code",null,"RO"),t(" is set to 1, make sure the lock switch is not slid down")]),e("li",null,[t("Make sure you're targetting the "),e("strong",null,"partition"),t(", "),e("code",null,"mmcblk0p1"),t(" not "),e("code",null,"mmcblk0")])])]),e("li",null,"Hit CTRL + C to exit the menu"),e("li",null,[t("Follow the instructions relevant to your SD card's capacity: "),e("ul",null,[e("li",null,[t("2GB or lower: "),e("code",null,"sudo mkdosfs /dev/(device name from above) -s 64 -F 16"),e("ul",null,[e("li",null,"This creates a single FAT16 partition with 32 KB cluster size on the SD card")])]),e("li",null,[t("4GB or higher: "),e("code",null,"sudo mkdosfs /dev/(device name from above) -s 64 -F 32"),e("ul",null,[e("li",null,"This creates a single FAT32 partition with 32 KB cluster size on the SD card")])])])])],-1),ne=e("h3",{id:"section-ii-using-f3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-ii-using-f3","aria-hidden":"true"},"#"),t(" Section II - Using F3")],-1),oe={href:"https://github.com/AltraMayor/f3/archive/v7.2.zip",target:"_blank",rel:"noopener noreferrer"},ie=e("li",null,"Launch the terminal in the F3 directory",-1),se=e("li",null,[t("Run "),e("code",null,"make"),t(" to compile F3")],-1),re=e("li",null,[t("With your SD card inserted and mounted, run "),e("code",null,"./f3write <your sd card mount point>"),e("ul",null,[e("li",null,"Wait until the process is complete. See below for an example output:")]),e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1),ae=e("li",null,[t("Run "),e("code",null,"./f3read <your sd card mount point>")],-1),ce=e("ul",null,[e("li",null,[t("Wait until the process is complete. See below for an example output:"),e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`$ ./f3read /media/michel/6135-3363/
                  SECTORS      ok/corrupted/changed/overwritten
Validating file 1.h2w ... 2097152/        0/      0/      0
...
Validating file 30.h2w ... 1491904/        0/      0/      0

   Data OK: 29.71 GB (62309312 sectors)
Data LOST: 0.00 Byte (0 sectors)
            Corrupted: 0.00 Byte (0 sectors)
   Slightly changed: 0.00 Byte (0 sectors)
         Overwritten: 0.00 Byte (0 sectors)
Average Reading speed: 9.42 MB/s
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])])],-1),de=e("hr",null,null,-1),ue=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[t("If the test shows the result "),e("code",null,"Data LOST: 0.00 Byte (0 sectors)"),t(" your SD card is healthy and you can delete all "),e("code",null,".h2w"),t(" files on your SD card.")])],-1),he=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it!")],-1),me=e("h3",{id:"section-i-formatting-your-sd-card-with-sd-formatter-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-i-formatting-your-sd-card-with-sd-formatter-1","aria-hidden":"true"},"#"),t(" Section I - Formatting your SD card with SD Formatter")],-1),pe=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"This section formats the SD card to the specifications by the SD Card Association. This can fix many issues that may occur with running homebrew applications.")],-1),_e=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,[t("Any 64GB or larger SD cards will be formatted to "),e("code",null,"exFAT"),t(" in this process. You "),e("em",null,"must"),t(" follow Section II to re-format to "),e("code",null,"FAT32"),t(".")])],-1),fe={href:"https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/",target:"_blank",rel:"noopener noreferrer"},we=e("ul",null,[e("li",null,"Accept the End User License Agreement to start the download")],-1),ge=e("li",null,[t("Run "),e("code",null,"Install SD Card Formatter"),t(" (the "),e("code",null,".mpkg"),t(" file) in the downloaded "),e("code",null,".zip"),t(" file")],-1),be=e("li",null,[t("Run "),e("code",null,"SD Card Formatter")],-1),ye=e("li",null,"Select your SD card",-1),ve=e("li",null,[t("Make sure the "),e("code",null,"Quick Format"),t(" check box is checked")],-1),Se=e("li",null,"Start the format process",-1),De=e("h3",{id:"section-ii-formatting-your-sd-card-with-disk-utility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-ii-formatting-your-sd-card-with-disk-utility","aria-hidden":"true"},"#"),t(" Section II - Formatting your SD card with Disk Utility")],-1),ke=e("p",null,"This section formats SD cards larger than 32GB to FAT32.",-1),xe=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"If your SD card is 32GB or less in capacity, skip to Section III.")],-1),Ie=e("h4",{id:"os-x-el-capitan-10-11-and-later",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#os-x-el-capitan-10-11-and-later","aria-hidden":"true"},"#"),t(" OS X El Capitan (10.11) and later")],-1),Fe=e("ol",null,[e("li",null,"Launch the Disk Utility application"),e("li",null,[t("Select "),e("code",null,"Show All Devices"),t(" in the top-left "),e("code",null,"View"),t(" panel")]),e("li",null,[t("Select your SD card from the sidebar "),e("ul",null,[e("li",null,"Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!")])]),e("li",null,[t("Click "),e("code",null,"Erase"),t(" at the top")]),e("li",null,[t("Ensure that "),e("code",null,"Format"),t(" is set to "),e("code",null,"MS-DOS (FAT32)"),e("ul",null,[e("li",null,[t("On El Capitan (10.11) through Catalina (10.15) choose "),e("code",null,"MS-DOS (FAT)")])])]),e("li",null,[t("Ensure that "),e("code",null,"Scheme"),t(" is set to "),e("code",null,"Master Boot Record"),e("ul",null,[e("li",null,[t("If "),e("code",null,"Scheme"),t(" does not appear, click "),e("code",null,"Cancel"),t(" and make sure to choose the device instead of a volume")])])]),e("li",null,[t("Click "),e("code",null,"Erase"),t(", then click "),e("code",null,"Close")])],-1),Te=e("h4",{id:"os-x-yosemite-10-10-and-earlier",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#os-x-yosemite-10-10-and-earlier","aria-hidden":"true"},"#"),t(" OS X Yosemite (10.10) and earlier")],-1),Ae=e("ol",null,[e("li",null,"Launch the Disk Utility application"),e("li",null,[t("Select your SD card from the sidebar "),e("ul",null,[e("li",null,"Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!")])]),e("li",null,[t("Click "),e("code",null,"Partition"),t(" at the top "),e("ul",null,[e("li",null,[t("If "),e("code",null,"Partition"),t(" does not appear, make sure to choose the device instead of a volume")])])]),e("li",null,[t("Ensure that "),e("code",null,"Partition Layout"),t(" is set to "),e("code",null,"1 Partition")]),e("li",null,[t("Ensure that "),e("code",null,"Format"),t(" is set to "),e("code",null,"MS-DOS (FAT)")]),e("li",null,[t("From the Options button (below the partition table), select "),e("code",null,"Master Boot Record"),t(".")]),e("li",null,[t("Click "),e("code",null,"OK"),t(" -> "),e("code",null,"Apply"),t(" -> "),e("code",null,"Partition")])],-1),Ce=e("h3",{id:"section-iii-using-f3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-iii-using-f3","aria-hidden":"true"},"#"),t(" Section III - Using F3")],-1),Be=e("li",null,"Open Terminal",-1),Oe=e("code",null,"brew install f3",-1),Re={href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"},Ee=e("li",null,[t("With your SD card inserted and mounted, run "),e("code",null,"f3write <your sd card mount point>"),e("ul",null,[e("li",null,"Wait until the process is complete. See below for an example output:")]),e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`$ f3write /Volumes/SD\\ CARD
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1),Me=e("li",null,[t("Run "),e("code",null,"f3read <your sd card mount point>"),e("ul",null,[e("li",null,"Wait until the process is complete. See below for an example output:")]),e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`$ f3read /Volumes/SD\\ CARD
                  SECTORS      ok/corrupted/changed/overwritten
Validating file 1.h2w ... 2097152/        0/      0/      0
...
Validating file 30.h2w ... 1491904/        0/      0/      0

   Data OK: 29.71 GB (62309312 sectors)
Data LOST: 0.00 Byte (0 sectors)
            Corrupted: 0.00 Byte (0 sectors)
   Slightly changed: 0.00 Byte (0 sectors)
         Overwritten: 0.00 Byte (0 sectors)
Average Reading speed: 9.42 MB/s
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1),Ge=e("hr",null,null,-1),Pe=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[t("If the test shows the result "),e("code",null,"Data LOST: 0.00 Byte (0 sectors)"),t(" your SD card is healthy and you can delete all "),e("code",null,".h2w"),t(" files on your SD card.")])],-1),Le=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it!")],-1),We=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"You can now restore the contents of your SD card and continue.")],-1);function Ne(Ve,Ue){const n=s("ExternalLinkIcon"),i=s("Tab"),r=s("Tabs");return d(),u("div",null,[m,p,l(r,{tabs:""},{default:o(()=>[l(i,{tab:"",name:"Windows",os:"windows"},{default:o(()=>[_,f,w,e("ol",null,[e("li",null,[t("Download the latest version of "),e("a",g,[t("SD Formatter"),l(n)]),e("ul",null,[e("li",null,[t("If the above link doesn't work for you, download "),e("a",b,[t("from archive.org"),l(n)])]),y])]),v,S,D,k,x]),I,F,T,e("ol",null,[e("li",null,[t("Download the latest version of "),e("a",A,[t("GUIFormat"),l(n)]),C]),B,O,R,E,M]),G,P,L,W,N,e("ol",null,[e("li",null,[t("Download and extract "),e("a",V,[t("the h2testw archive"),l(n)]),t(" anywhere on your computer "),e("ul",null,[e("li",null,[t("If the above link doesn't work for you, download "),e("a",U,[t("from archive.org"),l(n)])]),K])]),z,Y,$,Q,X]),H,J,Z]),_:1}),l(i,{tab:"",name:"Linux",os:"other"},{default:o(()=>[j,q,ee,te,le,ne,e("ol",null,[e("li",null,[t("Download and extract "),e("a",oe,[t("the F3 archive"),l(n)]),t(" anywhere on your computer.")]),ie,se,re,ae]),ce,de,ue,he]),_:1}),l(i,{tab:"",name:"macOS",os:"macos"},{default:o(()=>[me,pe,_e,e("ol",null,[e("li",null,[t("Download the latest version of "),e("a",fe,[t("SD Formatter"),l(n)]),we]),ge,be,ye,ve,Se]),De,ke,xe,Ie,Fe,Te,Ae,Ce,e("ol",null,[Be,e("li",null,[t("Install F3 from brew by running "),Oe,e("ul",null,[e("li",null,[t("If you don't have brew, install it with the instructions on "),e("a",Re,[t("brew.sh"),l(n)])])])]),Ee,Me]),Ge,Pe,Le]),_:1})]),_:1}),We])}var Ye=c(h,[["render",Ne],["__file","sd-card-setup.html.vue"]]);export{Ye as default};
