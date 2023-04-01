import { Injectable } from '@angular/core';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})

export class JouerService {
    

    constructor(private userService :UserService){

    }

    //Musique permanence
    //Interrompre quiz lors de 2eme rage
    //Aucun click pdt longtem, arreter le quiz

    //Timer
    private start : number = Date.now();
    private Timer: number = 0;

    chronoStart(){
        this.start = Date.now();
        console.log("Timer Start")
        console.log("timer Start: " + this.start);
    }
    chronoStop() : number {
        const end = Date.now()
        this.Timer = end - this.start;
        console.log("Timer Stop")
        console.log("timer Start: " + this.start);
        console.log("timer End: " + end);
        console.log("timer Value: " + this.Timer);
        return end;
    }

    //Music
   /*
    can be called by:
    @HostListener("document:mousedown",['$event'])
    onClick(event: MouseEvent){this.jouerService.mouseClickInQuiz(event);}
  */
    
    private music !: HTMLAudioElement ;
    private rage = false;
    private dateTab : number[] = [];
    private musicFade : any;
    private ezNextQuestion = false;

    public mouseClickInQuiz(event : MouseEvent) {
        const CurrentUser = this.userService.getCurrentUser();
        const now : number = Date.now();
        const agressive = (CurrentUser!=undefined)? CurrentUser.aggressivness : 1;
        this.dateTab = this.dateTab.filter(date => date > now - 3000 * (1/agressive));
        this.dateTab.push(now);
        console.log(this.dateTab.length);
        if(this.dateTab.length>5) this.triggerRage();
    }
  
    private triggerRage(){
        this.ezNextQuestion = true;
        if(this.rage) return;
        this.resetClickCounter;
        this.playMusic();
        this.rage = true;
    }
    public playMusic(){
        const CurrentUser = this.userService.getCurrentUser();
        const audiopath = CurrentUser.music.sort(()=>Math.random()-0.5)[0];
        this.music = new Audio('assets/Music/'+audiopath);
        this.music.loop = true;
        this.music.volume=0;
        this.music.play();
        this.fadeVolume(true);

    }public stopMusic(){
      if(this.music==null) return;
      clearInterval(this.musicFade);
      const interval =50;
      let fadeVolume = this.music.volume;
      const fade = setInterval(()=>{
        if(fadeVolume-0.01 >= 0)fadeVolume -=0.01;
        else {
          this.music.volume = 0;
          this.music.pause();
          this.music.currentTime=0;
          clearInterval(fade);
        }
        this.music.volume=fadeVolume;
        

      }, interval)
    }

    
    public fadeVolume(fadeIn:boolean){
      if (this.music ==null) return;
      const interval = 20;
      const increment = fadeIn ? 0.01 : -0.01;
      clearInterval(this.musicFade);

      this.musicFade = setInterval(() => {
        if (fadeIn && this.music.volume+increment >= 1) {
          this.music.volume = 1;
          clearInterval(this.musicFade);
        }
        else if (!fadeIn && this.music.volume+increment <= 0) {
          this.music.volume = 0;
          clearInterval(this.musicFade);
        }
        else this.music.volume += increment;
      }, interval);
    }
    public resetClickCounter(){
        this.dateTab = [];
    }
    public removeLastClick(){
        this.dateTab.pop();
        console.log("new size = "+this.dateTab.length);
    }
}