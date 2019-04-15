import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "DemoTest";

  questionData = [
    {
      id: 1,
      question: "What is your name?",
      answer: "My Name is Ashish."
    },
    {
      id: 2,
      question: "Where do you live?",
      answer: "I live at Nagpur."
    },
    {
      id: 3,
      question: "What is your qualification?",
      answer: "I've completed my MCA."
    },
    {
      id: 4,
      question: "What is your father?",
      answer: "My Father is Farmer."
    },
    {
      id: 5,
      question: "What is your designation?",
      answer: "I'm Web Developer."
    },
    {
      id: 6,
      question: "Where are you working?",
      answer: "I'm working in Orangebits Software Technologies India Pvt Ltd."
    },
    {
      id: 7,
      question: "How many experience you have?",
      answer: "I'm having 1.8 yrs of experience"
    }
  ];
}
