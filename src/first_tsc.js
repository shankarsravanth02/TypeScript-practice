"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var age = 21;
var d = 20;
var m;
m = 10;
m = 'a';
if (age > 18)
    age += 10;
//console.log("teen");
// const enum Size {Small=3, Medium, Hard};
// let mysize: Size =Size.Hard;
// console.log(mysize);
// function display(name:string, age:number){
//     let status:string="unmarried";
//     if(age>21)
//     {
//         status="married";
//         return status;
//     }
//     return status;
// }
// console.log(display("sravanth",19));
// type student = {
//     roll_no:number,
//     name:string,
//     branch: string
// }
// let details: student={
//     roll_no:24,
//     name: "sravanth",
//     branch: "cse"
// }
// console.log(details.name);
// function specify_height(height: number | string){
//     if(typeof(height) === 'number'){
//         return height;
//     }
//     else {
//         return typeof(height);
//     }
// }
// console.log(specify_height(5))
// type customer ={
//     pin: number;
// }
// function getPin(id:number): customer | null | undefined {
//     return id===0?null : { pin :new Number};
// }
// class classroom {
//     // readonly class_num: number;
//     // strength: number;
//     // block: string;
//     constructor(public readonly class_num: number, public strength: number, public block: string) {
//         // this.class_num=class_num;
//         // this.strength=strength;
//         // this.block=block;
//     }
//     private vip: number=25
//     is_vip(class_id: number): boolean{
//         return class_id===25?true:false;
//     }
//     getblock(class_id:number){
//         if(class_id<=0){
//             console.log("Invalid class number")
//         }
//         else {
//             if(class_id>=1 && class_id<=30){
//                 this.block="A";
//                 console.log(this.block);
//             }
//             else {
//                 this.block="B";
//                 console.log(this.block);
//             }
//         }
//     }
//     get room():number {
//         return this.class_num;
//     }
//     set room(class_num) {
//         class_num=25;
//     }
// }
// let property = new classroom(0,60,"G");
// console.log(property.class_num);
// console.log(property);
// console.log(property.is_vip(25))
// console.log(property.getblock(-40));
// console.log(property instanceof classroom);
// class gen<K,V> {
//      constructor(key: K, value: V){
//           console.log(key);
//           console.log(value);
//      }
//      static call<T,B> (take: T, breath: B){
//           return [take,breath]
//      }
// }
// let obj=new gen(1,'one');
// //console.log(obj);
// console.log(gen.call('ok','done'));
// interface product<T> {
//      id: number,
//      name: string,
//      object: string
// }
// class StorageShop<T>{
//      private objs: string[]=[]
//      count: number =0
//      store<product>(id: number,name: string,object: string) : void{
//           this.objs.push(name);
//           this.count+=1
//      }
//      get display() {
//           return this.objs
//      }
// }
// let add=new StorageShop();
// add.store(1,'dryer','usables');
// add.store(2,'pens','stationery');
// add.store(3,'earpods','gadgets');
// console.log(add.display);
// console.log("Number of products added are :"+add.count)
//Decorators
// function give(){
//      console.log("given")
// }
// function justshow(give){
//      console.log("just showed");
// }
// @justshow
// class displayed {
// }
var func_1 = require("./func");
var id = (0, func_1.display)();
console.log(id);
