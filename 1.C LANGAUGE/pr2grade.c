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
            printf("your Grade is : %c\n", grade);

  switch (grade) {
        case 'A':
             
            printf("Excellent performance \n");
            break;
        case 'B':
            printf("Great work\n");
            break;
        case 'C':
            printf("Good job\n");
            break;
        case 'D':
            printf("Satisfactory\n");
            break;
        case 'E':
            printf("Needs improvement\n");
            break;
        case 'F':
            printf("Failed. Try again\n");
            break;
        default:
            printf("Invalid grade\n");
    }
    
     if (grade == 'F') {
        printf("Try again next time.\n");
    } else {
        printf("You are eligible to the next level.\n");
    }

    

    return 0;
}
