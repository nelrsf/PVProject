import { Load } from './Load';

let L1: Load = new Load("lamp", 10, 25,
       [false,false,false,false,false,true,false,false,false,false,false,false,
        false,false,false,false,false,true,true,true,true,true,true,false]);
let L2: Load = new Load("TV", 2, 100,
        [false,false,false,false,false,true,true,true,false,false,false,false,
         false,false,false,false,false,true,true,true,true,false,false,false]);
let L3: Load = new Load("Phone charger", 3, 10,
         [true,true,false,false,false,false,false,false,false,false,false,false,
          false,false,false,false,false,true,true,true,true,true,true,true]);

export const LOADS: Load[] = [L1,L2,L3];