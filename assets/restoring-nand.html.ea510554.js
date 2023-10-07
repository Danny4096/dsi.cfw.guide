import{_ as s,r as i,o as l,c as d,a as e,d as a,b as n,e as r}from"./app.440e8313.js";const t={},c=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,[a("\xA1ADVERTENCIA! Esto es "),e("em",null,[e("strong",null,"peligroso")]),a(". Incluso siguiendo al pie de la letra estos pasos, existe la poslibilidad de bloquear al completo la consola, ya que la memoria NAND es de muy baja calidad, especialmente si la sobreescribes multiples veces. \xA1Esto deber\xEDa ser usado \xFAnica y exclusivamente como \xFAltimo recurso!")])],-1),u=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[a("No te saltes "),e("em",null,"nada"),a(" de esta p\xE1gina. Cualquier error incrementa las posbilidades de causar un bloqueo total de tu consola.")])],-1),p=e("p",null,"Primero te presentaremos algunas alternativas m\xE1s seguras para solucionar cosas por las que querr\xEDas hacer esto.",-1),h=e("li",null,"La instalaci\xF3n de t\xEDtulos DSiWare se puede hacer utilizando hiyaCFW o TWiLight Menu++",-1),m={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,[a("Puedes restaurar alguna de las configuraciones de bot\xF3nes de Unlaunch desde su men\xFA, al que puedes acceder manteniendo pulsado "),e("kbd",{class:"face"},"A"),a(" y "),e("kbd",{class:"face"},"B"),a(" mientras enciendes la consola.")],-1),g=e("li",null,"\xBFTe salta error al iniciar Unlaunch? Saca tu tarjera SD e intenta iniciar el sistema de nuevo. Si funciona, entonces el error es a causa de tu tarjeta SD, y que restaurar la NAND no lo solucionar\xE1.",-1),N={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,"Cualquier error en TWiLight Menu++ no est\xE1 relacionado con la NAND. Deber\xEDas intentar reinstalar TWiLight Menu++ o pedir ayuda en el servidor de Discord.",-1),f=e("li",null,'Desinstalar Unlaunch (ya sea sobreescribiendo la NAND o utilizando su desinstalador) deber\xEDa ser evitado al menos que sea absolutamente necesario. Puedes configurar que el inicio autom\xE1tico ejecute "Launcher" y consola estar\xE1 como en su estado original.',-1),D=e("p",null,"La \xFAnica cosa que deber\xEDas hacer con tu NAND es instalar Unlaunch. De cualquier otra forma, recomendamos usar las alternativas.",-1),S=e("h2",{id:"requisitos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requisitos","aria-hidden":"true"},"#"),a(" Requisitos")],-1),v=e("li",null,[a("Tu respaldo de la NAND "),e("strong",null,"de la misma consola DSi"),a(".")],-1),A={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},q=e("li",null,"Una forma de ejecutar homebrew con acceso a la NAND, como Unlaunch o Memory Pit.",-1),E={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},k={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},y={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},w=r('<h2 id="volcar-la-bios-para-su-uso-en-no-gba" tabindex="-1"><a class="header-anchor" href="#volcar-la-bios-para-su-uso-en-no-gba" aria-hidden="true">#</a> Volcar la BIOS para su uso en no$gba</h2><ol><li>Extrae <code>dsibiosdumper.nds</code> del archivo <code>dsibiosdumper.zip</code> y col\xF3calo en cualquier lugar de tu tarjeta SD.</li><li>Enciende tu consola manteniendo pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>. <ul><li>Esto deber\xEDa iniciar el sistema de archivos de Unlaunch.</li></ul></li><li>Ejecuta dsbiosdumper desde el sistema de archivos de Unlaunch.</li><li>Pulsa <kbd class="face">A</kbd> para volcar la BIOS a la tarjeta SD.</li><li>Pulsa <kbd>START</kbd> para salir de dsibiosdumper.</li></ol><h2 id="probar-tu-respaldo-de-la-nand" tabindex="-1"><a class="header-anchor" href="#probar-tu-respaldo-de-la-nand" aria-hidden="true">#</a> Probar tu respaldo de la NAND</h2><p>Es muy importante asegurarse de que tu respaldo de la NAND funciona antes de intentar restaurarla. Si al probarla en no$gba resulta en un bloqueo total, es muy posible que pase lo mismo en tu consola.</p><ol><li>Extrae <code>NO$GBA.EXE</code> del archivo <code>no$gba-w.zip</code> a una carpeta en tu ordenador.</li><li>Copia tu respaldo de la NAND a la carpeta en donde extra\xEDste <code>NO$GBA.EXE</code>, y c\xE1mbiale el nombre a <code>DSI-1.MMC</code>.</li><li>Copia los archivos <code>bios7i.bin</code> y <code>bios9i.bin</code> a la carpeta en donde extra\xEDste <code>NO$GBA.EXE</code>, y n\xF3mbralos <code>BIOSDSI7.ROM</code> y <code>BIOSDSI9.ROM</code>, respectivamente.</li><li>Executa <code>NO$GBA.EXE</code>.</li><li>Haz clic en <code>Options</code> &gt; <code>Emulation Setup</code> para abrir la ventana de configuraci\xF3n de ejecuci\xF3n.</li><li>Cambia la opci\xF3n <code>Reset/Startup Entrypoin</code> a <code>GBA/NDS BIOS (Nintendo logo)</code>.</li><li>Cambia la opci\xF3n <code>NDS Mode/Colors</code> a <code>DSi (retail/16MB)</code>.</li><li>Haz clic en <code>Save Now</code>.</li><li>Ejecuta cualquier rom de Nintendo DS (la extensi\xF3n de archivo deber\xEDa ser <code>.nds</code>)</li></ol><p>Si no$gba carga el men\xFA DSi (o el sistema de archivos de Unlaunch), contin\xFAa a la siguiente secci\xF3n. Si en su lugar salta cualquier clase de error, <em>\xA1no debes usar este respaldo!</em></p><h2 id="desinstalar-unlaunch-de-tu-respaldo-de-nand-opcional" tabindex="-1"><a class="header-anchor" href="#desinstalar-unlaunch-de-tu-respaldo-de-nand-opcional" aria-hidden="true">#</a> Desinstalar Unlaunch de tu respaldo de NAND (opcional)</h2><p>Sigue estos pasos si has volcado tu respaldo de la NAND despu\xE9s de instalar Unlaunch y te gustar\xEDa removerlo de tu sistema. Si no est\xE1s intentando desinstalar Unlaunch, <strong>no debes</strong> seguir esta secci\xF3n.</p>',8),x={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},z=r("<li>Extrae el archivo <code>UNLAUNCH.DSI</code> del archivo comprimido <code>unlaunch.zip</code>.</li><li>Ejecuta <code>UNLAUNCH.DSI</code> como ROM en no$gba e in\xEDcialo desde la ranura para cartuchos. <ul><li>Esto deber\xEDa iniciar el instalador, que se ve parecido al sistema de archivos de Unlaunch.</li></ul></li><li>Elige la opci\xF3n <code>Uninstall</code>.</li><li>Una vez terminado, elige la opci\xF3n <code>Power Down</code>.</li><li>Ejecuta cualquier otra ROM de Nintendo DS para segurarte de que el men\xFA carga y funciona correctamente.</li>",5),U=r('<p>Si no$gba muestra cualquier clase de error en vez de cargar el men\xFA de la consola, <em>\xA1no debes usar este respaldo!</em> Si tienes un respaldo antiguo dela NAND, intenta usar ese en su lugar. <strong>NO</strong> intentes desinstalar Unlaunch usando el instalador en la consola, es muy posible que causes un bloqueo total al hacerlo as\xED.</p><h2 id="sobreescribir-utilizando-tu-respaldo-de-la-nand-por-software" tabindex="-1"><a class="header-anchor" href="#sobreescribir-utilizando-tu-respaldo-de-la-nand-por-software" aria-hidden="true">#</a> Sobreescribir utilizando tu respaldo de la NAND (por software)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Aqu\xED es donde la cosa se vuelve peligrosa, as\xED que aseg\xFArate de haber le\xEDdo bien los pasos anteriores. Si llegaste aqu\xED a trav\xE9s de un enlace sin seguir los pasos anteriores, vuelve al principio de la p\xE1gina y leela por completo.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Aseg\xFArate de que tu consola est\xE1 cargada antes de comenzar con esta secci\xF3n.</p></div><ol><li>Con tu tarjeta SD dentro de tu consola, enciende la misma mientras mantienes pulsados <kbd class="face">A</kbd> y <kbd class="face">B</kbd>.</li><li>Ejecuta SafeNANDManager.</li><li>Pulsa el bot\xF3n indicado para la opci\xF3n <code>begin NAND restore</code>.</li><li>Una vez finalizada la restauracion, pulsa <kbd>START</kbd> para apagar tu consola.</li></ol><p>La memoria NAND de tu consola deber\xEDa estar restaurada.</p><h2 id="sobreescribir-utilizando-tu-respaldo-de-la-nand-por-modificacion-del-hardware" tabindex="-1"><a class="header-anchor" href="#sobreescribir-utilizando-tu-respaldo-de-la-nand-por-modificacion-del-hardware" aria-hidden="true">#</a> Sobreescribir utilizando tu respaldo de la NAND (por modificaci\xF3n del hardware)</h2>',7),j={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"};function C(B,L){const o=i("ExternalLinkIcon");return l(),d("div",null,[c,u,p,e("ul",null,[h,e("li",null,[a("Puedes recuperar fotos utilizando "),e("a",m,[a("ninfs"),n(o)]),a(", en conjuncion con hiyaCFW o TWiLightMenu++ si quieres que est\xE9n en la consola. La \xFAltima version de HiyaCFW Helper te permite copiar las fotos de tu memoria NAND a la SDNAND durante la configuraci\xF3n.")]),b,g,e("li",null,[a('El mensaje de error "Ha ocurrido un error..." con el texto blanco sobre negro es probable que sea un error de hiyaCFW y que no est\xE9 relacionado a la NAND de tu consola. Echa un vistazo a la '),e("a",N,[a("p\xE1gina de resoluci\xF3n de problemas de hiyaCFW en la wiki de DS-Homebrew"),n(o)]),a(" para m\xE1s informaci\xF3n.")]),_,f]),D,S,e("ul",null,[v,e("li",null,[a("La \xFAltima versi\xF3n de "),e("a",A,[a("SafeNANDManager"),n(o)]),a(".")]),q,e("li",null,[e("a",E,[a("no$gba"),n(o)]),a(', para comprobar si tu respaldo de la NAND funciona y est\xE1 en buen estado. Descarga el archivo cuyo enlace dice "Download no$gba Windows gaming version". '),e("ul",null,[e("li",null,[a("Los usuarios de macOS y Linux puede usar"),e("a",k,[a("WINE"),n(o)]),a(" para ejecutar no$gba.")])])]),e("li",null,[e("a",y,[a("dsibiosdumper"),n(o)])])]),w,e("ol",null,[e("li",null,[a("Descarga la \xFAltima versi\xF3n del "),e("a",x,[a("instalador de Unlaunch"),n(o)]),a(".")]),z]),U,e("p",null,[a("Si tu consola no enciende o no incia el sistema, la \xFAnica forma de restaurar un respaldo de la NAND es hacer una modificaci\xF3n por hardware. La mejor gu\xEDa que existe actualmente es la "),e("a",j,[a("gu\xEDa de modificaci\xF3n de hardware de Nintendo DSi en la Wiki de DS-Homebrew"),n(o)]),a(".")])])}var I=s(t,[["render",C],["__file","restoring-nand.html.vue"]]);export{I as default};