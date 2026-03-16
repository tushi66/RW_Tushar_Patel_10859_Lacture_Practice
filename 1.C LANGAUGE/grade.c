#include <stdio.h>

int main() {

    float marks;
    char grade;
    

    printf("Enter your marks (0–100): ");
    scanf("%f", &marks);

    // Grade using ternary operators
    grade = (marks >= 90) ? 'A' :
            (marks >= 80) ? 'B' :
            (marks >= 70) ? 'C' :
            (marks >= 60) ? 'D' :
            (marks >= 50) ? 'E' : 'F';
            printf("Grade: %c\n", grade);

  switch (grade) {
        case 'A':
             
            printf("Excellent performance");
            break;
        case 'B':
            printf("Great work");
            break;
        case 'C':
            printf("Good job");
            break;
        case 'D':
            printf("Satisfactory");
            break;
        case 'E':
            printf("Needs improvement");
            break;
        case 'F':
            printf("Failed. Try again");
            break;
        default:
            printf("Invalid grade");
    }
    
     if (grade == 'F') {
        printf("Try again next time.\n");
    } else {
        printf("Successful! Proceed to the next level.\n");
    }

    

    return 0;
}
