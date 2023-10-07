import{_ as a,r,o as s,c as l,a as e,d as o,b as t,e as i}from"./app.440e8313.js";const d={},c=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,[o("WARNING! This is "),e("em",null,[e("strong",null,"dangerous")]),o(". Even following these steps exactly still has potential to brick the DSi as the NAND is very low quality, especially if you flash multiple times! This should only be used as a last resort!")])],-1),u=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[o("Do not skip "),e("em",null,"anything"),o(" on this page, any mistake greatly increases chance of bricking your DSi.")])],-1),h=e("p",null,"First, a few safer alternatives to why you might want to do this:",-1),p=e("li",null,"Installing DSiWare can be done using hiyaCFW or TWiLight Menu++",-1),b={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,[o("Restoring an Unlaunch button configuration can be done from the Unlaunch menu, which can be accessed by holding "),e("kbd",{class:"face"},"A"),o(" + "),e("kbd",{class:"face"},"B"),o(" while powering the console on")],-1),f=e("li",null,"Booting into Unlaunch resulting in an error? Take out your SD card and try starting the system again. If it works, then it's a fault with your SD card and restoring a NAND backup won't fix it",-1),y={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},m={href:"https://ds-homebrew.com/discord",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,'Uninstalling Unlaunch, whether by flashing NAND or using its uninstaller, should avoided unless absolutely necessary, you can set the autoboot keys to "Launcher" and your DSi will be like stock',-1),N=e("p",null,"The only thing you should be doing with your NAND is installing Unlaunch. Use the alternatives otherwise.",-1),w=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),o(" Requirements")],-1),_=e("li",null,[o("Your NAND backup "),e("strong",null,"from the same DSi")],-1),D={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},S=e("li",null,"A way to run homebrew with NAND access, such as Unlaunch or Memory Pit",-1),A={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},v={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},I={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},U=i('<h2 id="dumping-the-bios-for-use-in-no-gba" tabindex="-1"><a class="header-anchor" href="#dumping-the-bios-for-use-in-no-gba" aria-hidden="true">#</a> Dumping the BIOS for use in no$gba</h2><ol><li>Extract <code>dsibiosdumper.nds</code> from the <code>dsibiosdumper.zip</code> archive and place it anywhere on your SD card</li><li>Power on your console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd><ul><li>This should launch the Unlaunch Filemenu</li></ul></li><li>Launch dsibiosdumper from the Unlaunch Filemenu</li><li>Press <kbd class="face">A</kbd> to dump the BIOS to the SD card</li><li>Press <kbd>START</kbd> to exit dsibiosdumper</li></ol><h2 id="testing-your-nand-backup" tabindex="-1"><a class="header-anchor" href="#testing-your-nand-backup" aria-hidden="true">#</a> Testing your NAND backup</h2><p>It is very important to test that your NAND backup is working before attempting to restore it to your console, if it shows a brick error in no$gba it will most likely brick your console too.</p><ol><li>Extract <code>NO$GBA.EXE</code> from <code>no$gba-w.zip</code> to a folder on your computer</li><li>Copy your NAND backup to the folder you put <code>NO$GBA.EXE</code> in and rename it to <code>DSI-1.MMC</code></li><li>Copy <code>bios7i.bin</code> and <code>bios9i.bin</code> to the folder you put <code>NO$GBA.EXE</code>, named <code>BIOSDSI7.ROM</code> and <code>BIOSDSI9.ROM</code>, respectively.</li><li>Run <code>NO$GBA.EXE</code></li><li>Click <code>Options</code> &gt; <code>Emulation Setup</code> to open the Emulation Setup window</li><li>Change <code>Reset/Startup Entrypoint</code> to <code>GBA/NDS BIOS (Nintendo logo)</code></li><li>Change <code>NDS Mode/Colors</code> to <code>DSi (retail/16MB)</code></li><li>Click <code>Save Now</code></li><li>Launch any Nintendo DS ROM (<code>.nds</code> file)</li></ol><p>If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. If it shows any kind of error <em><strong>do not flash that backup</strong></em>!</p><h2 id="uninstalling-unlaunch-from-your-nand-backup-optional" tabindex="-1"><a class="header-anchor" href="#uninstalling-unlaunch-from-your-nand-backup-optional" aria-hidden="true">#</a> Uninstalling Unlaunch from your NAND backup (optional)</h2><p>Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do <strong>not</strong> need to do this section.</p>',8),x={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},E=i("<li>Extract <code>UNLAUNCH.DSI</code> from <code>unlaunch.zip</code></li><li>Launch <code>UNLAUNCH.DSI</code> in no$gba and start it from the Game Card slot <ul><li>This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu</li></ul></li><li>Choose <code>Uninstall</code></li><li>Once complete, choose <code>Power down</code></li><li>Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly</li>",5),T=i('<p>If no$gba shows any kind of error instead of loading the DSi menu, <em><strong>do not flash that backup</strong></em>! If you have an older NAND backup you may want to try using that instead. Do <strong>not</strong> try to uninstall Unlaunch using its uninstaller on the console, it is extremely likely doing so will brick your DSi.</p><h2 id="flashing-your-nand-backup-software" tabindex="-1"><a class="header-anchor" href="#flashing-your-nand-backup-software" aria-hidden="true">#</a> Flashing your NAND backup (Software)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Make sure your Nintendo DSi system is well charged before beginning this section.</p></div><ol><li>With your SD card inserted, power on your Nintendo DSi while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd></li><li>Launch SafeNANDManager</li><li>Press the button to <code>begin NAND restore</code></li><li>Once the restore finishes, press <kbd>START</kbd> to turn off your DSi</li></ol><p>Your NAND should now be restored.</p><h2 id="flashing-your-nand-backup-hardmod" tabindex="-1"><a class="header-anchor" href="#flashing-your-nand-backup-hardmod" aria-hidden="true">#</a> Flashing your NAND backup (Hardmod)</h2>',7),M={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"};function B(C,O){const n=r("ExternalLinkIcon");return s(),l("div",null,[c,u,h,e("ul",null,[p,e("li",null,[o("Recovering pictures can be done using "),e("a",b,[o("ninfs"),t(n)]),o(", in combination with hiyaCFW or TWiLight Menu++ if you want them on console. The latest version of the HiyaCFW Helper allows you to copy your photos from your NAND to the SDNAND during setup")]),g,f,e("li",null,[o('"An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see '),e("a",y,[o("hiyaCFW FAQ & Troubleshooting"),t(n)]),o(" on the DS-Homebrew Wiki for more information")]),e("li",null,[o("Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on "),e("a",m,[o("Discord"),t(n)])]),k]),N,w,e("ul",null,[_,e("li",null,[o("The latest release of "),e("a",D,[o("SafeNANDManager"),t(n)])]),S,e("li",null,[e("a",A,[o("no$gba"),t(n)]),o(", to check your NAND backup (Download the 'Windows gaming version') "),e("ul",null,[e("li",null,[o("macOS and Linux users can use "),e("a",v,[o("WINE"),t(n)]),o(" to run no$gba")])])]),e("li",null,[e("a",I,[o("dsibiosdumper"),t(n)])])]),U,e("ol",null,[e("li",null,[o("Download the latest version of the "),e("a",x,[o("Unlaunch installer"),t(n)])]),E]),T,e("p",null,[o("If you cannot boot your Nintendo DSi, a hardmod is the only way to restore a NAND backup. The best guide that currently exists is the "),e("a",M,[o("Nintendo DSi hardmod guide on the DS-Homebrew Wiki"),t(n)]),o(".")])])}var L=a(d,[["render",B],["__file","restoring-nand.html.vue"]]);export{L as default};