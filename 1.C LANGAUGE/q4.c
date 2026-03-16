#include<stdio.h>
int main(){
	int row=3;
	int col=3;
	int a[row][col];
	int rowsum=0;
	int colsum=0;
	int num;
	
	printf(" Enter the row size:- ");
    scanf("%d", &row);
    
    printf(" Enter the col size:- ");
    scanf("%d", &col);
    
	
	for(int i =0;i<row;i++){
		for(int j=0;j<col;j++){
			printf("Enter the %d row %d col of array:- ",i,j);
			scanf("%d",&a[i][j]);
		}
	}
	
	printf("Enter the row number :-");
	scanf("%d",&num);
	printf("The elemts of row %d are:-",num);
	
	for(int i=0;i<col;i++){
		printf("%d ",a[num][i]);
	}
	printf("\n");
	for(int i=0;i<col;i++){
		rowsum =rowsum+a[num][i];
	}
	
	printf("The sum of the row %d is %d \n",num,rowsum);
	
	
	printf("Enter the col number :-");
	scanf("%d",&num);
	printf("The elemts of col %d are:-",num);
	
	for(int i=0;i<row;i++){
		printf("%d ",a[i][num]);
	}
	printf("\n");
	for(int i=0;i<col;i++){
		colsum =colsum+a[i][num];
	}
	
	printf("The sum of the row %d is %d",num,colsum);
	
	
	
	
	
		
	}