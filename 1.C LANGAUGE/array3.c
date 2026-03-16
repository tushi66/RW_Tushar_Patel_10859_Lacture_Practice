#include<stdio.h>
int main(){
    int size=10;
    int a[size];
    float sum=0;
    float avg;
    
    printf("Enter the array size:- ");
    scanf("%d", &size);
    
    printf(" enter the array of element:- ");
    
    for(int i=0;i<size; i++){
    
    printf("a[%d] = ",i);
    scanf("%d", &a[i]);
    sum += a[i];
    }
    
    avg =  sum / size;
    
    printf("Avg of array %f ",avg); 
}