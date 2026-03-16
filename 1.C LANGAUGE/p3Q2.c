#include<stdio.h>

int main(){
    
    int num;
    int len =0;
    
    printf("Enter the num:-");
    scanf("%d",&num);
    
    while(num!= 0){
        num /= 10;
        len++;
    }
    
    
    printf("number of the digit is:-%d " ,len);
    
    
    
    
    
}