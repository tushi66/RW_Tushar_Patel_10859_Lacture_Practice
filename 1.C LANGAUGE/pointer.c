#include<stdio.h>

int main(){
    
    int size;
    int a[size];
    int *ptr;
    int sq;
    int b;
    printf("enter the array size:--");
    scanf("%d",&size);
    
    ptr = a;
    
    printf("enter the array element:- \n");
    for(int i=0; i< size; i++){
        scanf("%u", & *(ptr + i));
   }
    
    printf("square of each element:- \n");
    for(int i=0; i<size; i++){
        b= *(ptr+i);    
          // sq= (*(ptr+i)) * (*(ptr+i));
        sq = b * b;
        printf("%d ", sq);
        
    }
    
    
    return 0;
    
    
    
}