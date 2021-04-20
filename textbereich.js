raster = 1; //erstellt eine globale Variable die die ID der Raster angibt
zeile = 1; //erstellt eine globale Variable die die ID der Zeilen angibt
console.log("wird erstellt");
let KW = 10;
let zeilen = 10;

createBorder(KW, zeilen);
console.log("wird jetzt ausgeführt");

function createBorder(KW, zeilen) { //erstellt eine sichtbare Wand
    console.log("createBorder");
    document.write ("<table class = 'border_raster' id = 'raster' border = '1'>");
    createKW(KW, zeilen);
    document.write ("</table>")
}

function createKW(KW, zeilen) { //erstellt die KalenderWochen-Raster
    console.log("createKW");
    // erstellt die erste Zelle die frei ist
    document.write("<td class = 'KW_raster-free'></br></td>"); 
    let KW_d = 1; // variable zum hochzählen der KalenderWochen
    for (i = 0; i < KW; i++) 
    {
        document.write("<td class = 'KW_raster'>KW </br>",KW_d,"</td>"); 
        KW_d++;
    }
        createRow_KW(KW, zeilen);
}

function createRow_KW(KW, zeilen) { //erstellt bei jedem neuen Aufruf eine neue Reihe
    console.log("createRow_KW");
    for (x = 0; x < zeilen; x++)
    { 
        document.write("<tr class = 'newLine'>");
        createCell_KW(KW);    
        raster = 1;
        document.write("</tr>");
    }
}

function createCell_KW(KW) { 
    console.log("createCell_KW");
    // erstellt für jede neue Reihe eine Zelle für die Mitarbeiter
    document.write("<td class = 'cell-employees' id = 'employee_name_",zeile,"'>Mitarbeiter</td>"); 
    for(y= 0; y < KW; y++) 
    {
        //gibt den Zellen eine id mit eindeutigen kennzeichen
        document.write("<td class = 'cell' id = 'raster_",raster,"_",zeile,"' onclick = 'buttonclick(id)'></td>"); 
        raster++;
    } 
    zeile++;
}
