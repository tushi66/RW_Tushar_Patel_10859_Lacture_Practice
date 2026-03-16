#include<stdio.h>

int main(){
    int st;
    int size=10;
    int a[size];
    
    printf("Enter the any string:- \n");
        for(int i=0; i<size; i++){
            
            printf("a[%d] == ", i);
            scanf("%s", &a[i]);
            
        }
        
    printf("Enter the any string:- ");
        for(int i=0; i<size; i++){
            if(a[i]>= 'A' && a[i]<= 'Z'){
            a[i] += 32;}
            else if(a[i]>= 'a' && a[i]<= 'z')
            a[i] -= 32;
            
            
        }
        for(int i=0; i<size; i++){
            printf("%c", a[i]);
        }
    
    
    
}