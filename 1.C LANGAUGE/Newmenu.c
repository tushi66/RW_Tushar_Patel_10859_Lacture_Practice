#include<stdio.h>
int main(){
        int choice;   
        int ele;
        int size=5000;
        int array[size];
        int index=0;
        int pos;
    
    
        do{
        printf(" Enter 1 for Create:- \n");
        printf(" Enter 2 for Read:- \n");
        printf(" Enter 3 for Update:- \n");
        printf(" Enter 4 for Delete:- \n");
        printf(" Enter 0 for Exit:- \n");
        printf(" Enter your choice:- \n");
        scanf("%d", &choice);
        
        switch(choice){
            
            case 1:
            if(index<size){
                printf("enter the array size:-");
                scanf("%d", &size);
                for(int i=0; i<size; i++){
            printf(" Index %d position ele:-", index);
            scanf("%d", &ele);
            array[index]= ele;
            index++;
           
                } printf("Your Data Creat successfully...\n");
            }
            else
            printf(" Data limited......\n");
            
            break;
            
            case 2:
            if(index>0){
            printf("Read a Data..");
            for(int i=0; i<index; i++){
                
            printf(" %d ",array[i]);
            
            }
            printf("\n");
            } 
            else
            printf("Invalid Data....\n");
            break;
            
            case 3:
            
            printf("enter the which postion updated:- ");
            scanf("%d", &pos);
            if(pos<index){
            printf("enter the new element:- ", index);
            scanf("%d", &ele);
            
            array[pos]=ele;
            
            printf("Updated your Data...\n");
            }else
            printf("Invalid Data.......\n");
            
            break;
            
            case 4:
            printf("enter the which position deleted:- ");
            scanf("%d", &pos);
            if(pos<index){
            for(int i=pos; i<index; i++){
            array[i]=array[i+1];
            
            }
            index--;
            
            printf("deleted your Data sucess...\n");
            }else
            printf("Invalid Data......\n");
            break;
            
            case 0:
            printf("Exit the Data...\n");
            
            break;
            
            default:
                printf("invalid input please select valid choice \n");    
            
         }
        } while (choice!=0);
    
}