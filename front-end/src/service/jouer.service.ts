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

    private mainMusics : string[] = ["MainTheme.mp3"]
    private UserMusic !: AudioFade ;
    private backgroundMusic !: AudioFade ;
    public musicActivated = true;
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
        const agressive = (CurrentUser!=undefined)? CurrentUser.aggressivness : 1;

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

        const currentQuestionIndex = this.results$.value.findIndex(result => !result);
        if (currentQuestionIndex >= 0) {
            const easyQuestions = this.easyQuestions.slice();
            const remainingQuestions = this.questions$.value.slice(currentQuestionIndex + 1);
            this.questions$.value.splice(currentQuestionIndex + 1, this.questions$.value.length - currentQuestionIndex - 1, ...easyQuestions, ...remainingQuestions);
        }
    }

    public untriggerRage(){
        this.ezNextQuestion = false;
    }

    public getRage() : boolean{
        return this.rage;
    }

    public playBackgroundMusic(){
        this.stopMusic(this.UserMusic);
        if(this.backgroundMusic!=null && !this.backgroundMusic.paused)return;
        const path = this.mainMusics.sort(() => Math.random()-0.5)[0];
        this.backgroundMusic = new AudioFade('assets/Music/'+path);
        this.backgroundMusic.play(0.5);
    }

    public playUserMusic(path : string|null){
        this.stopMusic(this.backgroundMusic);
        if(this.UserMusic == null && path!=null){
            this.UserMusic = new AudioFade('assets/Music/'+path);
        }
        this.UserMusic.play(0.5);
    }


    public stopAllMusic(){
        this.stopMusic(this.UserMusic);
        this.stopMusic(this.backgroundMusic);
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

  private buttonSound = new Audio();
  public playButtonSimpleSound(AudioType:ButtonSound = ButtonSound.SelectAnswer){
    if (!this.buttonSound.paused) {
      this.buttonSound.pause();
      this.buttonSound.currentTime = 0;
    }
    this.buttonSound.src="assets/Sounds/"
    switch(AudioType){
      case ButtonSound.SelectAnswer:
        this.buttonSound.src += "simpleButtonClick1.mp3";
        break;
      case ButtonSound.MainMenuCreate:
        this.buttonSound.src += "MainMenuCreate.mp3";
        break;
      case ButtonSound.MainMenuPlay:
        this.buttonSound.src += "MainMenuPlay.mp3";
        break;
      case ButtonSound.deleteSound:
        this.buttonSound.src += "deleteSound.mp3";
      break;
      case ButtonSound.SelectingObject:
        this.buttonSound.src += "selectObject.wav"
      break;
      case ButtonSound.NextQuestion:
        this.buttonSound.src += "NextQuestion.mp3"
      break;
      case ButtonSound.back:
        this.buttonSound.src += "back.mp3"
        break;
    }
    this.buttonSound.play();
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
