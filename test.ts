//  import * as mod from "https://deno.land/std@0.154.0/fs/mod.ts";
import { readLines } from "https://deno.land/std/io/bufio.ts";
import { copy } from "https://deno.land/std@0.154.0/fs/copy.ts";

let enTemplate = "./src/bs-assets/templates/index_en.html";
let frTemplate = "./src/bs-assets/templates/index_fr.html";

// Global vars
declare global {
    let enDest: string
    let frDest: string
    interface Window {
        enDest: string;
        frDest: string;
    }
}



async function nameAPage(question: string) {
    console.log(question);
    const pageName = await readLines(Deno.stdin);
    if (pageName !== '' || pageName !== undefined) {
        window.enDest = `./src/content/${pageName}_en.html`;
        window.frDest = `./src/content/${pageName}_fr.html`;
    }
}

const createPage = await nameAPage("Name your page: ")

createPage;
copy(enTemplate, window.enDest);
copy(frTemplate, window.frDest);

