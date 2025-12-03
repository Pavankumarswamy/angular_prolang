import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prolang';
  
  // User stats
  userXP = 1250;
  userStreak = 7;
  userLevel = 12;
  
  // Course progress
  pythonProgress = 65;
  pythonLessonsCompleted = 32;
  
  javascriptProgress = 40;
  javascriptLessonsCompleted = 18;
  
  javaProgress = 25;
  javaLessonsCompleted = 15;
  
  cppProgress = 10;
  cppLessonsCompleted = 5;
  
  // Daily challenge
  dailyChallengeDescription = "Write a function that finds the factorial of a number using recursion!";
  
  selectCourse(language: string) {
    console.log(`Selected course: ${language}`);
    // Navigate to course details page
  }
  
  startDailyChallenge() {
    console.log('Starting daily challenge');
    // Navigate to challenge page
  }
}
