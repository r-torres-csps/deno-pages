// import * as mod from "https://deno.land/std@0.154.0/fs/mod.ts";
// import {readLines} from "https://deno.land/std/io/bufio.ts";
import { copy } from "https://deno.land/std@0.154.0/fs/copy.ts";


let enTemplate = './src/bs-assets/templates/index_en.html';
let frTemplate = './src/bs-assets/templates/index_fr.html';

let enDest = './src/content/page_en.html';


copy(enTemplate, enDest)
