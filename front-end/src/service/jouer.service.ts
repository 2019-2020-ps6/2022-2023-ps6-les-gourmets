import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Question } from 'src/models/question.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ButtonSound } from 'src/models/ButtonSound';

@Injectable({
  providedIn: 'root'
})
export class JouerService {

    //Musique permanence
    //Interrompre quiz lors de 2eme rage
    //Aucun click pdt longtem, arreter le quiz

    //Timer
    private start : number = Date.now();
    private Timer: number = 0;

    chronoStart(){
        this.start = Date.now();
    }
    chronoStop() : number {
        const end = Date.now()
        this.Timer = end - this.start;
        return this.Timer;
    }

    //Music
   /*
    can be called by:
    @HostListener("document:mousedown",['$event'])
    onClick(event: MouseEvent){this.jouerService.mouseClickInQuiz(event);}
  */

    static mainMusics : string[] = ["assets/Music/MainTheme.mp3"]
    static UserMusic : AudioFade;
    static backgroundMusic : AudioFade;
    public musicActivated = true;
    public effectsActivated: boolean = true;
    private rage = false;
    private dateTab : number[] = [];
    private quitPopup = false;
    private results : boolean[]=[];
    private questions : Question[]=[];
    public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);
    public results$: BehaviorSubject<boolean[]> = new BehaviorSubject(this.results);
    public quitPopup$: BehaviorSubject<boolean> = new BehaviorSubject(this.quitPopup);
    private ezNextQuestion = false;
    private ezNextQuestion$ : BehaviorSubject<boolean> = new BehaviorSubject(this.ezNextQuestion);;
    private timeSpan = 6000 // in ms
    private nbClick = 5 // number of click during timeSpan to trigger
    private timeout = 10000; // delay before quitpopup shows up
    private inactivity = 0;
    private quitInterval : any;




    private easyQuestions: Question[] = [];
    public easyQuestions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.easyQuestions);

    constructor(private userService :UserService){
    }

    public setTimeout(nb: number){
        this.timeout = nb;
    }

    public updateResults(questions:Question[],answers:boolean[]){

        this.results = answers;
        this.results$.next(this.results);

        this.questions = questions;
        this.questions$.next(this.questions);

        this.easyQuestions = questions.filter(q => q.estFacile);
        this.easyQuestions$.next(this.easyQuestions);

    }

    public mouseClickInQuiz(event : MouseEvent) {
        const CurrentUser = this.userService.getCurrentUser();
        const now : number = Date.now();
        const agressive = (CurrentUser!=undefined||CurrentUser==0)? CurrentUser.aggressivness : 0.05;

        this.relaunchTimer();
        this.dateTab = this.dateTab.filter(date => date > now - this.timeSpan * (1/agressive));
        this.dateTab.push(now);
        if(this.dateTab.length>this.nbClick) this.triggerRage();
    }

    private triggerRage(){
        this.ezNextQuestion = true;

        this.resetClickCounter();
        if(this.rage) {this.quitPopupVisibility(true);}
        else{
            const path = this.userService.getCurrentUser().music.sort(() => Math.random()-0.5)[0];
            this.playUserMusic(path);
            this.rage = true;
        }
    }

    public untriggerRage(){
        this.ezNextQuestion = false;
    }

    public getRage() : boolean{
        return this.rage;
    }

    public playBackgroundMusic(){
        this.stopMusic(JouerService.UserMusic);
        if(!this.musicActivated)return;
        if(JouerService.backgroundMusic!=null && !JouerService.backgroundMusic.paused)return;
        const path = JouerService.mainMusics.sort(() => Math.random()-0.5)[0];
        JouerService.backgroundMusic = new AudioFade(path);
        JouerService.backgroundMusic.play(0.5);
    }

    public playUserMusic(path : string|null){
        this.stopMusic(JouerService.backgroundMusic);
        if(!this.musicActivated)return;
        if(path!=null){
          JouerService.UserMusic = new AudioFade(path);
          JouerService.UserMusic.play(0.5);
        }
    }


    public stopAllMusic(){
        this.stopMusic(JouerService.UserMusic);
        this.stopMusic(JouerService.backgroundMusic);
    }
    public stopMusic(music : AudioFade){
        if(music!=null)music.pause()
    }

    public setMusicActivated(activated : boolean){
        this.musicActivated = activated;
        if(activated) {
            if (this.rage) this.playUserMusic(null)
            else this.playBackgroundMusic();
        }
        else this.stopAllMusic();
    }
    public setEffectsActivated(checked: boolean) {
      this.effectsActivated = checked;
    }

    public resetClickCounter(){
        this.dateTab = [];
    }

    public removeLastClick(){
        this.dateTab.pop();
    }

    public popupAnswer(answer : boolean){
        if(answer){//User quitte le quiz
            this.chronoStop();
        } else { //User reste sur le quiz

        }
        this.rage = false;
        this.resetClickCounter();
    }
    
    static isAudioPlaying(): boolean {
      return !(JouerService.UserMusic.paused && JouerService.backgroundMusic.paused);
    }
    
    static isSoundPlaying(): boolean {
      return !JouerService.buttonSound.paused;
    }


  reset() {
    this.resetClickCounter();
    clearInterval(this.quitInterval);
    this.rage=false;
    this.ezNextQuestion = false;
    this.quitPopup = false;

  }
  quizLaunch(){
    this.reset();

    this.quitInterval = setInterval(() => {
        this.inactivity += 1000;
        if (this.inactivity >= this.timeout) {
            this.inactive();
            this.inactivity = 0; // Réinitialiser le compteur d'inactivité
        }
    }, 1000);

    this.chronoStart();
  }

  quizLeave(){
    this.reset();
  }

  getTimer() : number{
    return Date.now() - this.start;
  }
  quitPopupVisibility(value:boolean=false){
    this.quitPopup = value;
    this.quitPopup$.next(this.quitPopup);
  }

  relaunchTimer() {
    this.inactivity = 0;
  }

  inactive() {
    this.quitPopupVisibility(true);
  }
  mouseMoveInQuiz(event: MouseEvent) {
    this.relaunchTimer();
  }

  static buttonSound = new Audio();
  public playButtonSimpleSound(AudioType:ButtonSound = ButtonSound.SelectAnswer){
    if (!JouerService.buttonSound.paused) {
      JouerService.buttonSound.pause();
      JouerService.buttonSound.currentTime = 0;
    }
    if(!this.effectsActivated) return;

    switch(AudioType){
      case ButtonSound.SelectAnswer:
        JouerService.buttonSound.src = "assets/Sounds/simpleButtonClick1.mp3";
        break;
      case ButtonSound.MainMenuCreate:
        JouerService.buttonSound.src = "assets/Sounds/MainMenuCreate.mp3";
        break;
      case ButtonSound.MainMenuPlay:
        JouerService.buttonSound.src = "assets/Sounds/MainMenuPlay.mp3";
        break;
      case ButtonSound.deleteSound:
        JouerService.buttonSound.src = "assets/Sounds/deleteSound.mp3";
      break;
      case ButtonSound.SelectingObject:
        JouerService.buttonSound.src = "assets/Sounds/selectObject.wav"
      break;
      case ButtonSound.NextQuestion:
        JouerService.buttonSound.src = "assets/Sounds/NextQuestion.mp3"
      break;
      case ButtonSound.back:
        JouerService.buttonSound.src = "assets/Sounds/back.mp3"
        break;
    }
    JouerService.buttonSound.play();
  }
}


class AudioFade extends Audio{
  public fade :any;
  constructor(path : string) {
      super(path);
      this.reset();
  }

  public override play(volume : number =1): Promise<void> {
    this.muted = true;
    var result = super.play()
    this.fadeVolume(true,volume);
    this.muted=false;
    return result
  }
  override pause(): void {
      this.fadeVolume(false);
  }

  public reset(){
      this.currentTime = 0;
      this.autoplay=true;
      this.loop = true;
      this.volume=0;
  }

  public fadeVolume(fadeIn:boolean, volume :number = 1){
    const interval = 20;
    const increment = fadeIn ? 0.01 : -0.01;
    clearInterval(this.fade);

    this.fade = setInterval(() => {
      if (fadeIn && this.volume+increment >= volume) {
        this.volume = volume;
        clearInterval(this.fade);
      }
      else if (!fadeIn && this.volume+increment <= 0) {
      this.volume = 0;
        clearInterval(this.fade);
        this.reset()
        return super.pause();
      }
      else this.volume += increment;
    }, interval);
  }
}

