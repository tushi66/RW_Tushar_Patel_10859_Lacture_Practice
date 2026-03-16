#include<stdio.h>

int main(){
    
    int size=5;
    int a[size];
		
	
    
    printf(" Enter the array size:- ");
    scanf("%d", &size);
    
    for(int i=0; i<size; i++){
        printf(" a[%d]= ", i);
        scanf("%d", &a[i]);
    
    }
    printf("Negatice element of array:-");
    for(int i=0; i<size; i++){
        if(a[i]<0){
        printf(" %d ", a[i]);
        }
    }
    printf(",");

}