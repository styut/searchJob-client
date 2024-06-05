

// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-make-resume',
// //   templateUrl: './make-resume.component.html',
// //   styleUrls: ['./make-resume.component.css']
// // })
// // export class MakeResumeComponent {
// //   fullName: string = "";
// //   dateOfBirth: string = "";
// //   skills: string = "";
// //   educationLevel: string = "";
// //   resumeCreated: boolean = false;
// //   backgroundStyle: string = ""; // משתנה שיקבע את סגנון הרקע

// //   onSubmit() {
// //     this.resumeCreated = true;
// //   }

// //   lightF() {
// //     this.backgroundStyle = "lightblue"; // קובעים סגנון רקע תכלת
// //   }

// //   redF() {
// //     this.backgroundStyle = "red"; // קובעים סגנון רקע אדום
// //   }

// //   downloadHTML() {
// //     const resumeContent = `
// //       <style>
// //         body {
// //           background-color: ${this.backgroundStyle}; // משתמשים בערך של backgroundStyle
// //         }
// //       </style>
// //       <div id="resume">
// //         <h2>קורות חיים</h2>
// //         <p><strong>שם מלא:</strong> ${this.fullName}</p>
// //         <p><strong>תאריך לידה:</strong> ${this.dateOfBirth}</p>
// //         <p><strong>כישורים:</strong> ${this.skills}</p>
// //         <p><strong>השכלה:</strong> ${this.educationLevel}</p>
// //       </div>
// //     `;
// //     const element = document.createElement('a');
// //     const file = new Blob([resumeContent], { type: 'text/html' });
// //     element.href = URL.createObjectURL(file);
// //     element.download = 'resume.html';
// //     document.body.appendChild(element);
// //     element.click();
// //   }  
// // }




// import { MatDialog } from '@angular/material/dialog';
// import { Component } from '@angular/core';
// import { ResumeModalComponent } from '../resume-modal/resume-modal.component';

// @Component({
//   selector: 'app-make-resume',
//   templateUrl: './make-resume.component.html',
//   styleUrls: ['./make-resume.component.css']
// })
// export class MakeResumeComponent {
//   constructor(public dialog: MatDialog) { }

//   fullName: string = "";
//   dateOfBirth: string = "";
//   skills: string = "";
//   educationLevel: string = "";
//   resumeCreated: boolean = false;
//   backgroundStyle:string='white';

//   onSubmit() {
//     this.resumeCreated = true;

//     const dialogRef = this.dialog.open(ResumeModalComponent, {
//       width: '800px', // רוחב החלון
//       data: {  // הנתונים שיועברו למודל
//         fullName: this.fullName,
//         dateOfBirth: this.dateOfBirth,
//         skills: this.skills,
//         educationLevel: this.educationLevel
//       }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       this.resumeCreated = false; // סגירת הפופ-אפ תחזיר את הערך לשקר
//       if (result === 'download') {
//         this.downloadHTML();
//       }
//     });
//   }

//   lightF() {
//     this.resumeCreated = false; // סגירת הפופ-אפ תחזיר את הערך לשקר
//     this.backgroundStyle = "lightblue"; // קובעים סגנון רקע תכלת
//   }

//   redF() {
//     this.resumeCreated = false; // סגירת הפופ-אפ תחזיר את הערך לשקר
//     this.backgroundStyle = "red"; // קובעים סגנון רקע אדום
//   }
 
//   downloadHTML() {
//     const resumeContent = `
//       <style>
//         body {
//           background-color: ${this.backgroundStyle}; // משתמשים בערך של backgroundStyle
//         }
//       </style>
//       <div id="resume">
//         <h2>קורות חיים</h2>
//         <p><strong>שם מלא:</strong> ${this.fullName}</p>
//         <p><strong>תאריך לידה:</strong> ${this.dateOfBirth}</p>
//         <p><strong>כישורים:</strong> ${this.skills}</p>
//         <p><strong>השכלה:</strong> ${this.educationLevel}</p>
//       </div>
//     `;
//     const element = document.createElement('a');
//     const file = new Blob([resumeContent], { type: 'text/html' });
//     element.href = URL.createObjectURL(file);
//     element.download = 'resume.html';
//     document.body.appendChild(element);
//     element.click();
//   }
// }


import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeModalComponent } from '../resume-modal/resume-modal.component';

@Component({
  selector: 'app-make-resume',
  templateUrl: './make-resume.component.html',
  styleUrls: ['./make-resume.component.css']
})
export class MakeResumeComponent {
  constructor(public dialog: MatDialog) { }

  fullName: string = "";
  dateOfBirth: string = "";
  skills: string = "";
  educationLevel: string = "";
  resumeCreated: boolean = false;
  backgroundStyle: string = "white"; // משתנה שיקבע את סגנון הרקע

  onSubmit() {
    this.resumeCreated = true;

    const dialogRef = this.dialog.open(ResumeModalComponent, {
      width: '800px', // רוחב החלון
      data: {  // הנתונים שיועברו למודל
        fullName: this.fullName,
        dateOfBirth: this.dateOfBirth,
        skills: this.skills,
        educationLevel: this.educationLevel
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result =='blue') {
        this.backgroundStyle = "lightblue";
        this.downloadHTML();
      } else if (result == 'red') {
        this.backgroundStyle = "red";
        this.downloadHTML();
      }
    });
  }

  lightF() {
    this.resumeCreated = false; // סגירת הפופ-אפ תחזיר את הערך לשקר
    this.backgroundStyle = "lightblue"; // קובעים סגנון רקע תכלת
  }

  redF() {
    this.resumeCreated = false; // סגירת הפופ-אפ תחזיר את הערך לשקר
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
