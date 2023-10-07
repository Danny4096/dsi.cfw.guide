import{_ as l,r,o as h,c as d,a as e,d as t,b as i,w as a,e as s}from"./app.440e8313.js";const u={},c=s('<h2 id="\u6211\u662F\u5426\u5E94\u8BE5\u8FDB\u884C\u7CFB\u7EDF\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u6211\u662F\u5426\u5E94\u8BE5\u8FDB\u884C\u7CFB\u7EDF\u66F4\u65B0" aria-hidden="true">#</a> \u6211\u662F\u5426\u5E94\u8BE5\u8FDB\u884C\u7CFB\u7EDF\u66F4\u65B0\uFF1F</h2><p>It is <strong>not</strong> recommended to update your DSi unless you know there are purchased DSiWare. While it still possible to follow this guide if you do so, the only benefit to updating is the ability to access the Nintendo DSi Shop to redownload already purchased titles. All other benefits, such as Facebook integration in the Nintendo DSi Camera application, are no longer usable or are not significant enough to justify the downsides:</p><ul><li>Installing System Updates is known to occasionally <strong>brick</strong> consoles, with roughly the same frequency as when installing Unlaunch</li><li>Older exploits are no longer possible to use, which may be required if you are unable use the recommended exploits</li><li>Flashcard compatibility is reduced, however this is bypassed if you install Unlaunch</li></ul><h2 id="which-is-the-best-exploit" tabindex="-1"><a class="header-anchor" href="#which-is-the-best-exploit" aria-hidden="true">#</a> Which is the best exploit?</h2><p>Unlaunch is overall the best exploit for the DSi, with the only downside being that there is a minor brick risk on install. In general it&#39;s recommended to use Memory Pit to install Unlaunch. If you want to avoid any risk it&#39;s recommended to instead use Flipnote Lenny as it has fewer issues in homebrew than Memory Pit while being just as safe and simple to remove. Below is a list of the pros and cons of each exploit:</p><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3><p>Pros:</p><ul><li>Quick and easy to use</li><li>No risk of damaging the console, uninstalling is as simple as removing the SD or deleting one file</li><li>Compatible with all DSi consoles unless they have a broken camera and haven&#39;t completed the camera tutorial</li></ul><p>Cons:</p><ul><li>Requires loading the DSi Camera application every time you want to access homebrew</li><li>Incompatible with certain DSi mode titles and homebrew due to WRAM only being open to the ARM7 CPU</li><li>Access to Slot-1 (the DS Game Card) is blocked in homebrew</li><li>Access to the DSP is blocked resulting in worse sound in GBARunner2</li><li>Photos on the SD card cannot be viewed in the DSi Camera application while Memory Pit is installed, as this is the trigger for the exploit <ul><li>The only way to view SD card photos while Memory Pit is installed, is to launch a ROM dump of the DSi Camera application using <strong>TW</strong>i<strong>L</strong>ight Menu++ to boot it via nds-bootstrap (v0.61.3 or later)</li></ul></li></ul><h3 id="stylehax" tabindex="-1"><a class="header-anchor" href="#stylehax" aria-hidden="true">#</a> stylehax</h3><p>Pros:</p><ul><li>Better compatibility with DSi mode titles and homebrew than Memory Pit</li><li>Easy to use</li><li>No risk of damaging the console</li><li>Useable on consoles with broken camera</li><li>Better sound in GBARunner2</li></ul><p>Cons:</p><ul><li>Requires internet access</li><li>Requires loading the DSi Browser every time you want to access homebrew, slightly more time consuming than Memory Pit</li><li>Access to Slot-1 (the DS Game Card) is blocked in homebrew</li></ul><h3 id="flipnote-lenny" tabindex="-1"><a class="header-anchor" href="#flipnote-lenny" aria-hidden="true">#</a> Flipnote Lenny</h3><p>Pros:</p><ul><li>Better compatibility with DSi mode titles and homebrew than Memory Pit</li><li>No risk of damaging the console, uninstalling is as simple as removing the SD or deleting one folder</li><li>Useable on consoles with broken camera</li><li>Better sound in GBARunner2</li></ul><p>Cons:</p><ul><li>Requires loading Flipnote Studio every time you want to access homebrew, slightly more time consuming than Memory Pit</li><li>Access to Slot-1 (the DS Game Card) is blocked in homebrew</li></ul><h3 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h3><p>Pros:</p><ul><li>Allows loading homebrew and DSiWare immediately on system boot, with optional button hotkeys</li><li>Full access to the system without any restrictions, including: <ul><li>Access to Slot-1 allowing dumping Game Cards and loading incompatible flashcards</li><li>Better sound in GBARunner2</li></ul></li><li>Removes region locks on DSi-Enhanced/Exclusive Game Cards</li><li>Protection against most ways a DSi could brick</li><li>DSi-Enhanced games can be run in DSi mode without a Donor ROM</li><li>Old homebrew can be run via nds-bootstrap-hb</li></ul><p>Cons:</p>',24),m=e("li",null,[t("Very minor risk of "),e("strong",null,"bricking"),t(" the console when installing")],-1),p=e("li",null,"Not compatible with development consoles",-1),g=s('<h2 id="will-i-lose-any-functionality-by-modding-my-system" tabindex="-1"><a class="header-anchor" href="#will-i-lose-any-functionality-by-modding-my-system" aria-hidden="true">#</a> Will I lose any functionality by modding my system?</h2><p>If you install Unlaunch or use Flipnote Lenny, no functionality will be lost. If you use Memory Pit, you will be unable to view photos on the SD card using the DSi Camera, unless you launch a ROM dump of the DSi Camera application using <strong>TW</strong>i<strong>L</strong>ight Menu++ to boot it via nds-bootstrap.</p><ul><li>To regain the ability to view your SD card photos when launching the DSi Camera from the DSi Menu, install Unlaunch or switch to a different exploit, then delete Memory Pit&#39;s <code>pit.bin</code> file <ul><li>If <code>tip.bin</code> exists in the same folder, rename it back to <code>pit.bin</code></li></ul></li></ul><h2 id="how-do-i-play-nintendo-ds-game-card-dumps" tabindex="-1"><a class="header-anchor" href="#how-do-i-play-nintendo-ds-game-card-dumps" aria-hidden="true">#</a> How do I play Nintendo DS Game Card dumps?</h2><p>Playing Game Card dumps on the console requires the use of a flashcard or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting Slot-1 reads and writes to it.</p>',5),y=e("li",null,"With TWiLight Menu++ you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using TWiLight Menu++ are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. In other words, you can drop your ROM files directly and play without any setup. There is no 39 title limit, neither hiyaCFW or Unlaunch are required and there are no restrictions on SD card free space you can have",-1),w={href:"https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card",target:"_blank",rel:"noopener noreferrer"},f={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"how-do-i-update-my-homebrew",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-do-i-update-my-homebrew","aria-hidden":"true"},"#"),t(" How do I update my homebrew?")],-1),_=e("strong",null,"Unlaunch",-1),k=e("ul",null,[e("li",null,[t("You do "),e("strong",null,"not"),t(" need to uninstall Unlaunch before doing this")])],-1),S=e("strong",null,"hiyaCFW",-1),D=e("code",null,"hiya.dsi",-1),v={href:"https://github.com/RocketRobz/hiyaCFW/releases",target:"_blank",rel:"noopener noreferrer"},x=e("strong",null,"TWiLight Menu++",-1),C={href:"https://wiki.ds-homebrew.com/twilightmenu/updating-dsi",target:"_blank",rel:"noopener noreferrer"},W=s("<li><strong>nds-bootstrap</strong> - Copy <code>nds-bootstrap-hb-release.nds</code> &amp; <code>nds-bootstrap-release.nds</code> to the <code>_nds</code> folder on the root of your SD card <ul><li>If you use TWiLight Menu++, there is a high chance that the latest nds-bootstrap release is included with TWiLight Menu++</li></ul></li><li><strong>GodMode9i, dumpTool, Forwarder3-DS, etc</strong> - Follow the instructions used to download them</li>",2),M=e("p",null,"Other homebrew might use other methods to update.",-1),I=e("h2",{id:"i-am-new-or-i-would-like-to-redo-my-setup-where-do-i-start",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-am-new-or-i-would-like-to-redo-my-setup-where-do-i-start","aria-hidden":"true"},"#"),t(" I am new or I would like to redo my setup. Where do I start?")],-1),N=e("li",null,"If you have not already modified your console or are looking to update Unlaunch on your system, we recommend starting from the beginning of the guide and following through the pages. Be sure to read everything on the homepage",-1),F={href:"https://wiki.ds-homebrew.com/twilightmenu/installing-dsi",target:"_blank",rel:"noopener noreferrer"},T=e("h2",{id:"how-can-i-remove-parental-controls",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-can-i-remove-parental-controls","aria-hidden":"true"},"#"),t(" How can I remove parental controls?")],-1),A={href:"https://mkey.salthax.org",target:"_blank",rel:"noopener noreferrer"},P=e("h2",{id:"can-i-change-my-nintendo-dsi-s-region",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#can-i-change-my-nintendo-dsi-s-region","aria-hidden":"true"},"#"),t(" Can I change my Nintendo DSi's region?")],-1),U=e("p",null,"Yes, there are a few different methods depending on what you want to change:",-1),L=e("li",null,"The safest and simplest method is to simply install TWiLight Menu++, it can use any official language and more without needing NAND modifications",-1),R={href:"https://github.com/Yoti/cli_hiyalang/releases",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/Simonsator/cli_hiyalang/releases/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://gbatemp.net/threads/release-dsi-language-patcher.582836/",target:"_blank",rel:"noopener noreferrer"},q=e("h2",{id:"what-happened-to-the-hiyacfw-installation-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-happened-to-the-hiyacfw-installation-guide","aria-hidden":"true"},"#"),t(" What happened to the hiyaCFW installation guide?")],-1),H={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},E=s('<ul><li>If you were linked to the page in question from another guide, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects</li></ul><h2 id="what-kind-of-sd-card-should-i-use" tabindex="-1"><a class="header-anchor" href="#what-kind-of-sd-card-should-i-use" aria-hidden="true">#</a> What kind of SD card should I use?</h2><ul><li>You should buy an SD card from a trusted brand</li><li>A full-size SD card or a microSD card with an adapter will both work</li><li>Any capacity between 1 GB and 2 TB will work. For general usage, 8 GB is enough <ul><li>Some software, such as hiyaCFW, may experience incrementally longer loading times with larger SD card capacities</li></ul></li><li>Speed class 8 or higher is recommended</li></ul><h2 id="can-i-use-my-dsi-sd-card-on-other-systems" tabindex="-1"><a class="header-anchor" href="#can-i-use-my-dsi-sd-card-on-other-systems" aria-hidden="true">#</a> Can I use my DSi SD card on other systems?</h2><p>Generally, yes, with two exceptions:</p><ul><li>hiyaCFW will only work on the system it was set up for</li><li>Even if you are using nds-bootstrap or a flashcard, friend codes in online NDS games will be reset when attempting to go online using a different console</li></ul><h2 id="how-do-i-switch-to-a-new-sd-card-after-setting-up-homebrew" tabindex="-1"><a class="header-anchor" href="#how-do-i-switch-to-a-new-sd-card-after-setting-up-homebrew" aria-hidden="true">#</a> How do I switch to a new SD card after setting up homebrew?</h2>',7),O=e("h2",{id:"can-i-still-use-my-system-normally-without-the-sd-card-inserted-after-setting-up-homebrew",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#can-i-still-use-my-system-normally-without-the-sd-card-inserted-after-setting-up-homebrew","aria-hidden":"true"},"#"),t(" Can I still use my system normally without the SD card inserted after setting up homebrew?")],-1),z=e("em",null,"did",-1),Y={id:"the-unlaunch-page-says-that-version-2-0-is-not-known-to-be-safe-should-i-use-a-previous-version-instead",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#the-unlaunch-page-says-that-version-2-0-is-not-known-to-be-safe-should-i-use-a-previous-version-instead","aria-hidden":"true"},"#",-1),j={href:"https://problemkaputt.de/unlaunch.htm",target:"_blank",rel:"noopener noreferrer"},Q=e("p",null,"The Unlaunch page has not been updated since version 2.0 was released, which was over two years ago. The vast majority of users experience no issues with this version, so it is considered safe.",-1),J=e("h2",{id:"how-do-i-run-dumped-dsiware",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-do-i-run-dumped-dsiware","aria-hidden":"true"},"#"),t(" How do I run dumped DSiWare?")],-1),K=e("p",null,"The recommended method is to simply launch them with TWiLight Menu++, due to the simple drag-and-drop method and there being no arbitrary limit. When nds-bootstrap is set as the launch method, it also gains the benefits of cheats and screenshots, as well as any other benefit provided by the in-game menu.",-1),X={href:"https://github.com/Epicpkmn11/NTM/releases",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"};function $(ee,te){const n=r("RouterLink"),o=r("ExternalLinkIcon");return h(),d("div",null,[c,e("ul",null,[m,e("li",null,[t("Another, slightly higher, risk of bricking if you decide to "),i(n,{to:"/zh_CN/uninstalling-unlaunch.html"},{default:a(()=>[t("uninstall it")]),_:1})]),p]),g,e("ul",null,[y,e("li",null,[t("hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the "),e("a",w,[t("DS Game Forwarders"),i(o)]),t(" guide on the DS-Homebrew Wiki, but it has some limitations. There is a hard limit of 39 titles, and they are less convenient to make than using TWiLight Menu++ "),e("ul",null,[e("li",null,[t("If you do not have hiyaCFW and would like to use forwarders, you can follow the "),e("a",f,[t("hiyaCFW installation guide"),i(o)]),t(" on the DS-Homebrew Wiki")])])])]),b,e("ul",null,[e("li",null,[_,t(" - Follow the instructions on the "),i(n,{to:"/zh_CN/installing-unlaunch.html"},{default:a(()=>[t("Installing Unlaunch")]),_:1}),t(" page "),k]),e("li",null,[S,t(" - Replace "),D,t(" on the root of the SD card from the "),e("a",v,[t("updated release"),i(o)])]),e("li",null,[x,t(" - Follow the instructions on the "),e("a",C,[t("DS-Homebrew Wiki"),i(o)])]),W]),M,I,e("ul",null,[N,e("li",null,[t("If you have the latest version Unlaunch, follow the "),e("a",F,[t("TWiLight Menu++ install guide"),i(o)]),t(" to set up TWiLight Menu++ on your system")])]),T,e("ul",null,[e("li",null,[t("The "),e("a",A,[t("mkey generator"),i(o)]),t(" can generate the code required to remove parental controls")])]),P,U,e("ul",null,[L,e("li",null,[t("If you want to actually change the system region and are using hiyaCFW, you can use Yoti's "),e("a",R,[t("hiyalang"),i(o)]),t(" for Asian DSi systems. For American DSi systems use "),e("a",B,[t("this version of hiyalang"),i(o)])]),e("li",null,[t("Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's "),e("a",G,[t("DSi Language Patcher"),i(o)])])]),q,e("p",null,[t("Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the "),e("a",H,[t("DS-Homebrew Wiki"),i(o)]),t(".")]),E,e("p",null,[t("Format your new SD card using the "),i(n,{to:"/zh_CN/sd-card-setup.html"},{default:a(()=>[t("SD Card Setup")]),_:1}),t(" instructions, then simply move your data from the old SD card to the new one.")]),O,e("p",null,[t("Yes. If you did not install Unlaunch, your system will remain completely unmodified. If you "),z,t(" install Unlaunch, you may need to "),i(n,{to:"/zh_CN/installing-unlaunch.html#section-iii-post-unlaunch-configuration"},{default:a(()=>[t("configure Unlaunch")]),_:1}),t(" to automatically boot the original DSi Menu under specified conditions.")]),e("h2",Y,[V,t(" The "),e("a",j,[t("Unlaunch page"),i(o)]),t(" says that version 2.0 is not known to be safe. Should I use a previous version instead?")]),Q,J,K,e("p",null,[t("However, for the few titles that are incompatible, you can use "),e("a",X,[t("NTM"),i(o)]),t(" to install them on either internal memory or "),e("a",Z,[t("hiyaCFW's SDNAND"),i(o)]),t(". In addition to lacking the benefits above, there is also a limit of 39 titles that cannot exceed 128 MiB/1,024 blocks in size. For SysNAND, there is also a very small risk of bricking the system when writing to the internal NAND.")])])}var oe=l(u,[["render",$],["__file","faq.html.vue"]]);export{oe as default};
