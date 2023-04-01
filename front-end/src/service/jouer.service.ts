import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


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
        return this.Timer;
    }

    //Music
   /*
    can be called by:
    @HostListener("document:mousedown",['$event'])
    onClick(event: MouseEvent){this.jouerService.mouseClickInQuiz(event);}
  */
    private mainMusics : string[] = ["MainTheme.mp3"]
    public musicActivated = true;
    private music !: HTMLAudioElement ;
    private rage = false;
    private dateTab : number[] = [];
    private musicFade : any;
    private quitPopup = false;
    public quitPopup$: BehaviorSubject<boolean> = new BehaviorSubject(this.quitPopup);
    private ezNextQuestion = false;
    private ezNextQuestion$ : BehaviorSubject<boolean> = new BehaviorSubject(this.ezNextQuestion);;
    private timeSpan = 3000 // in ms
    private nbClick = 5 // number of click during timeSpan to trigger

    public mouseClickInQuiz(event : MouseEvent) {
        const CurrentUser = this.userService.getCurrentUser();
        const now : number = Date.now();
        const agressive = (CurrentUser!=undefined)? CurrentUser.aggressivness : 1;
        this.dateTab = this.dateTab.filter(date => date > now - this.timeSpan * (1/agressive));
        this.dateTab.push(now);
        console.log(this.dateTab.length);
        if(this.dateTab.length>this.nbClick) this.triggerRage();
    }

    private triggerRage(){
        this.ezNextQuestion = true;
        this.resetClickCounter();
        if(this.rage) {this.quitPopup = true; return;}
        this.playMusic(null);
        this.rage = true;
    }

    public playMusic(path : string|null){
        if(!this.musicActivated || !this.rage) return;
        if(this.music == null || path!=null){
            if(path ==null) path = this.userService.getCurrentUser().music.sort(()=>Math.random()-0.5)[0];
            this.music = new Audio('assets/Music/'+path);
            this.music.loop = true;
            this.music.volume=0;
            this.music.play();
        }
        this.fadeVolume(true);

    }
    public stopMusic(){
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
    public setMusicActivated(activated : boolean){
        this.musicActivated = activated;
        //if(activated) this.playMusic();
        //else this.stopMusic();
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
    public popupAnswer(answer : boolean){
        if(answer){//User quitte le quiz
            this.chronoStop();
        } else { //User reste sur le quiz

        }
        this.rage = false;
        this.resetClickCounter();
    }
}
