#include <stdio.h>
#include <string.h>


int main() {
    char a[20];
    char upper;
    char digit;
    
    printf("Create your password: ");
    scanf("%s", a);  

    int leng = strlen(a);
    int Letter = 0;

    for (int i = 0; i < leng; i++) {
    char pass = a[i];
    {
        if (pass>='a'&& pass<='z' || pass>='A' && pass<='Z') {
            upper = 1;
            // break; 
        }else if(pass>='0'&& pass<='9'){
            digit =1;
        }
        else
        Letter=0; 
    }
    }

    if (upper && digit) {
        printf("Password is strong\n");
    } else {
        printf("Password is weak\n");
    }

    return 0;
}
