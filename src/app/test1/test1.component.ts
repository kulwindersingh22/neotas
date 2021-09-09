import { Component, OnInit } from '@angular/core';
import { OmdService } from '../services/omd.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  title:any='bell';
  constructor(private service:OmdService) { }
  movieDetails:any;
  movieArray:any=[];
  ngOnInit(): void {
  }

  removeFav(Index:number){
    this.movieArray.splice(Index, 1);
  }
  
  addToFav(){
    if(this.movieDetails.fav){
     let Index =this.movieArray.findIndex((x:any)=> x== this.movieDetails);
      if(Index>-1){
        this.movieArray.splice(Index, 1);
      }
      this.movieDetails.fav=false;
      
    }else{
      this.movieDetails.fav=true;
      this.movieArray.push(this.movieDetails);
    }

  } 

  getMovieDetails(){
    if(this.title==''){
      alert("Please provide title.");
      return;
    }
    let url='http://www.omdbapi.com/?apikey=917778a6&t='+this.title;

    this.service.getOmdMovie(url).subscribe(res=>{
      if(res.Error){
        alert(res.Error);
      }else{
        this.movieDetails=res;
      }
    },err=>{

    })
  }
}
