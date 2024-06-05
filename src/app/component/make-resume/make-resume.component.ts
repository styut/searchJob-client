

import { Component } from '@angular/core';

@Component({
  selector: 'app-make-resume',
  templateUrl: './make-resume.component.html',
  styleUrls: ['./make-resume.component.css']
})
export class MakeResumeComponent {
  fullName: string = "";
  dateOfBirth: string = "";
  skills: string = "";
  educationLevel: string = "";
  resumeCreated: boolean = false;
  backgroundStyle: string = ""; // משתנה שיקבע את סגנון הרקע

  onSubmit() {
    this.resumeCreated = true;
  }

  lightF() {
    this.backgroundStyle = "lightblue"; // קובעים סגנון רקע תכלת
  }

  redF() {
    this.backgroundStyle = "red"; // קובעים סגנון רקע אדום
  }

  downloadHTML() {
    const resumeContent = `
      <style>
        body {
          background-color: ${this.backgroundStyle}; // משתמשים בערך של backgroundStyle
        }
      </style>
      <div id="resume">
        <h2>קורות חיים</h2>
        <p><strong>שם מלא:</strong> ${this.fullName}</p>
        <p><strong>תאריך לידה:</strong> ${this.dateOfBirth}</p>
        <p><strong>כישורים:</strong> ${this.skills}</p>
        <p><strong>השכלה:</strong> ${this.educationLevel}</p>
      </div>
    `;
    const element = document.createElement('a');
    const file = new Blob([resumeContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'resume.html';
    document.body.appendChild(element);
    element.click();
  }  
}

