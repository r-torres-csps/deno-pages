// import * as mod from "https://deno.land/std@0.154.0/fs/mod.ts";
// import {readLines} from "https://deno.land/std/io/bufio.ts";
import { copy } from "https://deno.land/std@0.162.0/fs/copy.ts";


let enTemplate = './src/bs-assets/templates/index_en.html';
let frTemplate = './src/bs-assets/templates/index_fr.html';

let enDest = './src/content/pages_en.html';
let frDest = './src/content/pages_fr.html';


copy(enTemplate, enDest)
copy(frTemplate, frDest)
