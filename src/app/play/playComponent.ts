import { Component } from "@angular/core";

@Component({
    selector: 'pg-play',
    templateUrl: './playComponent.html',
    styleUrls: ['./playComponent.css']
})
export class PlayComponent {
  title: string = "Press Play";
  audioObj = new Audio('./Gong-sound.mp3');

  playSound(): void{
    this.audioObj.play();
    console.log("still plays");
  }
}
