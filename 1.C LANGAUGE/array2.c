#include<stdio.h>

int main(){
    int size=10;
    int a[size];
    
    
    printf(" enter the array size:- ");
    scanf("%d", &size);
    
    printf("Enter a elements:- ");
    
    for(int i=0; i<size; i++ ){
        printf(" a[%d] = ", i);
        scanf("%d", &a[i]);
        
    }
    printf(" length of array:-%d \n",size);
    
    
}