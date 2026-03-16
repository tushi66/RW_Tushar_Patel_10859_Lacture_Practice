#include <stdio.h>
#include <string.h>

int main() {
    char email[50];
    char password[20];
    int Letter = 0;
    int Digit = 0;

    printf("Enter your mail: ");
    scanf("%s", email);  

    printf("Enter your password: ");
    scanf("%s", password);  

    int leng = strlen(password);

    for (int i = 0; i < leng; i++) {
        char ch = password[i];

        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            Letter = 1;
        } else if (ch >= '0' && ch <= '9') {
            Digit = 1;
        }
    }

    if (Letter && Digit) {
        printf("Login is successful\n");
    } else {
        printf("Login is weak. Password must include both letters and digits.\n");
    }

    return 0;
}
