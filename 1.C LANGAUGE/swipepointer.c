#include<stdio.h>


int main(){
    int x,y,sp;
    int *ptr1;
    int *ptr2;
    
    
    printf ("enter the element x:- ");
    scanf("%d", &x);
    
    printf ("enter the element x:- ");
    scanf("%d",&y);
    
    ptr1 = &x;
    ptr2 = &y;
    
    printf ("Before swaping \n x:- %d \n y:- %d \n",x,y);
    
    sp=*ptr1;
    *ptr1=*ptr2;
    *ptr2=sp;
    
    
    printf ("After swaping \n x:- %d \n y:- %d \n",x,y);  
    
}