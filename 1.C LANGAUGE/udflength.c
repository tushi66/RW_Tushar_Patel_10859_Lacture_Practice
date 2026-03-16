#include<stdio.h>

int len(char a[]){
    int leng=0;
    while(a[leng]!='\0'){  
        leng++;
    }
    return leng;
}

int  main(){
    
    char a[50];
    
    printf("enter the any strings:- ");
    scanf("%s", &a);
    
    int ans = len(a);
    printf("the length of strings:- %d ", ans);
}