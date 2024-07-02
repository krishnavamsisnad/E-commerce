import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { acData } from 'src/data/ac';
import { booksData } from 'src/data/books';
import { computerData } from 'src/data/computers';
import { fridgeData } from 'src/data/fridge';
import { furnitureData } from 'src/data/furniture';
import { kitchenData } from 'src/data/kitchen';
import { menData } from 'src/data/men';
import { mobileData } from 'src/data/mobiles';
import { tvData } from 'src/data/tv';
import { watchData } from 'src/data/watch';
import { womanData } from 'src/data/woman';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    
  apiurl="https://localhost:7291/api/Categories";
  address="https://localhost:7291/api/Address";
  apiProductsUrl="https://localhost:44378/api/Products";

  constructor(private http:HttpClient) { }

  private acInfo = acData;
  private bookInfo=booksData;
  private computerInfo=computerData;
  private fridgeInfo=fridgeData;
  private furnitureInfo=furnitureData;
  private kitchenInfo=kitchenData;
  private menInfo=menData;
  private mobileInfo=mobileData;
  private tvInfo=tvData;
  private watchInfo=watchData;
  private womanInfo=womanData;

  getProducts(){
    return this.http.get(this.apiProductsUrl);
  }

  getAc() {
    return this.acInfo;
  }

  getBook() {
    return this.bookInfo;
  }

  getComputer() {
    return this.computerInfo;
  }

  getFridge() {
    return this.fridgeInfo;
  }

  getFurniture() {
    return this.furnitureInfo;
  }

  getKitchen() {
    return this.kitchenInfo;
  }

  getMen() {
    return this.menInfo;
  }

  getMobile() {
    return this.mobileInfo;
  }

  getTv() {
    return this.tvInfo;
  }

  getWatch() {
    return this.watchInfo;
  }

  getWoman() {
    return this.womanInfo;
  }

  getMobileById(id: string) {
    return this.mobileInfo.find(mobile => mobile.id === id);
  }

  getComputerById(id: string) {
    return this.computerInfo.find(computer => computer.id === id);
  }

  getFurnitureById(id: string) {
    return this.furnitureInfo.find(furniture => furniture.id === id);
  }

  getFashionById(id: string) {
    return this.menInfo.find(men => men.id === id);
    // return this.womanInfo.find(woman => woman.id === id);
  }

  getFashionWomanById(id: string) {
    // return this.menInfo.find(men => men.id === id);
    return this.womanInfo.find(woman => woman.id === id);
  }

  getWatchById(id: string) {
    return this.watchInfo.find(watch => watch.id === id);
  }

}
