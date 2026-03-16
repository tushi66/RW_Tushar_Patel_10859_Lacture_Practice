#include <stdio.h>

int main() {
    char word[100];
    int freq[26] = {0}; 
    int i = 0;

    printf("Enter a word: ");
    scanf("%s", &word);

    while (word[i] != '\0') {
        char ch = word[i];


        if (ch >= 'A' && ch <= 'Z') {
            ch = ch + ('a' - 'A');  
        }

        if (ch >= 'a' && ch <= 'z') {
            freq[ch - 'a']++; 
            }    i++;
    }

    printf("\nLetter frequencies :- \n");
    for (i = 0; i < 26; i++) {
        if (freq[i] > 0) {
            printf("%c :- %d\n", 'a' + i, freq[i]);
        }
    }

    return 0;
}
