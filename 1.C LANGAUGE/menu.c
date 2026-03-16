#include<stdio.h>

int main(){
    int size=5;
    int index=0;
    int array[size];
    int choice;
    int ele;
    int pos;
    
    do{
    printf("enter 1 for Create:- \n");
    printf("enter 2 for Read:- \n");
    printf("enter 3 for Update:- \n");
    printf("enter 4 for Delete:- \n");
    printf("enter 0 for Exit:- \n");
    printf("Enter the choice:-");
    scanf("%d", &choice);
    
        
    switch(choice)
    {
    case 1:
    if(index<size)
    {
        printf("enter the ele:-\n");
        scanf("%d", &ele);
        array[index]=ele;
        index++;
       printf("data updated....\n");
  }else
    
     printf("data limited over... \n");
        break; 
    case 2:
    
    printf("Read a date \n");
    for(int i=0; i<index; i++){
        printf("%d ", array[i]);
        
    }
    printf("\n");
    
        break; 
    case 3:
   
    printf("enter the pos wher u update:-");    
    scanf("%d", &pos);
     if(pos<index){
    printf("enter the new ele:- \n");
    scanf("%d", &ele);
    
    array[pos]=ele;
    
    printf("Updated a Data \n");
    }else
    printf("Invalid choise: \n");
    
        break; 
    case 4:
    
    printf("enter the deleted position:- ");
    scanf("%d", &pos);
    if(pos<index){
    
    for(int i=pos; i<index; i++){
    
    array[i]=array[i+1];
    
    }
    
    index--;
    printf("Delete a Data \n");
    }else 
    printf("Invalid Data.....\n");
    
    
        break; 
    case 0:
    printf("Exit a Data \n");
        break; 
    default:
    printf(" enter a valid choice\n");
    
        
    }
    
    }while(choice != 0);

}