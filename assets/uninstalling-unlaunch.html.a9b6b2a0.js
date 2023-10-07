import{_ as a,r as o,o as s,c as r,a as n,d as e,b as i,w as l}from"./app.440e8313.js";const u={},c=n("div",{class:"custom-container danger"},[n("p",{class:"custom-container-title"},"DANGER"),n("p",null,[n("strong",null,"Die Installation oder Deinstallation von Unlaunch k\xF6nnte deine Konsole besch\xE4digen! Du wurdest gewarnt!")])],-1),h=n("p",null,[n("strong",null,"WARNUNG:"),e(" Die Deinstallation von Unlaunch k\xF6nnte deinen Nintendo DSi besch\xE4digen. Dies k\xF6nnten Gr\xFCnde sein, warum du Unlaunch deinstallieren willst, aber mit L\xF6sungen die keine Deinstallation ben\xF6tigen.")],-1),d=n("strong",null,"The Unlaunch Background is scary:",-1),g=n("strong",null,"Ich habe ein Problem mit Unlaunch oder der Konsole nach der Installation:",-1),m=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"Um das Risiko zu verringern, den DSi zu besch\xE4digen, stelle sicher, dass du keine unzul\xE4ssige DSiWare zu deinem NAND backup installiert hast (die SDNAND umleitung von hiyaCFW z\xE4hlt nicht), oder in anderer Weise Systemdateinen manipuliert hast.")],-1),_=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[e("When uninstalling Unlaunch, you should "),n("strong",null,"NOT"),e(" use its built-in uninstaller directly on your console as there is a chance that it will brick the console. Siehe die korrekte Information zur Deinstallation unten.")])],-1),N=n("p",null,"If you are not able to use no$gba or get an error after uninstalling Unlaunch in no$gba it is also possible to flash a NAND backup made prior to installing Unlaunch if you still have one, however it is recommended to try using a NAND backup that previously had Unlaunch first. This will make recovery significantly easier in the case of a brick requiring a hardmod as Unlaunch leaves the no$gba footer embedded in the NAND even when uninstalled.",-1);function b(p,D){const t=o("RouterLink");return s(),r("div",null,[c,h,n("ul",null,[n("li",null,[d,e(),i(t,{to:"/de_DE/installing-unlaunch.html"},{default:l(()=>[e("Reinstall Unlaunch")]),_:1}),e(" using the new instructions. Sie beschreiben einen Weg, den Hintergrund zu \xE4ndern")]),n("li",null,[g,e(" Die "),i(t,{to:"/de_DE/troubleshooting.html#unlaunch"},{default:l(()=>[e("Troubleshooting")]),_:1}),e(" Seite erkl\xE4rt L\xF6sungen f\xFCr Probleme die sie haben k\xF6nnten")])]),m,_,n("p",null,[e("Once you have reviewed the above information, follow the "),i(t,{to:"/de_DE/dumping-nand.html"},{default:l(()=>[e("Dumping NAND")]),_:1}),e(" instructions to make a new NAND bacup, then proceed to "),i(t,{to:"/de_DE/restoring-nand.html"},{default:l(()=>[e("Restoring a NAND Backup")]),_:1}),e(". This will guide you through uninstalling Unlaunch from the NAND backup and flashing that to your console.")]),N])}var k=a(u,[["render",b],["__file","uninstalling-unlaunch.html.vue"]]);export{k as default};