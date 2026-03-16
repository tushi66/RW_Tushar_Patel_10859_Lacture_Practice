#include<stdio.h>

int main(){
    
    char str[50];
    int length=0;
    int p=1;
    int i=0;
    
    printf("enter the any strings:--");
    scanf("%s", &str);
    
    while (str[length] != '\0'){
        length++;
    }
    for(int i=0; i< length / 2; i++){
        if(str[i]!= str[length - 1 -i] )
        {
         p=0;
        }
    }
    
    if(p){   
    printf("It is palidrome");
    }
    else{
    printf("it is not palidrome");
    }
    
}




