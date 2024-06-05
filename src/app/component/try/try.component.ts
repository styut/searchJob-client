import { Component } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrl: './try.component.css'
})
export class TryComponent {
  htmlContent: string = `<html>
<head>
  <title>My HTML Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a sample HTML content.</p>
</body>
</html>`;

  downloadHTML() {
    const element = document.createElement('a');
    const file = new Blob([this.htmlContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'my_html_file.html';
    document.body.appendChild(element);
    element.click();
  }
}
