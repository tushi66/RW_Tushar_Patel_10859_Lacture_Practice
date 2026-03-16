#include <stdio.h>

int len(char *p) {
    int length = 0;
    while (*p != '\0') {
        length++;
        p++;
    }
    return length;
}

int main() {
    char a[100];

    printf("Enter any string: ");
    scanf(" %[^\n]s", a); 

    int ans = len(a);
    printf("The length of the string: %d\n", ans);

    return 0;
}
