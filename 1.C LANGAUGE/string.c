#include <stdio.h>

int main() {
    char ch;
    
    int count = 0;

    printf("Enter text (end with ENTER key):\n");
    scanf("%d",&ch);

    while ((ch = getchar())!= '\n') { // Read until Enter is pressed
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
            ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
            count++;
        }
    }

    printf("Number of vowels: %d\n", count);
    return 0;
}
