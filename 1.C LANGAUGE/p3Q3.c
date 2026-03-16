#include<stdio.h>

int main(){
    
    int num;
    int f,l;
    int sum;
    printf("Enter the num:-");
    scanf("%d",&num);

    f=num;
    
    while(f>=10){
        f= f/10;
    }
    
    l= num % 10;
    
    printf("number of the Fisrt digit is:-%d \n" ,f);
    printf("number of the digit is:-%d \n" ,l);
    
    sum = f+l;
    
    printf("the sum of %d first and %d last digit is.. %d", f,l,sum);
     
     
    
}